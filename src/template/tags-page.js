import React from "react";
import { graphql } from "gatsby";
import PageLayout from "../components/page-layout";
import ListItem from "../components/list-item";

const TagsPage = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <PageLayout>
      <div className='w-100'>
        <div className='flex items-center justify-between w-100 silver mb1 mt2'>
          <h2 className='f7 fw4'>标签: {tag.toUpperCase()}</h2>
          <span className='f8'>共{totalCount}篇文章</span>
        </div>
        <>
          {edges.map(({ node }) => {
            const { title, date, excerpt, path } = node.frontmatter;
            return (
              <ListItem
                path={path}
                title={title}
                date={date}
                excerpt={excerpt}
                key={node.id}
              />
            );
          })}
        </>
      </div>
    </PageLayout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "YYYY-MM-DD")
            excerpt
          }
        }
      }
    }
  }
`;
