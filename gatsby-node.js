/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const categoryTemplate = path.resolve("src/templates/category.js")
    const productTemplate = path.resolve("src/templates/product.js")

    resolve(
      graphql(
        `
          query PageQuery {
            allShopwareCategory(filter: {active: {eq: true}}) {
              edges {
                node {
                  id
                }
              }
            }
            allShopwareProduct(filter: {active: {eq: true}}) {
              edges {
                node {
                  id
                  itemId
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allShopwareCategory.edges.forEach(({ node }) => {
          const path = `category/${node.id}/`

          createPage({
            path,
            component: categoryTemplate,
            context: {
              id: node.id,
            }
          })
        })

        result.data.allShopwareProduct.edges.forEach(({ node }) => {
          const path = `product/${node.itemId}/`

          createPage({
            path,
            component: productTemplate,
            context: {
              id: node.id,
            }
          })
        })
      })
    )
  })
}
