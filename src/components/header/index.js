import React from 'react';
import Container from '../container';
import style from './header.module.scss';

function Header () {
    return (
        <header className={ style.header }>
            <Container>
                <h2>Title</h2>
            </Container>
        </header>
    );
}

export default Header;