// H1Component.tsx
import React from 'react';

interface H1ComponentProps {
  text: string;
}

const H1Component: React.FC<H1ComponentProps> = ({ text }) => {
  return <h1 className="scroll-m-20 text-xl tracking-tight lg:text-1xl text-[var(--headline)]">{text}</h1>;
};

export default H1Component;
