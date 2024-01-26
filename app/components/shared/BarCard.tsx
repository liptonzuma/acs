import React from 'react';

interface CardInterFace {
  parentClassName?: string;
  textClassName?: string;
  text: string;
}

export default function BarCard({
  parentClassName,
  text,
  textClassName,
}: CardInterFace) {
  return (
    <div className={' bg-white p-[8px] rounded-[4px] ' + parentClassName}>
      <div className="flex items-stretch gap-[10px] ">
        <div className="min-w-[6px] bg-[var(--primary-red)]"></div>
        <p className={'text-[18px] opacity-85 ' + textClassName}>{text}</p>
      </div>
    </div>
  );
}
