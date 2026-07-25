'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ConstructionIcon } from 'lucide-react';

export default function PricingPage() {
  const { t } = useLanguage();

  const pricingOptions = [
    {
      title: 'Concert',
      price: t.pricing.onQuote,
      features: [
        'Couverture complète de l\'événement',
        'Photos retouchées',
        'Livraison en haute résolution',
        'Droits d\'utilisation inclus',
      ],
    },
    {
      title: 'Portrait Artiste',
      price: t.pricing.onQuote,
      features: [
        'Session photo personnalisée',
        'Plusieurs looks/ambiances',
        'Retouches professionnelles',
        'Fichiers RAW disponibles',
      ],
    },
    {
      title: 'Package Festival',
      price: t.pricing.onQuote,
      features: [
        'Couverture multi-jours',
        'Plusieurs artistes',
        'Reportage complet',
        'Livraison rapide',
      ],
    },
  ];

  return (
      <div className="h-full flex justify-center items-center gap-4">
        <ConstructionIcon /> WORK IN PROGRESS
      </div>
  )

  /*return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tighter mb-4">
          {t.pricing.title}
        </h1>
        <p className="text-zinc-400 text-lg mb-12">
          {t.pricing.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option) => (
            <div
              key={option.title}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors"
            >
              <h2 className="text-2xl font-bold mb-2">{option.title}</h2>
              <p className="text-3xl font-extrabold mb-6">{option.price}</p>
              <ul className="space-y-3">
                {option.features.map((feature, index) => (
                  <li key={index} className="text-zinc-300 flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-400 mb-4">
            {t.pricing.contact}
          </p>
          <a
            href="mailto:contact@kmrm.fr"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-zinc-200 transition-colors"
          >
            {t.pricing.contactButton}
          </a>
        </div>
      </div>
    </div>
  );*/
}
