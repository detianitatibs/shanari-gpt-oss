import React from "react";
import { Icon } from "@/components/atoms/Icon/Icon";

export type SNSLinksProps = {
  links: { name: string; url: string; iconName: string }[];
};

export const SNSLinks: React.FC<SNSLinksProps> = ({ links }) => (
  <div className="flex space-x-4 mt-4">
    {links
      .filter((l) => l.url && l.url.startsWith("http"))
      .map((l) => (
        <a
          key={l.name}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <Icon iconName={l.iconName} size={24} />
        </a>
      ))}
  </div>
);

