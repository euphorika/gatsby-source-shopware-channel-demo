import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProductListing from "../components/product-listing"

const CategoryTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.shopwareCategory.name} />
    <h1>{data.shopwareCategory.name}</h1>
    <ProductListing products={data.shopwareCategory.products} />
  </Layout>
)

export default CategoryTemplate

export const categoryTemplateQuery = graphql`
  query CategoryTemplateQuery($id: String) {
    shopwareCategory(id: { eq: $id }) {
      name
      products {
        id
        coverId
        name
      }
    }
  }
`
