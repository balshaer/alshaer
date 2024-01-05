// ParagraphComponent.tsx
import React from 'react';

interface ParagraphComponentProps {
  text: string;
}

const ParagraphComponent: React.FC<ParagraphComponentProps> = ({ text }) => {
  return <p className="leading-7 text-sm [&:not(:first-child)] text-[var(--paragraph)]">{text}</p>;
};

export default ParagraphComponent;
