import { Icon } from "./Icon";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
} as const;

export default meta;

export const Default = () => <Icon iconName="FaGithub" size={24} />;
