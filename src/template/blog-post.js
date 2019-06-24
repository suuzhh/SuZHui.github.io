import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import MarkdownLayout from "../components/markdown-layout";
import PageLayout from "../components/page-layout";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <PageLayout>
      <div className='blog-post-container'>
        <Helmet title={`Your Blog Name -${post.frontmatter.title}`} />
        <div>
          <h1>{post.frontmatter.title}</h1>
          <MarkdownLayout html={post.html} />
        </div>
      </div>
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
  }
`;
