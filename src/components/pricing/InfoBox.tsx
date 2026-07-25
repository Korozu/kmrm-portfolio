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
      bg: 'bg-secondary/20',
      border: 'border-secondary/50',
      icon: <InfoIcon className="w-5 h-5 text-secondary" />,
      text: 'text-zinc-300',
    },
    warning: {
      bg: 'bg-accent/20',
      border: 'border-accent/50',
      icon: <AlertCircleIcon className="w-5 h-5 text-accent" />,
      text: 'text-zinc-300',
    },
    success: {
      bg: 'bg-primary/20',
      border: 'border-primary/50',
      icon: <CheckCircleIcon className="w-5 h-5 text-primary" />,
      text: 'text-zinc-300',
    },
    note: {
      bg: 'bg-muted/20',
      border: 'border-muted/50',
      icon: <MessageCircleIcon className="w-5 h-5 text-muted" />,
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
