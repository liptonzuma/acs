import React from 'react';

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white relative overflow-hidden group p-[20px] rounded-[8px] py-[30px] min-w-[350px] w-[32%] cursor-pointer">
      {children}
      <div className="group-hover:w-[100%] w-[0%] transition-all duration-300 ease-in-out transform h-[6px] bg-[var(--primary-red)] absolute bottom-0 left-0" />
    </div>
  );
}
