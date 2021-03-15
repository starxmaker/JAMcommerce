import React from "react"
import Product from "./Product"
const ProductList = (props) => {
    return (
        <div>
            { props.products.map((product, index) => ( 
                <Product product={product} key={index} />
            ))}
        </div>
    )
}

export default ProductList