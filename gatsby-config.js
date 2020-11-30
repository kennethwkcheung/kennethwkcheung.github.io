module.exports = {
    siteMetadata: {
        headerTitle: `BlogShuttle`,
        blogTitle: `BlogShuttle`,
        brandName: `BlogShuttle`,
        author: `kennc`,
        vision: `with lorenzo`,
        purpose: `i still do`,
        elastic: `http://127.0.0.1:9200`
    },
    plugins: [
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
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