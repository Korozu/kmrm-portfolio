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
      bio: {
        title: 'Bio',
        content: 'Photographe spécialisé dans la musique live (Rock, Métal, Scènes alternatives) et basé dans la métropole lilloise, je sillonne les salles et les festivals pour immortaliser la fureur, la lumière et l\'émotion du live.'
      },
      services: {
        title: 'Services/Collaborations',
        items: [
          {
            title: 'Couverture Live & Festivals',
            content: 'Reportages photo complets pour webzines, zines et presse musicale.'
          },
          {
            title: 'Collaboration Groupes & Salles',
            content: 'Shoots concerts, visuels de tournée, coulisses / backstage.'
          },
          {
            title: 'Publications',
            content: 'Prise de vue calibrée pour le web et le format éditorial.'
          },
          {
            title: 'Événementiel & Collectivités',
            content: 'Couverture de vos événements culturels, festivités municipales, inaugurations, fêtes de la musique et manifestations locales.'
          }
        ]
      },
      equipment: {
        title: 'Matériel',
        body: 'Boitier',
        bodyItems: ['Sony A6400 APS-C'],
        lenses: 'Objectifs',
        lensesItems: [
          'Sigma 18-50 f/2.8',
          'Viltrox 75mm f/1.2',
          'Sigma 16mm f/1.4'
        ]
      }
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
      bio: {
        title: 'Bio',
        content: 'Photographer specialized in live music (Rock, Metal, Alternative scenes) and based in the Lille metropolis, I travel through venues and festivals to capture the fury, light and emotion of live performances.'
      },
      services: {
        title: 'Services/Collaborations',
        items: [
          {
            title: 'Live & Festival Coverage',
            content: 'Complete photo reports for webzines, zines and music press.'
          },
          {
            title: 'Band & Venue Collaborations',
            content: 'Concert shoots, tour visuals, behind the scenes / backstage.'
          },
          {
            title: 'Publications',
            content: 'Calibrated shots for web and editorial format.'
          },
          {
            title: 'Events & Municipalities',
            content: 'Coverage of your cultural events, municipal festivities, inaugurations, music festivals and local events.'
          }
        ]
      },
      equipment: {
        title: 'Equipment',
        body: 'Camera',
        bodyItems: ['Sony A6400 APS-C'],
        lenses: 'Lenses',
        lensesItems: [
          'Sigma 18-50 f/2.8',
          'Viltrox 75mm f/1.2',
          'Sigma 16mm f/1.4'
        ]
      }
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
