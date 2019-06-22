import React from 'react';
import Container from '../container';
import SearchInput from '../search-input';
import style from './header.module.scss';

function Header () {
    return (
        <header className={ style.header }>
            <Container justify='space-between'>
                <div className={ style.headerLeft }>
                    <h2>Title</h2>
                </div>
                <div className={ style.headerRight }>
                    <SearchInput />
                </div> 
            </Container>
        </header>
    );
}

export default Header;