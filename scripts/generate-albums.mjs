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
        // 1. Création du dossier spécifique dans content/albums
        const albumFolder = path.join(CONTENT_DEST, folder);
        const destPath = path.join(albumFolder, `${folder}.md`); // On l'appelle index.md ou page.md selon ton Contentlayer

        if (!fs.existsSync(albumFolder)) {
            fs.mkdirSync(albumFolder, { recursive: true });
        }

        if (fs.existsSync(destPath)) {
            console.log(`⏩ Skip: ${folder}/index.md existe déjà.`);
            continue;
        }

        const fullPath = path.join(ALBUMS_SOURCE, folder);
        const allFiles = fs.readdirSync(fullPath).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

        const coverFile = allFiles.find(f => f.toLowerCase().startsWith('cover.'));
        let galleryFiles = allFiles.filter(f => f !== coverFile);

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
date: "${new Date().toISOString().split('T')[0]}"
venue: "Unknown Venue"
cover: "${finalCoverPath}"
network:
    instagram: ""
    facebook: ""
    spotify: ""
    youtube: ""
images:
${imageList.map(img => `  - src: "${img.src}"
    shutterSpeed: "${img.shutterSpeed}"
    aperture: "${img.aperture}"
    iso: "${img.iso}"`).join('\n')}
---
`;

        fs.writeFileSync(destPath, markdown);
        console.log(`✨ Dossier et Markdown générés pour : ${folder}`);
    }
}

generate();
