'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ConstructionIcon } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
      <div className="h-full flex justify-center items-center gap-4">
        <ConstructionIcon /> WORK IN PROGRESS
      </div>
  )

  /*return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tighter mb-8">
          {t.about.title}
        </h1>
        <div className="prose prose-invert">
          <p className="text-zinc-300 text-lg mb-4">
            {t.about.description1}
          </p>
          <p className="text-zinc-300 text-lg">
            {t.about.description2}
          </p>
        </div>
      </div>
    </div>
  );*/
}
