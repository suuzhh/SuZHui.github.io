import React from 'react';
import Header from '../header';
import Container from '../container';


function PageLayout({ children }) {
    return (
        <>
            <Header></Header>

            <div>
                <Container>
                    { children }
                </Container>
            </div>
        </>
    );
}

export default PageLayout;