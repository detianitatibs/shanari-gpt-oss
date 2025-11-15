import type { Meta, StoryObj } from "@storybook/react";
import { MarkdownRenderer } from "./Markdown";

const meta: Meta<typeof MarkdownRenderer> = {
  title: "Atoms/MarkdownRenderer",
  component: MarkdownRenderer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MarkdownRenderer>;

export const Default: Story = {
  args: {
    markdown: "# Heading\nThis is **bold** text.",
  },
};
