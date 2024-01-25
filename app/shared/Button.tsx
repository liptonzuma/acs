'use client';
import React from 'react';

interface CustomButtonProps {
  label: string;
  className: string;
  onClick: () => void;
}
export default function Button({
  onClick,
  label,
  className,
}: CustomButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}
