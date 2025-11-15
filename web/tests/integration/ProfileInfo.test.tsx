import { render } from '@testing-library/react';
import { ProfileInfo } from '@/components/molecules/ProfileInfo/ProfileInfo';

test('ProfileInfo integration test sample', () => {
  render(<ProfileInfo nickname="Taro" iconUrl="/images/placeholder-avatar.png" bioMarkdown="# Hi" />);
});
