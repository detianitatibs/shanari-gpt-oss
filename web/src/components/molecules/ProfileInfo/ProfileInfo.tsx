import React from "react";
import { Icon } from "@/components/atoms/Icon/Icon";
import { Text } from "@/components/atoms/Text/Text";
import { MarkdownRenderer } from "@/components/atoms/Markdown/Markdown";

export type ProfileInfoProps = {
  iconUrl?: string;
  nickname?: string;
  bioMarkdown?: string;
};

const defaultAvatar = "/images/placeholder-avatar.png";

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  iconUrl,
  nickname,
  bioMarkdown,
}) => {
  const displayNickname = nickname || "名前未登録";
  const displayBio = bioMarkdown?.trim() ? (
    <MarkdownRenderer markdown={bioMarkdown} />
  ) : (
    <Text>自己紹介なし</Text>
  );

  return (
    <div className="flex flex-col items-center">
      <Icon src={iconUrl ?? defaultAvatar} alt={displayNickname} size={96} />
      <Text className="text-xl font-bold mt-2">{displayNickname}</Text>
      {displayBio}
    </div>
  );
};
