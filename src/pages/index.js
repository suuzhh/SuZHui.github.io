import React from "react";
import { graphql, Link } from "gatsby";
import PageLayout from "../components/page-layout";

const IndexPage = ({ data }) => {
  console.log(data);
  const remarkList = data.allMarkdownRemark.edges;
  return (
    <PageLayout>
      <>
        {remarkList.map(item => {
          const { id, frontmatter } = item.node;
          return (
            <Link
              className='db link silver w-100 mb3 pv2 bb b--black-20 dim'
              key={id}
              to={frontmatter.path}
            >
                <div className='flex-ns justify-between items-center mb3'>
                  <h4 className='orange f5'>{frontmatter.title}</h4>
                  <span className='f7'>{frontmatter.date}</span>
                </div>
                <p className='f7'>{frontmatter.excerpt}</p>
            </Link>
          );
        })}
      </>
    </PageLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            excerpt
            date
          }
        }
      }
    }
  }
`;
