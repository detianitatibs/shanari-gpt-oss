import { render, screen } from '@testing-library/react';
import { SNSLinks } from '@/components/molecules/SNSLinks/SNSLinks';

test('SNSLinks renders valid links', () => {
  render(<SNSLinks links={[{name:'GitHub',url:'https://github.com',iconSrc:'/icons/github.svg'}]} /u003e);
  const link = screen.getByRole('link', { name: /GitHub/ });
  expect(link).toHaveAttribute('href', 'https://github.com');
});
