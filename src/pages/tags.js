import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import PageLayout from "../components/page-layout";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  return (
    <PageLayout>
      <Helmet title={title} />
      <div className='w-100 mt2'>
        {/* <h2 className='f7 normal mb2 gray'>TAGS</h2> */}
        <ul className='list flex flex-wrap'>
          {group.map(tag => {
            const color = randomColor();
            return (
              <li
                key={tag.fieldValue}
                className={`br1 ba b--${color} hover-bg-${color} bg-animate ma1`}
              >
                <Link
                  to={`/tags/${tag.fieldValue.toLowerCase()}/`}
                  className={`link ph2 pv1 db f8 hover-white ${color} normal`}
                >
                  {tag.fieldValue.toUpperCase()}&nbsp;({tag.totalCount})
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </PageLayout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

function randomColor() {
  const colors = [
    "blue",
    "navy",
    "green",
    "pink",
    "purple",
    "yellow",
    "gold",
    "red",
    "orange",
    "silver",
  ];
  const section = 100 / colors.length;
  const rand = Math.ceil(Math.random() * 100) % section;
  return colors[rand];
}
