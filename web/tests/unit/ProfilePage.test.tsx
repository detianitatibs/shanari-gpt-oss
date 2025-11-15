import { render, screen } from '@testing-library/react';
import { ProfilePage } from '@/components/organisms/ProfilePage/ProfilePage';

test('ProfilePage renders correctly', () => {
  render(<ProfilePage />);
  expect(screen.getByText(/Taro/)).toBeInTheDocument();
});
