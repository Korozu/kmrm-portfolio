import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export interface PricingRow {
  prestation: string;
  contenu: string[];
  tarif: string;
}

export interface PricingTableProps {
  title: string;
  description?: string;
  rows: readonly PricingRow[];
  notes?: readonly string[];
  className?: string;
}

export default function PricingTable({
  title,
  description,
  rows,
  notes,
  className = '',
}: Readonly<PricingTableProps>) {
  const { t } = useLanguage();

  return (
    <div className={`bg-surface border border-primary/30 rounded-lg overflow-hidden ${className}`}>
      <div className="p-6 border-b border-primary/20">
        <h2 className="text-2xl font-bold mb-2 text-accent">{title}</h2>
        {description && (
          <p className="text-secondary text-sm italic leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/20 border-b border-primary/20">
              <th className="text-left p-4 font-semibold text-accent">{t.pricing.tables.prestation}</th>
              <th className="text-left p-4 font-semibold text-accent">{t.pricing.tables.contenu}</th>
              <th className="text-right p-4 font-semibold text-accent">{t.pricing.tables.tarif}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.prestation + index}
                className="border-b border-muted/30 hover:bg-primary/10 transition-colors"
              >
                <td className="p-4 font-medium text-zinc-100">{row.prestation}</td>
                <td className="p-4 text-zinc-300 text-sm">
                  <ul className="space-y-1">
                    {row.contenu.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="p-4 text-right font-semibold text-lg whitespace-nowrap text-primary">
                  {row.tarif}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {notes && notes.length > 0 && (
        <div className="p-6 bg-muted/20 border-t border-primary/20">
          <ul className="space-y-2">
            {notes.map((note, index) => (
              <li key={note + index} className="text-sm text-secondary flex items-start">
                <span className="mr-2 mt-1 text-primary">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
