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
    download: {
      title: 'Télécharger les photos',
      description: 'Pour télécharger les photos de cette galerie, contactez-moi sur',
      instructionContact: 'Je vous fournirai un mot de passe pour accéder au téléchargement.',
      passwordLabel: 'Mot de passe',
      passwordPlaceholder: 'Entrez le mot de passe',
      passwordError: 'Mot de passe incorrect',
      downloadButton: 'Télécharger les photos',
      footer: 'Les photos sont protégées par mot de passe. Merci de respecter les droits d\'auteur.'
    },
    about: {
      title: 'À propos',
      bio: {
        title: 'Bio',
        content: 'Photographe basé dans la métropole lilloise, j\'ai débuté en janvier 2026, poussé par la passion du live et le travail de photographes de la région comme <a href="https://instagram.com/mavo_photographe" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-secondary transition-all duration-300 underline decoration-primary/50 hover:decoration-secondary underline-offset-4 font-medium">@mavo_photographe</a> et <a href="https://instagram.com/e_po" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-secondary transition-all duration-300 underline decoration-primary/50 hover:decoration-secondary underline-offset-4 font-medium">@e_po</a>.\n' +
            '\n' +
            'Formé sur le terrain dans l\'ambiance authentique des petites salles lilloises (Caf&diskaire, High Voltage Bar, Le Circus), j\'ai rapidement évolué vers des scènes plus importantes comme The Black Lab et La Bulle Café.\n' +
            '\n' +
            'Que ce soit pour des groupes de musique ou des événements culturels organisés par les mairies et collectivités, j\'apporte un regard immersif et dynamique pour immortaliser vos temps forts.'
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
        description: 'Boostez votre image de scène avec un rendu pro, sans faire exploser le budget du groupe !',
        rows: [
          {
            prestation: 'Photos Promo / Groupe',
            contenu: ['~2h sur place', '10 à 15 photos'],
            tarif: '80 €',
          },
          {
            prestation: 'Concert Complet',
            contenu: ['Couverture du set', '~20 photos'],
            tarif: '100 €',
          },
          {
            prestation: 'Concert + Backstage',
            contenu: ['Balances + coulisses + set', '30 à 40 photos'],
            tarif: '150 €',
          },
        ],
        notes: [
          'Abonnement / Packs (Sur devis) : Forfait 3 concerts sur la saison à 240 € (au lieu de 300 €), soit le concert à 80 €.'
        ],
      },
      pros: {
        title: 'Groupes Pros & Labels',
        description: 'Valorisez vos tournées et votre identité visuelle avec une couverture photo haute intensité et un flux de livraison réactif.',
        rows: [
          {
            prestation: 'Concert Complet',
            contenu: ['Couverture du set', '~20 photos', 'Livraison 24h/48h'],
            tarif: '200 €',
          },
          {
            prestation: 'Concert + Backstage',
            contenu: ['Immersion globale (balances au post-show)', '30 à 40 photos'],
            tarif: '300 €',
          },
        ],
        notes: [
          'Abonnement (Sur devis) : Suivi sur 4 dates de tournée régionale pour 700 € (au lieu de 800 €).',
        ],
      },
      collectivites: {
        title: 'Mairies & Collectivités',
        description: 'Sublimez la vie culturelle de votre commune et immortalisez l\'énergie de vos événements avec un regard expert et une gestion administrative simplifiée.',
        rows: [
          {
            prestation: 'Format Court (Inauguration, cérémonie)',
            contenu: ['Reportage complet', '2h de présence', 'Livraison sous 48h-72h', '20 à 30 photos'],
            tarif: '180 €',
          },
          {
            prestation: 'Demi-Journée (Forum associatif, compétition, festival court)',
            contenu: ['Reportage complet (ambiance, temps forts, détails)', '4h de présence', 'Livraison sous 48h-72h', '30 à 50 photos'],
            tarif: '320 €',
          },
          {
            prestation: 'Journée / Soirée (Fête de la ville, festival, événement majeur)',
            contenu: ['Couverture intégrale de l\'événement', '8h de présence', '50+ visuels HD retouchés', 'Sélection express (5 à 10 photos sous 24h pour réseaux/presse)'],
            tarif: '580 €',
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
    download: {
      title: 'Download Photos',
      description: 'To download photos from this gallery, contact me on',
      instructionContact: 'I will provide you with a password to access the download.',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter password',
      passwordError: 'Incorrect password',
      downloadButton: 'Download Photos',
      footer: 'Photos are password protected. Please respect copyright.'
    },
    about: {
      title: 'About',
      bio: {
        title: 'Bio',
        content: 'Based in the Lille metropolitan area (France), I started my concert photography journey in January 2026, driven by a passion for live music and inspired by local photographers like <a href="https://instagram.com/mavo_photographe" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-secondary transition-all duration-300 underline decoration-primary/50 hover:decoration-secondary underline-offset-4 font-medium">@mavo_photographe</a> and <a href="https://instagram.com/e_po" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-secondary transition-all duration-300 underline decoration-primary/50 hover:decoration-secondary underline-offset-4 font-medium">@e_po</a>.\n' +
            '\n' +
            'Self-taught on the ground in the raw atmosphere of local venues (Caf&diskaire, High Voltage Bar, Le Circus), I quickly moved on to shoot larger stages such as The Black Lab and La Bulle Café.\n' +
            '\n' +
            'Whether working for bands, or cultural events hosted by city halls and local authorities, I bring a dynamic and immersive perspective to capture your key moments.'
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
        description: 'Elevate your stage presence with a pro-level look, without blowing the band\'s budget!',
        rows: [
          {
            prestation: 'Promo Photos / Band',
            contenu: ['~2h on site', '10 to 15 edited photos'],
            tarif: '80 €',
          },
          {
            prestation: 'Full Concert',
            contenu: ['Full set coverage', '~20 edited photos'],
            tarif: '100 €',
          },
          {
            prestation: 'Concert + Backstage',
            contenu: ['Soundcheck + backstage + set', '30 to 40 edited photos'],
            tarif: '150 €',
          },
        ],
        notes: [
          'Subscription / Packs (On quote): Package of 3 concerts per season at 240 € (instead of 300 €), i.e. 80 € per concert.'
        ],
      },
      pros: {
        title: 'Professional Bands & Labels',
        description: 'Enhance your tours and visual identity with high-intensity photo coverage and a rapid turnaround delivery workflow.',
        rows: [
          {
            prestation: 'Full Concert',
            contenu: ['Full set coverage', '~20 photos', '24h/48h delivery'],
            tarif: '200 €',
          },
          {
            prestation: 'Concert + Backstage',
            contenu: ['Full immersion (soundcheck to post-show)', '30 to 40 photos'],
            tarif: '300 €',
          },
        ],
        notes: [
          'Subscription (On quote): Coverage of 4 regional tour dates for 700 € (instead of 800 €).',
        ],
      },
      collectivites: {
        title: 'Municipalities & Public Bodies',
        description: 'Enhance your municipality\'s cultural life and capture the energy of your events with expert insight and streamlined administrative management.',
        rows: [
          {
            prestation: 'Short Format (Inauguration, ceremony)',
            contenu: ['Complete report', '2h presence', 'Delivery within 48h-72h', '20 to 30 edited photos'],
            tarif: '180 €',
          },
          {
            prestation: 'Half-Day (Community forum, competition, short festival)',
            contenu: ['Complete report (atmosphere, highlights, details)', '4h presence', 'Delivery within 48h-72h', '30 to 50 edited photos'],
            tarif: '320 €',
          },
          {
            prestation: 'Full Day / Evening (City festival, major event)',
            contenu: ['Full event coverage', '8h presence', '50+ edited HD visuals', 'Express selection (5 to 10 photos within 24h for social media/press)'],
            tarif: '580 €',
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
