import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export type MarkdownRendererProps = {
  markdown: string;
};

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => (
  <div className="prose prose-sm">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
  </div>
);
