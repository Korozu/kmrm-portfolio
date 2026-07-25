'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PricingTable from '@/components/pricing/PricingTable';
import InfoBox from '@/components/pricing/InfoBox';
import { Mail } from 'lucide-react';

export default function PricingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-extrabold tracking-tighter mb-4">
            {t.pricing.title}
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Info Box principale */}
        <InfoBox type="info" className="mb-12">
          <strong>{t.pricing.infoBox.customRequests}</strong> {t.pricing.infoBox.customRequestsText}
        </InfoBox>

        {/* Section 1 */}
        <div className="mb-16">
          <PricingTable
            title={t.pricing.amateurs.title}
            description={t.pricing.amateurs.description}
            rows={t.pricing.amateurs.rows}
            notes={t.pricing.amateurs.notes}
          />
        </div>

        {/* Section 2 */}
        <div className="mb-16">
          <PricingTable
            title={t.pricing.pros.title}
            description={t.pricing.pros.description}
            rows={t.pricing.pros.rows}
            notes={t.pricing.pros.notes}
          />
        </div>

        {/* Section 3 */}
        <div className="mb-16">
          <PricingTable
            title={t.pricing.collectivites.title}
            description={t.pricing.collectivites.description}
            rows={t.pricing.collectivites.rows}
            notes={t.pricing.collectivites.notes}
          />
        </div>

        {/* Informations complémentaires */}
        <div className="space-y-6 mb-12">
          <InfoBox type="note">
            <p className="mb-2"><strong>{t.pricing.additionalInfo.included.title}</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              {t.pricing.additionalInfo.included.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoBox>

          <InfoBox type="success">
            <strong>{t.pricing.additionalInfo.delivery.title}</strong> {t.pricing.additionalInfo.delivery.text}
          </InfoBox>

          <InfoBox type="warning">
            <strong>{t.pricing.additionalInfo.travel.title}</strong> {t.pricing.additionalInfo.travel.text}
          </InfoBox>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center bg-zinc-900 border border-zinc-800 rounded-lg p-8">
          <Mail className="w-12 h-12 mx-auto mb-4 text-zinc-400" />
          <h3 className="text-2xl font-bold mb-3">{t.pricing.cta.title}</h3>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            {t.pricing.cta.text}
          </p>
          <a
            href="mailto:kmrm.shots@gmail.com"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-zinc-200 transition-colors"
          >
            {t.pricing.cta.button}
          </a>
        </div>
      </div>
    </div>
  );
}
