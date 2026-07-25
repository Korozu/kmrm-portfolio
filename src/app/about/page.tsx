'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Camera, Users, Package } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 text-accent">
            {t.about.title}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        {/* Section Bio */}
        <section className="bg-surface border border-primary/30 rounded-lg p-8 md:p-10 hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <Camera className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-accent">
              {t.about.bio.title}
            </h2>
          </div>
          <div
            className="text-zinc-300 text-lg md:text-xl leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: t.about.bio.content }}
          />
        </section>

        {/* Section Services/Collaborations */}
        <section className="bg-surface border border-primary/30 rounded-lg p-8 md:p-10 hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-accent">
              {t.about.services.title}
            </h2>
          </div>
          <ul className="space-y-4">
            {t.about.services.items.map((item) => (
              <li key={item.title} className="flex gap-4 items-start group">
                <span className="text-primary mt-1 text-xl group-hover:scale-125 transition-transform">•</span>
                <span className="text-zinc-300 text-lg md:text-xl group-hover:text-accent transition-colors">
                  <strong className="font-bold text-accent">{item.title}</strong>
                  {item.content && ` : ${item.content}`}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section Matériel */}
        <section className="bg-surface border border-primary/30 rounded-lg p-8 md:p-10 hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-3 mb-8">
            <Package className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-accent">
              {t.about.equipment.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Boitier */}
            <div className="bg-black border border-muted/30 rounded-lg p-6 hover:border-secondary/50 transition-colors">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent border-b border-primary/30 pb-3">
                {t.about.equipment.body}
              </h3>
              <ul className="space-y-3">
                {t.about.equipment.bodyItems.map((item) => (
                  <li key={item} className="flex gap-3 items-center group">
                    <span className="text-primary group-hover:scale-125 transition-transform">•</span>
                    <span className="text-zinc-300 text-lg group-hover:text-accent transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Objectifs */}
            <div className="bg-black border border-muted/30 rounded-lg p-6 hover:border-secondary/50 transition-colors">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent border-b border-primary/30 pb-3">
                {t.about.equipment.lenses}
              </h3>
              <ul className="space-y-3">
                {t.about.equipment.lensesItems.map((item) => (
                  <li key={item} className="flex gap-3 items-center group">
                    <span className="text-primary group-hover:scale-125 transition-transform">•</span>
                    <span className="text-zinc-300 text-lg group-hover:text-accent transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="h-24"></div>
    </div>
  );
}
