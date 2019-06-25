import React from "react";
import Header from "../header";
import Container from "../container";

function PageLayout({ children }) {
  const style = {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  }
  return (
    <div style={ style } className='flex flex-column'>
      <Header></Header>

      <div className='pv3 mt4 flex-auto overflow-y-scroll'>
        <Container direction='column'>{children}</Container>
      </div>
    </div>
  );
}

export default PageLayout;
