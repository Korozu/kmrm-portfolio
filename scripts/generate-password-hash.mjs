import { createHash } from 'crypto';

// Script pour générer un hash SHA-256 d'un mot de passe
// Usage: node scripts/generate-password-hash.mjs <password>

// Export de la fonction pour réutilisation
export function generatePasswordHash(password) {
  return createHash('sha256').update(password).digest('hex');
}
