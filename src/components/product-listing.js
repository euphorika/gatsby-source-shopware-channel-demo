import React from "react"
import PropTypes from "prop-types"

const ProductListing = ({ products }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {products &&
      products.map((product, key) => (
        <div key={key} style={{ padding: "20px" }}>
          <a href={`/product/${product.id}/`}>
            <div style={{ padding: "5px", border: "solid 1px #000" }}>
              Images still missing <br />
              {product.coverId}
            </div>
            <div>{product.name}</div>
          </a>
        </div>
      ))}
  </div>
)

ProductListing.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ProductListing
