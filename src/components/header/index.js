import React from "react";
import Container from "../container";
import Icon, { ICON_SEARCH } from "../icon";

function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 w-100 z-9999 bg-white overflow-hidden shadow-2'>
      <Container justify='space-between'>
        <div className=''>
          <h2>Title</h2>
        </div>
        <div className=''>
          <button>
            <Icon name={ICON_SEARCH} />
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
