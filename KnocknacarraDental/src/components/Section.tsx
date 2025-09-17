import React from 'react';

function Section({ id, title, content, background }: { id: string; title: string; content: string; background: string }) {
  return (
    <div id={id} style={{ backgroundImage: `url(${background})` }} className="section">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Section;