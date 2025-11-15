import React from "react";
import { ProfileInfo } from "@/components/molecules/ProfileInfo/ProfileInfo";
import { SNSLinks } from "@/components/molecules/SNSLinks/SNSLinks";

export const ProfilePage: React.FC = () => {
  const mockData = {
    iconUrl: "",
    nickname: "Taro",
    bioMarkdown: "# Hello\nThis is **Markdown**",
    sns: [
      {
        name: "GitHub",
        url: "https://github.com",
        iconSrc: "/icons/github.svg",
      },
      {
        name: "Twitter",
        url: "https://twitter.com",
        iconSrc: "/icons/twitter.svg",
      },
    ],
  };
  return (
    <div className="container mx-auto py-8">
      <ProfileInfo
        iconUrl={mockData.iconUrl}
        nickname={mockData.nickname}
        bioMarkdown={mockData.bioMarkdown}
      />
      <SNSLinks links={mockData.sns} />
    </div>
  );
};
