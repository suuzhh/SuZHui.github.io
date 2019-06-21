import React from 'react';
import style from './markdown-layout.module.scss';

function MarkdownLayout({ html='' }) {
    return (
        <div 
            className={ style.markdownLayout }
            dangerouslySetInnerHTML={{ __html: html }}
        >
        </div>
    );
}

export default MarkdownLayout;