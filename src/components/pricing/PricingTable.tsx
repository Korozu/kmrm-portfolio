import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export interface PricingRow {
  prestation: string;
  contenu: string;
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
}: PricingTableProps) {
  const { t } = useLanguage();

  return (
    <div className={`bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden ${className}`}>
      <div className="p-6 border-b border-zinc-800">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        {description && (
          <p className="text-zinc-400 text-sm italic leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-950/50 border-b border-zinc-800">
              <th className="text-left p-4 font-semibold text-zinc-300">{t.pricing.tables.prestation}</th>
              <th className="text-left p-4 font-semibold text-zinc-300">{t.pricing.tables.contenu}</th>
              <th className="text-right p-4 font-semibold text-zinc-300">{t.pricing.tables.tarif}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.prestation + index}
                className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors"
              >
                <td className="p-4 font-medium">{row.prestation}</td>
                <td className="p-4 text-zinc-300 text-sm">{row.contenu}</td>
                <td className="p-4 text-right font-semibold text-lg whitespace-nowrap">
                  {row.tarif}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {notes && notes.length > 0 && (
        <div className="p-6 bg-zinc-950/30 border-t border-zinc-800">
          <ul className="space-y-2">
            {notes.map((note, index) => (
              <li key={note + index} className="text-sm text-zinc-400 flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
