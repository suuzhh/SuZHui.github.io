import React from "react";
import Container from "../container";
import style from "./header.module.scss";
import Icon, { ICON_SEARCH } from "../icon";

function Header() {
  return (
    <header className={style.header}>
      <Container justify="space-between">
        <div className={style.headerLeft}>
          <h2>Title</h2>
        </div>
        <div className={style.headerRight}>
          <button>
            <Icon name={ICON_SEARCH} />
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
