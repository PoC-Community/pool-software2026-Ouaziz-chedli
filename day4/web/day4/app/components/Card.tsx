import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => (
  <div
    className={`bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden flex flex-col gap-4  ${className}`}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className = "" }: CardProps) => (
  <div
    className={`px-6 py-5 border-b border-zinc-800 font-semibold text-xl text-zinc-100 ${className}`}
  >
    {children}
  </div>
);

export const CardBody = ({ children, className = "" }: CardProps) => (
  <div className={`px-6 py-5 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = "" }: CardProps) => (
  <div
    className={`px-6 py-4 border-t border-zinc-800 bg-zinc-950 ${className}`}
  >
    {children}
  </div>
);
