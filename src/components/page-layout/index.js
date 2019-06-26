import React, { useRef, useEffect } from "react";
import Header from "../header";
import Container from "../container";

function PageLayout({ children }) {
  const style = {
    width: "100vw",
    height: "100vh",
    WebkitOverflowScrolling: 'touch'
  };

  const wrapperRef = useRef(null);
  const headerRef = useRef(null);

  const handleHeaderVisible = (e) => {
    const distance = e.target.scrollTop;
    if (distance > 100) {
      // Hide header
      headerRef.current && headerRef.current.hide();
    } else {
      // Show header
      headerRef.current && headerRef.current.show();
    }
  };

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('scroll', handleHeaderVisible)
      return () => {
        wrapperRef.current.removeEventListener('scroll', handleHeaderVisible)
      }
    }
  });

  return (
    <div ref={wrapperRef} style={style} className='overflow-y-scroll absolute absolute--fill'>
      <Header ref={headerRef}></Header>

      <div className='pv3 mt4'>
        <Container direction='column'>{children}</Container>
      </div>
    </div>
  );
}

export default PageLayout;
