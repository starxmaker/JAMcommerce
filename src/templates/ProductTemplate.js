import React, { useState, useEffect } from "react"
import axios from "axios"
import {graphql, Link} from "gatsby"
import Storefront from "../layouts/storefront"

const ProductTemplate = (props) => {
    const product = props.data.jamcommerce.items.products[0]
    const [stock, setStock] = useState(0)
    useEffect(() =>{
        const fetchData = async (id) =>{
            const response = await axios.get(process.env.GATSBY_ENDPOINTS_URL+"getStock/"+id)
            const results = response.data
            const temp = results.stock? results.stock : 0
            setStock(temp)
        }
        fetchData(product.id)
    }, [])
    
    return (
        <Storefront>
            <div>
                <h3>{product.name}</h3>
                <img src={process.env.GATSBY_ASSETS_URL+product.image.id+"?fit=cover&width=260&height=260"} /> <br />
                <small>${product.price}</small> <br/>
                <small>Available stock: {stock}</small>
                <div>
                    <input type="number" value="0" min="0" />
                    <button>Add to cart</button>
                </div>
            </div>
            <Link to="/">Back to home</Link>
        </Storefront>
    
    )
}

export default ProductTemplate

export const query = graphql`
  query ProductTemplateQuery($id: ID!) {
    jamcommerce {
        items {
            products(filter: {id: {_eq: $id}}) {
                id
                name
                image {
                    id
                }
                description
                price
            }
        }
    }
}
`