exports.createPages = async ({ actions, graphql }) => {
    // TODO: Connect & retrieve data from DB
    // TODO: Create MD files
    // TODO: Create post files

    const postRecords = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            datePublished
                            tags
                        }
                    }
                }
            }
        }
	`);

    actions.createPage({
        path: "/allPosts/",
        component: require.resolve("./src/templates/tmpl-post-list.js"),
        context: postRecords
    })
} 

    /*
    createPage({
        path: "/posts/20201019",
        component: require.resolve("./src/templates/tmpl-post-details.js"),
        context: {
            dateCreated: "dateCreated",
            dateLastUpdated: "dateLastUpdated",
            title: "Post 20201019",
            content: "Content of 20201019",
        }
    })

	posts.forEach((post, idx) => {
		actions.createPage({
			path: post.frontmatter.slug,
			component: require.resolve('./src/templates/post.js'),
			context: {
				slug: post.frontmatter.slug,
				prev: idx === 0 ? null : posts[idx - 1],
				next: idx === posts.length - 1 ? null : posts[idx + 1],
			},
		})
    })
    */