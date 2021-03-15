import * as React from "react"
import { graphql } from 'gatsby'
import Storefront from "../layouts/storefront"
import ProductList from "../components/Index/ProductList"

// markup
const IndexPage = ({data}) => {
  return (
    <div>
      <Storefront>
        <ProductList products={data.jamcommerce.items.products} />
      </Storefront>
    </div>
  )
}

export default IndexPage

export const query = graphql`
query Home {
  jamcommerce {
    items {
      products(filter: {status: {_eq: "published"}}) {
        id
        name
        price
        image {
          id
        }
      }
    }
  }
}
`