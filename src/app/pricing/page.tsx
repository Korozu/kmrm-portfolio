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
          <h1 className="text-5xl font-extrabold tracking-tighter mb-4 text-accent">
            {t.pricing.title}
          </h1>
          <p className="text-secondary text-lg max-w-3xl">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Section association */}
        <div className="mb-12 bg-gradient-to-r from-surface via-primary-dark/20 to-surface border border-primary/40 rounded-lg p-6 text-center">
          <p className="text-zinc-300 text-lg leading-relaxed">
            {t.pricing.association.text}
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

        {/* Notes & Modalités */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-accent">
            {t.pricing.notesModalities.title}
          </h2>
          <div className="space-y-4">
            <div className="bg-surface border border-secondary/40 rounded-lg p-6 hover:border-secondary/60 transition-colors">
              <p className="mb-2"><strong className="text-secondary">{t.pricing.additionalInfo.included.title}</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-zinc-400">
                {t.pricing.additionalInfo.included.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-primary/40 rounded-lg p-6 hover:border-primary/60 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {t.pricing.notesModalities.delivery.title}
              </h3>
              <p className="text-zinc-400">
                {t.pricing.notesModalities.delivery.text}
              </p>
            </div>

            <div className="bg-surface border border-accent/40 rounded-lg p-6 hover:border-accent/60 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-accent">
                {t.pricing.notesModalities.travel.title}
              </h3>
              <p className="text-zinc-400">
                {t.pricing.notesModalities.travel.text}
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-dark/30 via-secondary/20 to-primary-dark/30 border border-primary/50 rounded-lg p-6 hover:border-primary/70 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-accent">
                {t.pricing.notesModalities.solidarity.title}
              </h3>
              <p className="text-zinc-200 leading-relaxed">
                {t.pricing.notesModalities.solidarity.text}
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-surface border border-primary/30 rounded-lg p-8 hover:border-primary/50 transition-colors">
          <div className="text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-3 text-accent">{t.pricing.cta.title}</h3>
            <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
              {t.pricing.cta.text}
            </p>
            <a
              href="mailto:kmrm.shots@gmail.com"
              className="inline-block bg-primary hover:bg-secondary text-black px-8 py-3 rounded-lg font-semibold transition-all shadow-lg"
            >
              {t.pricing.cta.button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
