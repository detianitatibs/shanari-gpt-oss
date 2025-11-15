import { render, screen } from '@testing-library/react';
import { MarkdownRenderer } from '@/components/atoms/Markdown/Markdown';

test('MarkdownRenderer renders markdown', () => {
  render(<MarkdownRenderer markdown="# Test\n**bold**" />);
  expect(screen.getByText(/Test/)).toBeInTheDocument();
});
