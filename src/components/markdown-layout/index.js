import React from "react";

function MarkdownLayout({ html = "" }) {
  return (
    <div
      className='markdown-body w-100'
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}

export default MarkdownLayout;
