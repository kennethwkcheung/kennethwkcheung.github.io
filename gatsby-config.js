module.exports = {
    siteMetadata: {
        headerTitle: `BlogShuttle`,
        blogTitle: `BlogShuttle`,
        author: `kennc`,
        vision: `todo`,
        purpose: `todo`,
        elastic: `http://127.0.0.1:9200`
    },
    plugins: [
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts/`
            }
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/src/posts/`
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`]
            }
        }
    ]
}