import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.shopwareProduct.name} />
    <h1>{data.shopwareProduct.name}</h1>
    <div style={{ padding: "5px", border: "solid 1px #000" }}>
      Images still missing <br />
      {data.shopwareProduct.coverId}
    </div>
    <div>Price: {data.shopwareProduct.price.gross}</div>
  </Layout>
)

export default ProductTemplate

export const productTemplateQuery = graphql`
  query ProductTemplateQuery($id: String) {
    shopwareProduct(id: { eq: $id }) {
      coverId
      name
      price {
        gross
      }
    }
  }
`
