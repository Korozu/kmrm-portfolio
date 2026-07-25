import React from 'react';
import { InfoIcon, AlertCircleIcon, CheckCircleIcon, MessageCircleIcon } from 'lucide-react';

export interface InfoBoxProps {
  type?: 'info' | 'warning' | 'success' | 'note';
  children: React.ReactNode;
  className?: string;
}

export default function InfoBox({ type = 'info', children, className = '' }: InfoBoxProps) {
  const styles = {
    info: {
      bg: 'bg-blue-950/30',
      border: 'border-blue-800/50',
      icon: <InfoIcon className="w-5 h-5 text-blue-400" />,
      text: 'text-blue-300',
    },
    warning: {
      bg: 'bg-amber-950/30',
      border: 'border-amber-800/50',
      icon: <AlertCircleIcon className="w-5 h-5 text-amber-400" />,
      text: 'text-amber-300',
    },
    success: {
      bg: 'bg-green-950/30',
      border: 'border-green-800/50',
      icon: <CheckCircleIcon className="w-5 h-5 text-green-400" />,
      text: 'text-green-300',
    },
    note: {
      bg: 'bg-zinc-900/50',
      border: 'border-zinc-700',
      icon: <MessageCircleIcon className="w-5 h-5 text-zinc-400" />,
      text: 'text-zinc-300',
    },
  };

  const style = styles[type];

  return (
    <div
      className={`${style.bg} border ${style.border} rounded-lg p-4 flex gap-3 ${className}`}
    >
      <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
      <div className={`${style.text} text-sm leading-relaxed`}>{children}</div>
    </div>
  );
}
