import fs from 'fs';
import path from 'path';
import ExifReader from 'exifreader';

const ALBUMS_SOURCE = './public/images/albums';
const CONTENT_DEST = './content/albums';

// Fonction pour mélanger un tableau (Fisher-Yates Shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function getExifData(imagePath) {
    try {
        const tags = await ExifReader.load(imagePath);
        return {
            shutterSpeed: tags['ExposureTime']?.description || '',
            aperture: tags['FNumber']?.description || '',
            iso: tags['ISOSpeedRatings']?.value?.toString() || tags['ISO']?.description || '',
        };
    } catch (e) {
        console.log(`⚠️ Erreur EXIF pour ${imagePath} : ${e.message}`);
        return { shutterSpeed: '', aperture: '', iso: '' };
    }
}

async function generate() {
    if (!fs.existsSync(CONTENT_DEST)) fs.mkdirSync(CONTENT_DEST, { recursive: true });

    const folders = fs.readdirSync(ALBUMS_SOURCE).filter(f =>
        fs.lstatSync(path.join(ALBUMS_SOURCE, f)).isDirectory()
    );

    for (const folder of folders) {
        const destPath = path.join(CONTENT_DEST, `${folder}.md`);

        // --- GUARD : On ne régénère pas si le fichier existe déjà ---
        if (fs.existsSync(destPath)) {
            console.log(`⏩ Album sauté : ${folder}.md existe déjà.`);
            continue;
        }

        const fullPath = path.join(ALBUMS_SOURCE, folder);
        const allFiles = fs.readdirSync(fullPath).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

        const coverFile = allFiles.find(f => f.toLowerCase().startsWith('cover.'));
        let galleryFiles = allFiles.filter(f => f !== coverFile);

        // --- ORDRE ALÉATOIRE ---
        galleryFiles = shuffle(galleryFiles);

        const finalCoverPath = coverFile
            ? `/images/albums/${folder}/${coverFile}`
            : `/images/albums/${folder}/${galleryFiles[0]}`;

        const imageList = [];
        for (const file of galleryFiles) {
            const exif = await getExifData(path.join(fullPath, file));
            imageList.push({
                src: `/images/albums/${folder}/${file}`,
                ...exif
            });
        }

        const markdown = `---
title: "${folder.replace(/-/g, ' ')}"
artist: "Unknown Artist"
venue: "Unknown Venue"
date: "${new Date().toISOString().split('T')[0]}"
cover: "${finalCoverPath}"
images:
${imageList.map(img => `  - src: "${img.src}"
    shutterSpeed: "${img.shutterSpeed}"
    aperture: "${img.aperture}"
    iso: "${img.iso}"`).join('\n')}
---
`;

        fs.writeFileSync(destPath, markdown);
        console.log(`✨ Nouvel album généré : ${folder} (${imageList.length} photos mélangées).`);
    }
}

generate();