module.exports = {
    siteMetadata: {
        headerTitle: `FAMILY-BLOG`,
        blogTitle: `To Lorenzo`,
        author: `kennc`,
        vision: `todo`,
        purpose: `todo`
    },
    plugins: [`gatsby-plugin-react-helmet`],
    plugins: [`gatsby-plugin-fontawesome-css`],
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/posts/`
            }
        }
    ]
}