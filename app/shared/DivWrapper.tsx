import React from 'react';

export default function DivWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={'max-w-[1500px] w-full ' + className}>{children}</div>;
}
