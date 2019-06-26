import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import MarkdownLayout from "../components/markdown-layout";
import PageLayout from "../components/page-layout";

export default function Template({ data }) {
  const { markdownRemark: post, site } = data;
  return (
    <PageLayout>
      <Helmet title={`${site.siteMetadata.title} - ${post.frontmatter.title}`} />
      <h1 className='f3 normal'>{post.frontmatter.title}</h1>
      <MarkdownLayout html={post.html} />
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
  }
  }
`;
