import React from 'react';
import style from './container.module.scss';

function Container({ children }) {
    return (
        <div className={ style.container }>
            { children }
        </div>
    );
}

export default Container;