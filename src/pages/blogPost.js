import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/_layout/layout'

export default ({data}) => {
  const md = (data) => {
    const { frontmatter, html } = data.data.allMarkdownRemark.edges[0].node
    return (
      <div>
        <p>{frontmatter.title}</p>
        <p>{frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    )
  }

  return (
    <Layout>
    {md({ data })}
  </Layout >
  )
}

export const data = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/20201019/"}}
    ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "DD MMMM YYYY")
            }
            html
          }
        }
      }
  }
`