import React from "react";
import { graphql } from "gatsby";
import PageLayout from "../components/page-layout";

const IndexPage = ({ data }) => {
  console.log(data);
  const remarkList = data.allMarkdownRemark.edges;
  return (
    <PageLayout>
      <div style={{ color: `purple` }}>
        {remarkList.map(item => {
          const { id, frontmatter } = item.node;
          return (
            <div key={id}>
              <p>Title: {frontmatter.title}</p>
              <p>Date: {frontmatter.date}</p>
              <p>Path: {frontmatter.path}</p>
            </div>
          );
        })}
      </div>
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
