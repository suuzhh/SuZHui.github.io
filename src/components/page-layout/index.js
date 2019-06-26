import React from "react";
import Header from "../header";
import Container from "../container";

function PageLayout({ children }) {
  const style = {
    width: "100vw",
    height: "100vh",
  };
  return (
    <div style={style} className='overflow-y-scroll fixed absolute--fill'>
      <Header></Header>

      <div className='pv3 mt4'>
        <Container direction='column'>{children}</Container>
      </div>
    </div>
  );
}

export default PageLayout;
