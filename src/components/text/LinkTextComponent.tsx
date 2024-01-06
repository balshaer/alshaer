// LinkTextComponent.tsx
import React from 'react';

interface LinkTextComponentProps {
  text: string;
}

const LinkTextComponent: React.FC<LinkTextComponentProps> = ({ text }) => {
  return <span className="  cursor-pointer text-[var(--headline)]">{text}</span>;
};

export default LinkTextComponent;
