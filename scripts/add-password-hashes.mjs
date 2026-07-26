import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { createHash } from 'crypto';

// Script pour ajouter un passwordHash à chaque album
// Le mot de passe est généré à partir du nom du dossier de l'album
// Usage: node scripts/add-password-hashes.mjs

function generatePasswordHash(password) {
  return createHash('sha256').update(password).digest('hex');
}

async function getAllAlbumFiles(albumsDir) {
  const albumFolders = await readdir(albumsDir, { withFileTypes: true });
  const albumFiles = [];

  for (const folder of albumFolders) {
    if (folder.isDirectory()) {
      const folderPath = join(albumsDir, folder.name);
      const files = await readdir(folderPath);
      const mdFile = files.find(file => file.endsWith('.md'));

      if (mdFile) {
        albumFiles.push({
          path: join(folderPath, mdFile),
          folderName: folder.name
        });
      }
    }
  }

  return albumFiles;
}

function addPasswordHashToFrontmatter(content, passwordHash) {
  // Séparer le frontmatter du reste du contenu
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    console.warn('⚠️  Pas de frontmatter trouvé');
    return content;
  }

  const frontmatter = match[1];
  const restOfContent = content.substring(match[0].length);

  // Vérifier si passwordHash existe déjà
  if (frontmatter.includes('passwordHash:')) {
    // Remplacer le passwordHash existant
    const updatedFrontmatter = frontmatter.replace(
      /passwordHash:\s*"[^"]*"/,
      `passwordHash: "${passwordHash}"`
    );
    return `---\n${updatedFrontmatter}\n---${restOfContent}`;
  } else {
    // Ajouter le passwordHash après la ligne 'cover'
    const lines = frontmatter.split('\n');
    const coverIndex = lines.findIndex(line => line.startsWith('cover:'));

    if (coverIndex !== -1) {
      lines.splice(coverIndex + 1, 0, `passwordHash: "${passwordHash}"`);
    } else {
      // Si pas de ligne 'cover', ajouter après 'venue' ou 'date'
      const venueIndex = lines.findIndex(line => line.startsWith('venue:'));
      const dateIndex = lines.findIndex(line => line.startsWith('date:'));
      const insertIndex = venueIndex !== -1 ? venueIndex + 1 : (dateIndex !== -1 ? dateIndex + 1 : lines.length);
      lines.splice(insertIndex, 0, `passwordHash: "${passwordHash}"`);
    }

    const updatedFrontmatter = lines.join('\n');
    return `---\n${updatedFrontmatter}\n---${restOfContent}`;
  }
}

async function processAlbums() {
  const albumsDir = join(process.cwd(), 'content', 'albums');

  console.log('🔍 Recherche des fichiers markdown dans content/albums/...\n');

  const albumFiles = await getAllAlbumFiles(albumsDir);

  console.log(`📁 ${albumFiles.length} albums trouvés\n`);

  let processedCount = 0;
  let errorCount = 0;

  for (const { path, folderName } of albumFiles) {
    try {
      // Générer le mot de passe à partir du nom du dossier
      const password = folderName;
      const passwordHash = generatePasswordHash(password);

      // Lire le contenu du fichier
      const content = await readFile(path, 'utf-8');

      // Ajouter ou mettre à jour le passwordHash
      const updatedContent = addPasswordHashToFrontmatter(content, passwordHash);

      // Écrire le fichier mis à jour
      await writeFile(path, updatedContent, 'utf-8');

      console.log(`✅ ${folderName}`);
      console.log(`   Mot de passe: ${password}`);
      console.log(`   Hash: ${passwordHash.substring(0, 16)}...`);
      console.log();

      processedCount++;
    } catch (error) {
      console.error(`❌ Erreur avec ${folderName}:`, error.message);
      errorCount++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`\n✨ Traitement terminé!`);
  console.log(`   ${processedCount} albums mis à jour`);
  if (errorCount > 0) {
    console.log(`   ${errorCount} erreurs`);
  }
  console.log();
}

// Exécuter le script
processAlbums().catch(console.error);

