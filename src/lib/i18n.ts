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
    exif: {
      shutterSpeed: 'Vitesse',
      aperture: 'Ouverture',
      iso: 'ISO'
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
      title: 'Tarifs & Prestations',
      subtitle: 'Photographe spécialisé en musique live, je propose des prestations adaptées à tous les acteurs de la scène musicale : groupes émergents, artistes confirmés, labels et collectivités.',
      contact: 'Intéressé par une collaboration ?',
      contactButton: 'Me contacter',
      onQuote: 'Sur devis',
      infoBox: {
        customRequests: 'Demandes particulières ?',
        customRequestsText: 'Les tarifs ci-dessous sont indicatifs. N\'hésitez pas à me contacter pour un devis personnalisé adapté à vos besoins spécifiques (tournées, festivals, projets long terme, etc.).',
      },
      tables: {
        prestation: 'Prestation',
        contenu: 'Contenu',
        tarif: 'Tarif',
      },
      amateurs: {
        title: 'Groupes Amateurs & Émergents',
        description: 'Prix d\'appel très doux, parfait pour se constituer un réseau et faire tourner la structure.',
        rows: [
          {
            prestation: 'Photos Promo / Groupe',
            contenu: '1h sur place, 5 à 8 photos retouchées',
            tarif: '80 €',
          },
          {
            prestation: 'Concert Complet',
            contenu: 'Couverture du set, ~20 photos retouchées',
            tarif: '100 €',
          },
          {
            prestation: 'Concert + Backstage',
            contenu: 'Balances + coulisses + set, 30 à 40 photos',
            tarif: '150 €',
          },
        ],
        notes: [
          'Abonnement / Packs (Sur devis) : Forfait 3 concerts sur la saison à 240 € (au lieu de 300 €), soit le concert à 80 €.'
        ],
      },
      pros: {
        title: 'Groupes Pros & Labels',
        description: 'Des tarifs abordables pour des petites prods ou des groupes en développement qui cherchent un rendu efficace sans payer le tarif d\'un boîtier 24x36.',
        rows: [
          {
            prestation: 'Photos Promo / Groupe',
            contenu: '1h30 à 2h, travail sur la lumière, 10 photos',
            tarif: '180 €',
          },
          {
            prestation: 'Concert Complet',
            contenu: 'Présence ~2h, ~20 photos (livraison 24h/48h)',
            tarif: '200 €',
          },
          {
            prestation: 'Concert + Backstage',
            contenu: 'Immersion globale (balances au post-show), 30 à 40 photos',
            tarif: '300 €',
          },
        ],
        notes: [
          'Abonnement (Sur devis) : Suivi sur 4 dates de tournée régionale pour 700 € (au lieu de 800 €).',
        ],
      },
      collectivites: {
        title: 'Mairies & Collectivités',
        description: 'Adapté aux événements locaux, fêtes de la musique, scènes d\'été et petits festivals de la métropole lilloise.',
        rows: [
          {
            prestation: 'Photos Promo / Officiel',
            contenu: 'Portraits/presse pour programmation, 10 photos',
            tarif: '150 €',
          },
          {
            prestation: 'Concert / Plateau Unique',
            contenu: 'Couverture d\'une tête d\'affiche ou soirée, ~20 photos',
            tarif: '250 €',
          },
          {
            prestation: 'Événement Complet + Backstage',
            contenu: 'Soirée/Demi-journée globale (ambiance, public, coulisses), 35 à 45 photos',
            tarif: '380 €',
          },
        ],
        notes: [
          'Abonnement / Partenariat (Sur devis) : Pack "Saison Culturelle" (ex: 3 événements dans l\'année) avec une remise globale de 15 %.'
        ],
      },
      additionalInfo: {
        included: {
          title: 'Inclus dans toutes les prestations :',
          items: [
            'Retouches professionnelles (balance des couleurs, exposition, netteté)',
            'Livraison en haute résolution (format JPEG, optimisé pour le web et l\'impression)',
            'Droits d\'utilisation pour usage promotionnel (réseaux sociaux, site web, presse)',
            'Galerie en ligne privée pour téléchargement facile',
          ],
        },
        delivery: {
          title: 'Livraison rapide :',
          text: 'Pour les concerts et événements, livraison sous 48h à 72h (ou 24h sur demande avec supplément).',
        },
        travel: {
          title: 'Frais de déplacement :',
          text: 'Inclus dans un rayon de 30 km autour de Lille. Au-delà, supplément de 0,40 € / km ou forfait à définir selon la distance.',
        },
      },
      notesModalities: {
        title: 'Notes & Modalités',
        delivery: {
          title: 'Délais de livraison',
          text: 'Pour les concerts et événements, livraison sous 48h à 72h (ou 24h sur demande avec supplément).',
        },
        travel: {
          title: 'Frais de déplacement',
          text: 'Inclus dans un rayon de 30 km autour de Lille. Au-delà, supplément de 0,40 € / km ou forfait à définir selon la distance.',
        },
        solidarity: {
          title: 'Engagements culturels et solidaires',
          text: 'Dans le cadre de nos engagements culturels et solidaires, l\'association peut ponctuellement réaliser des prestations à titre gracieux ou sous forme de partenariat pour soutenir des projets émergents ou des événements associatifs.',
        },
      },
      cta: {
        title: 'Besoin d\'un devis personnalisé ?',
        text: 'Chaque projet est unique. N\'hésitez pas à me contacter pour discuter de vos besoins et obtenir un devis adapté à votre événement, tournée ou projet spécifique.',
        button: 'Demander un devis',
      },
      association: {
        text: 'Choisir Komoremi, c\'est soutenir une association passionnée (Loi 1901) ! Chaque prestation nous permet de financer du matériel plus performant et d\'élever continuellement la qualité visuelle des projets que nous couvrons avec vous.',
      },
    },
  },
  en: {
    nav: {
      about: 'About',
      pricing: 'Pricing',
      title: 'Komoremi',
      subtitle: 'Capturing the raw energy of the stage.'
    },
    exif: {
      shutterSpeed: 'Shutter Speed',
      aperture: 'Aperture',
      iso: 'ISO'
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
      title: 'Pricing & Services',
      subtitle: 'As a live music photographer, I offer services tailored to all music scene players: emerging bands, established artists, labels and municipalities.',
      contact: 'Interested in working together?',
      contactButton: 'Contact me',
      onQuote: 'On quote',
      infoBox: {
        customRequests: 'Custom requests?',
        customRequestsText: 'The rates below are indicative. Feel free to contact me for a personalized quote adapted to your specific needs (tours, festivals, long-term projects, etc.).',
      },
      tables: {
        prestation: 'Service',
        contenu: 'Content',
        tarif: 'Price',
      },
      amateurs: {
        title: 'Amateur & Emerging Bands',
        description: 'Very affordable prices, perfect for building a network and keeping the structure running.',
        rows: [
          {
            prestation: 'Promo Photos / Band',
            contenu: '1h on site, 5 to 8 retouched photos',
            tarif: '€80',
          },
          {
            prestation: 'Full Concert',
            contenu: 'Set coverage, ~20 retouched photos',
            tarif: '€100',
          },
          {
            prestation: 'Concert + Backstage',
            contenu: 'Soundcheck + backstage + set, 30 to 40 photos',
            tarif: '€150',
          },
        ],
        notes: [
          'Subscription / Packs (On quote): Package of 3 concerts per season at €240 (instead of €300), i.e. €80 per concert.'
        ],
      },
      pros: {
        title: 'Professional Bands & Labels',
        description: 'Affordable rates for small productions or developing bands looking for effective results without paying for a 24x36 camera.',
        rows: [
          {
            prestation: 'Promo Photos / Band',
            contenu: '1h30 to 2h, lighting work, 10 photos',
            tarif: '€180',
          },
          {
            prestation: 'Full Concert',
            contenu: 'Presence ~2h, ~20 photos (24h/48h delivery)',
            tarif: '€200',
          },
          {
            prestation: 'Concert + Backstage',
            contenu: 'Full immersion (soundcheck to post-show), 30 to 40 photos',
            tarif: '€300',
          },
        ],
        notes: [
          'Subscription (On quote): Coverage of 4 regional tour dates for €700 (instead of €800).',
        ],
      },
      collectivites: {
        title: 'Municipalities & Public Bodies',
        description: 'Adapted to local events, music festivals, summer stages and small festivals in the Lille metropolis.',
        rows: [
          {
            prestation: 'Promo Photos / Official',
            contenu: 'Portraits/press for programming, 10 photos',
            tarif: '€150',
          },
          {
            prestation: 'Concert / Single Act',
            contenu: 'Coverage of a headliner or evening, ~20 photos',
            tarif: '€250',
          },
          {
            prestation: 'Full Event + Backstage',
            contenu: 'Evening/Half-day global (atmosphere, public, backstage), 35 to 45 photos',
            tarif: '€380',
          },
        ],
        notes: [
          'Subscription / Partnership (On quote): "Cultural Season" pack (e.g.: 3 events per year) with a global 15% discount.'
        ],
      },
      additionalInfo: {
        included: {
          title: 'Included in all services:',
          items: [
            'Professional retouching (color balance, exposure, sharpness)',
            'High-resolution delivery (JPEG format, optimized for web and print)',
            'Usage rights for promotional purposes (social media, website, press)',
            'Private online gallery for easy download',
          ],
        },
        delivery: {
          title: 'Fast delivery:',
          text: 'For concerts and events, delivery within 48h to 72h (or 24h on request with surcharge).',
        },
        travel: {
          title: 'Travel fees:',
          text: 'Included within 30 km around Lille. Beyond that, surcharge of €0.40 / km or package to be defined according to distance.',
        },
      },
      notesModalities: {
        title: 'Notes & Terms',
        delivery: {
          title: 'Delivery time',
          text: 'For concerts and events, delivery within 48h to 72h (or 24h on request with surcharge).',
        },
        travel: {
          title: 'Travel fees',
          text: 'Included within 30 km around Lille. Beyond that, surcharge of €0.40 / km or package to be defined according to distance.',
        },
        solidarity: {
          title: 'Cultural and solidarity commitments',
          text: 'As part of our cultural and solidarity commitments, the association may occasionally provide services free of charge or through partnerships to support emerging projects or community events.',
        },
      },
      cta: {
        title: 'Need a personalized quote?',
        text: 'Each project is unique. Feel free to contact me to discuss your needs and get a quote tailored to your event, tour or specific project.',
        button: 'Request a quote',
      },
      association: {
        text: 'Choosing Komoremi means supporting a passionate non-profit organization (French Law 1901)! Each service allows us to finance better equipment and continuously elevate the visual quality of the projects we cover with you.',
      },
    },
  },
} as const;

export type Translations = typeof translations;
