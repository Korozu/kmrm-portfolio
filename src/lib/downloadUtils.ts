import JSZip from "jszip";

/**
 * Télécharge toutes les images d'un album dans un fichier ZIP
 * @param images - Tableau d'objets images avec leurs sources
 * @param albumTitle - Titre de l'album pour nommer le fichier ZIP
 */
export async function downloadAlbumAsZip(
  images: Array<{ src: string }>,
  albumTitle: string
): Promise<void> {
  try {
    const zip = new JSZip();
    const imageFolder = zip.folder(albumTitle);

    if (!imageFolder) {
      throw new Error('Impossible de créer le dossier dans le ZIP');
    }

    // Message de progression (optionnel)
    console.log(`📦 Création du ZIP avec ${images.length} images...`);

    // Télécharger toutes les images et les ajouter au ZIP
    const downloadPromises = images.map(async (image, index) => {
      try {
        // Télécharger l'image
        const response = await fetch(image.src);

        if (!response.ok) {
          console.warn(`⚠️ Impossible de télécharger ${image.src}`);
          return null;
        }

        const blob = await response.blob();

        // Extraire l'extension du fichier ou utiliser .jpg par défaut
        const extension = image.src.split('.').pop()?.split('?')[0] || 'jpg';
        const fileName = `${albumTitle}-${String(index + 1).padStart(3, '0')}.${extension}`;

        // Ajouter l'image au ZIP
        imageFolder.file(fileName, blob);

        return fileName;
      } catch (error) {
        console.error(`Erreur lors du téléchargement de ${image.src}:`, error);
        return null;
      }
    });

    // Attendre que toutes les images soient téléchargées
    const results = await Promise.all(downloadPromises);
    const successCount = results.filter(Boolean).length;

    console.log(`✅ ${successCount}/${images.length} images ajoutées au ZIP`);

    // Générer le fichier ZIP
    const zipBlob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 }
    });

    // Créer un lien de téléchargement et le déclencher
    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${albumTitle}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Nettoyer l'URL
    setTimeout(() => URL.revokeObjectURL(url), 100);

    console.log('✅ Téléchargement du ZIP lancé !');
  } catch (error) {
    console.error('❌ Erreur lors de la création du ZIP:', error);
    throw new Error('Impossible de créer le fichier ZIP. Veuillez réessayer.');
  }
}

/**
 * Estime la taille du ZIP à télécharger
 * @param imageCount - Nombre d'images
 * @returns Taille estimée en MB
 */
export function estimateZipSize(imageCount: number): number {
  // Estimation: ~2MB par image (moyenne pour des photos de concert)
  const averageImageSizeMB = 2;
  return imageCount * averageImageSizeMB;
}

