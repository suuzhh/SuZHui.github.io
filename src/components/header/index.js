import React, { forwardRef, useImperativeHandle, useState } from "react";
import { CSSTransition } from 'react-transition-group';
import { Link, useStaticQuery, graphql } from "gatsby";
import Container from "../container";
import Icon, { ICON_SEARCH } from "../icon";


const Header = forwardRef((_, ref) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;
  
  const [ visible, handleVisible ] = useState(true);
  // 暴露出的组件函数
  useImperativeHandle(ref, () => ({
    show() {
      if (visible === false) {
        handleVisible(true);
      }
    },
    hide() {
      if (visible === true) {
        handleVisible(false);
      }
    }
  }));

  return (
    <CSSTransition in={visible} timeout={600} classNames='scroll-top'>
      <header className='fixed top-0 left-0 right-0 w-100 z-9999 bg-white overflow-hidden shadow-2 pv1'>
        <Container justify='space-between'>
          <Link to='/' className='link dark-gray'>
            <h2 className='f5 normal'>{title}</h2>
          </Link>
          <div>
            <button>
              <Icon name={ICON_SEARCH} />
            </button>
          </div>
        </Container>
      </header>
    </CSSTransition>
  );
});

export default Header;
