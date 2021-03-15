import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import {graphql, Link} from "gatsby"
import Storefront from "../layouts/storefront"
import CartContext from "../contexts/CartContext"
const ProductTemplate = (props) => {
    const product = props.data.jamcommerce.items.products[0]
    const [stock, setStock] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const cart = useContext(CartContext)
    useEffect(() =>{
        const fetchData = async (id) =>{
            const response = await axios.get(process.env.GATSBY_ENDPOINTS_URL+"getStock/"+id)
            const results = response.data
            const temp = results.stock? results.stock : 0
            setStock(temp)
        }
        fetchData(product.id)
    }, [])

    const addItem = () => {
        if (quantity > 0){
            cart.addItem(product,quantity)
        }
    }
    
    return (
        <Storefront>
            
            <div>
                <h3>{product.name}</h3>
                <img src={process.env.GATSBY_ASSETS_URL+product.image.id+"?fit=cover&width=260&height=260"} /> <br />
                <small>${product.price}</small> <br/>
                <small>Available stock: {stock}</small>
                <div>
                    <input type="number" value={quantity} onChange={event => setQuantity(event.target.value)} min="0" />
                    <button onClick={addItem}>Add to cart</button>
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