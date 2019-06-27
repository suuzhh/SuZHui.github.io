/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
	const blogPostTemplate = path.resolve(`src/template/blog-post.js`);
	const tagsPageTemplate = path.resolve('src/template/tags-page.js');

    return graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							path
							tags
						}
						id
					}
				}
			}
		}
	`).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
		}
		const posts = result.data.allMarkdownRemark.edges

		posts.forEach(({ node }) => {
			// node.frontmatter.path
			createPage({
				path: node.frontmatter.path,
				component: blogPostTemplate,
				context: {},
			})
		});

		let tags = [];
		posts.forEach(p => {
			if (p.node.frontmatter.tags) {
				tags = tags.concat(p.node.frontmatter.tags);
			}
		});

		tags = Array.from(new Set(tags));
		tags.forEach(tag => {
			createPage({
				path: `/tags/${tag.toLowerCase()}/`,
				component: tagsPageTemplate,
				context: {
					tag
				}
			})
		});
    })
}
