import type { Meta, StoryObj } from "@storybook/react";
import { SNSLinks } from "./SNSLinks";

const meta: Meta<typeof SNSLinks> = {
  title: "Molecules/SNSLinks",
  component: SNSLinks,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SNSLinks>;

export const Default: Story = {
  args: {
    links: [
      { name: "GitHub", url: "https://github.com", iconSrc: "/icons/github.svg" },
      { name: "Twitter", url: "https://twitter.com", iconSrc: "/icons/twitter.svg" },
    ],
  },
};
