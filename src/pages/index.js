import React from "react";
import { graphql } from "gatsby";
import PageLayout from "../components/page-layout";
import ListItem from '../components/list-item';

const IndexPage = ({ data }) => {
  const remarkList = data.allMarkdownRemark.edges;
  return (
    <PageLayout>
      <>
        {remarkList.map(item => {
          const { id, frontmatter } = item.node;
          return (
            <ListItem 
              key={id}
              title={frontmatter.title}
              date={frontmatter.date}
              path={id}
              excerpt={frontmatter.excerpt}
            />
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
