exports.createPages = async ({ actions, graphql }) => {
    // TODO: Connect & retrieve data from DB
    // TODO: Create MD files
    // TODO: Create post files

    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
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
        let metaData = record.node.frontmatter;
        let recordData = record.node.html;

        actions.createPage({
            path: "/posts/" + metaData.datePublished,
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