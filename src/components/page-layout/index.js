import React from "react";
import Header from "../header";
import Container from "../container";
import style from "./page-layout.module.scss";

function PageLayout({ children }) {
  return (
    <>
      <Header></Header>

      <div className={style.pageLayoutContent}>
        <Container direction='column'>{children}</Container>
      </div>
    </>
  );
}

export default PageLayout;
