import React from 'react';

export default function DivWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={'max-w-[1500px]  w-full max-md:px-[30px] ' + className}>
      {children}
    </div>
  );
}
