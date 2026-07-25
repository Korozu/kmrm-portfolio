export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

export const translations = {
  fr: {
    nav: {
      about: 'À propos',
      pricing: 'Tarifs',
      title: 'Komoremi',
      subtitle: 'Capturer l\'énergie brute de la scène.'
    },
    about: {
      title: 'À propos',
      description1: 'Photographe passionné par la scène musicale, je capture l\'énergie brute des concerts et l\'authenticité des artistes.',
      description2: 'Mon objectif est de retranscrire l\'atmosphère unique de chaque événement à travers mes photos.',
    },
    pricing: {
      title: 'Tarifs',
      subtitle: 'Des prestations adaptées à vos besoins',
      contact: 'Intéressé par une collaboration ?',
      contactButton: 'Me contacter',
      onQuote: 'Sur devis',
    },
  },
  en: {
    nav: {
      about: 'About',
      pricing: 'Pricing',
      title: 'Komoremi',
      subtitle: 'Capturing the raw energy of the stage.'
    },
    about: {
      title: 'About',
      description1: 'A photographer passionate about the music scene, I capture the raw energy of concerts and the authenticity of artists.',
      description2: 'My goal is to convey the unique atmosphere of each event through my photos.',
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Services tailored to your needs',
      contact: 'Interested in working together?',
      contactButton: 'Contact me',
      onQuote: 'On quote',
    },
  },
} as const;

export type Translations = typeof translations;
