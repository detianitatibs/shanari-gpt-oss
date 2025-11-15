import type { Meta, StoryObj } from "@storybook/react";
import { ProfileInfo } from "./ProfileInfo";

const meta: Meta<typeof ProfileInfo> = {
  title: "Molecules/ProfileInfo",
  component: ProfileInfo,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProfileInfo>;

export const Default: Story = {
  args: {
    iconUrl: "/images/placeholder-avatar.png",
    nickname: "Taro",
    bioMarkdown: "# Hi\nHello world",
  },
};
