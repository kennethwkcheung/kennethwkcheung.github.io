exports.createPages = ({ actions: { createPage } }, graphql) => {
    createPage({
       path: "/allPosts/",
       component: require.resolve("./src/templates/nodata.js")
    })
    
    createPage({
        path: "/posts/20201019",
        component: require.resolve("./src/templates/tmpl-post.js"),
        context: {
            dateCreated: "dateCreated",
            dateLastUpdated: "dateLastUpdated",
            title: "Post 20201019",
            content: "Content of 20201019",
        }
    })
}