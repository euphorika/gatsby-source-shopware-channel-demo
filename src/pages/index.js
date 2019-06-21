import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query CategoriesIndex {
      allShopwareCategory(filter: { active: { eq: true } }) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Shop Categories</h1>
      <ul>
        {data.allShopwareCategory.edges.map((category, key) => (
          <li key={key}>
            <a href={`/category/${category.node.id}/`}>{category.node.name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
