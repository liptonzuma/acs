import React from 'react';

export default function RedText({ children }: { children: React.ReactNode }) {
  return <span className="text-[var(--primary-red)]">{children}</span>;
}
