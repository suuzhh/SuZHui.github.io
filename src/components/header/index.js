import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Container from "../container";
import Icon, { ICON_SEARCH } from "../icon";

function Header() {
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

  return (
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
  );
}

export default Header;
