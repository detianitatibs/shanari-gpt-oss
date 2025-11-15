import Image from 'next/image';
import React from 'react';

type IconProps = {
  src: string;
  alt: string;
  size?: number;
};

export const Icon: React.FC<IconProps> = ({ src, alt, size = 48 }) => (
  <Image src={src} alt={alt} width={size} height={size} />
);
