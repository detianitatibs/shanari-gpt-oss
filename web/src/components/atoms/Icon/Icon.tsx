import Image from "next/image";
import React from "react";
import * as FaIcons from "react-icons/fa";

interface IconSvgProps {
  size?: number;
  title?: string;
}

// If iconName is provided, the corresponding icon from react-icons/fa is rendered.
// Otherwise, an Image component is rendered using the provided src.

type IconProps = {
  src?: string;
  iconName?: string;
  alt?: string;
  size?: number;
};

export const Icon: React.FC<IconProps> = ({
  src,
  iconName,
  alt = "",
  size = 48,
}) => {
  if (iconName) {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons] as
      | React.ComponentType<IconSvgProps>
      | undefined;
    if (IconComponent) {
      return <IconComponent size={size} />;
    }
    return null;
  }
  if (src) {
    return <Image src={src} alt={alt} width={size} height={size} />;
  }
  return null;
};
