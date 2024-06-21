import React from 'react';

export interface ContentProps {
  content?: string;
}

const Content: React.FC<ContentProps> = (props: ContentProps) => {
  return (
    <div style={{ padding: '1rem', borderRadius: '0.25rem', border: '4px dashed #228b22' }}>
      <h2>Remote 1: Content</h2>
      <p>
        This is the content from remote.
      </p>
      <p>Dynamic content: {props.content || 'Default text'}</p>
    </div>
  );
};

export default Content;
