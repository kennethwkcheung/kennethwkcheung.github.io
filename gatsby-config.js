module.exports = {
    siteMetadata: {
        headerTitle: `FAMILY-BLOG`,
        blogTitle: `To Lorenzo`,
        author: `kennc`,
        vision: `todo`,
        purpose: `todo`
    },
    plugins: [
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts-all`,
                path: `${__dirname}/src/posts/`
            }
        }
    ]
}