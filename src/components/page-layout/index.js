import React, { useRef, useEffect, useState } from "react";
import Header from "../header";
import Container from "../container";
import BackTopButton from "../back-top-button";

function PageLayout({ children }) {
  const style = {
    width: "100vw",
    height: "100vh",
    WebkitOverflowScrolling: "touch",
  };

  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const backTopRef = useRef(null);

  const [wrapperHeight, setWrapperHeigt] = useState(0);

  const handleHeaderVisible = (distance = 0) => {
    if (distance > 70) {
      // Hide header
      headerRef.current && headerRef.current.hide();
    } else {
      // Show header
      headerRef.current && headerRef.current.show();
    }
  };

  const handleBackButtonVisible = (distance = 0) => {
    // 滚动 1/3屏就显示返回按钮
    if (distance > wrapperHeight * 0.3) {
      backTopRef.current && backTopRef.current.show();
    } else {
      backTopRef.current && backTopRef.current.hide();
    }
  }

  const handleBackTop = (_) => {
    wrapperRef.current.scrollTo(0, 0);
  }

  const scrollEventHandle = e => {
    const distance = e.target.scrollTop;
    handleHeaderVisible(distance);
    handleBackButtonVisible(distance);
  };

  useEffect(() => {
    if (wrapperRef.current) {
      setWrapperHeigt(wrapperRef.current.offsetHeight);
      wrapperRef.current.addEventListener("scroll", scrollEventHandle);
      return () => {
        wrapperRef.current.removeEventListener("scroll", scrollEventHandle);
      };
    }
  });

  return (
    <div
      ref={wrapperRef}
      style={style}
      className='overflow-y-scroll absolute absolute--fill'
    >
      <Header ref={headerRef}></Header>

      <div className='pv3 mt3 ph2'>
        <Container direction='column'>{children}</Container>
      </div>
      <BackTopButton 
        ref={backTopRef}
        onButtonClick={handleBackTop}
      />
    </div>
  );
}

export default PageLayout;
