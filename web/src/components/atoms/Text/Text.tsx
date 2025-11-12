import { ReactNode } from 'react';

export interface TextProps {
  children: ReactNode;
  className?: string;
}

export const Text = ({ children, className = '' }: TextProps) => {
  return <span className={className}>{children}</span>;
};
