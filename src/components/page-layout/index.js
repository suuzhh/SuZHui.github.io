import React from 'react';
import Header from '../header';


function PageLayout({ children }) {
    return (
        <>
            <Header></Header>
            <div>{ children }</div>
        </>
    );
}

export default PageLayout;