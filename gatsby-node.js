const { createFilePath } = require(`gatsby-source-filesystem`)
const axios = require("axios")

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            dateCreated
                            dateLastUpdated
                            datePublished
                            tags
                            subtitle
                        }
                        html
                    }
                }
            }
        }
	`);

    // Create index page of all blog posts
    actions.createPage({
        path: "/allPosts/",
        component: require.resolve("./src/templates/tmpl-post-list.js"),
        context: result
    })
    
    // Create detail page of a single blog post
    result.data.allMarkdownRemark.edges.forEach((record) => {
        let recordNode = record.node;
        let metaData = recordNode.frontmatter;
        let recordData = recordNode.html;
        let recordAttributes = recordNode.fields;

        actions.createPage({
            path: `${recordAttributes.slug}`,
            component: require.resolve("./src/templates/tmpl-post-details.js"),
            context: {
                dateCreated: metaData.dateCreated,
                dateLastUpdated: metaData.dateLastUpdated,
                subtitle: metaData.subtitle,
                content: recordData
            }
        })
    })

    if(process.env.NODE_ENV==="development") {
        actions.createPage({
            path: "/admin/",
            component: require.resolve("./src/templates/tmpl-admin-page.js"),
            context: result
        })
    }
} 