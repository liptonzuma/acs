import React from 'react';

export default function RedText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={'text-[var(--primary-red)] ' + className}>{children}</span>
  );
}
