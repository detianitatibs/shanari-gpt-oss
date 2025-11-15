import { render, screen } from '@testing-library/react';
import { ProfileInfo } from '@/components/molecules/ProfileInfo/ProfileInfo';

test('ProfileInfo renders name and avatar', () => {
  render(<ProfileInfo nickname="Taro" iconUrl="/images/placeholder-avatar.png" bioMarkdown="# Hi" />);
  expect(screen.getByText(/Taro/)).toBeInTheDocument();
});
