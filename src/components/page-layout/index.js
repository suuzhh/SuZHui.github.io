import React, { useRef, useEffect, useState, useCallback } from "react";
import Header from "../header";
import Container from "../container";
import BackTopButton from "../back-top-button";

// import style from './page-layout.module.scss';

function PageLayout({ children }) {
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const backTopRef = useRef(null);

  const [wrapperHeight, setWrapperHeigt] = useState(0);

  const handleHeaderVisible = useCallback((distance = 0) => {
    if (distance > 70) {
      // Hide header
      headerRef.current && headerRef.current.hide();
    } else {
      // Show header
      headerRef.current && headerRef.current.show();
    }
  }, []);

  const handleBackButtonVisible = useCallback((distance = 0) => {
    // 滚动 1/3屏就显示返回按钮
    if (distance > wrapperHeight * 0.3) {
      backTopRef.current && backTopRef.current.show();
    } else {
      backTopRef.current && backTopRef.current.hide();
    }
  }, [wrapperHeight])

  const handleBackTop = useCallback(() => {
    wrapperRef.current.scrollTo(0, 0);
  }, []);

  const scrollEventHandle = useCallback(
    e => {
      const distance = e.target.scrollTop;
      handleHeaderVisible(distance);
      handleBackButtonVisible(distance);
    },
    [handleHeaderVisible, handleBackButtonVisible]
  );

  useEffect(() => {
    const ref = wrapperRef.current
    if (ref) {
      setWrapperHeigt(ref.offsetHeight);
      ref.addEventListener("scroll", scrollEventHandle);
      return () => {
        ref.removeEventListener("scroll", scrollEventHandle);
      };
    }
  }, [scrollEventHandle]);

  return (
    <div
      ref={wrapperRef}
      className={`overflow-hidden absolute absolute--fill page-layout`}
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
