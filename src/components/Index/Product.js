import React from "react"
import {Link} from "gatsby"
const Product = props => {
    return (
        <div style={{ width: '18rem' }}>
            <img src={process.env.GATSBY_ASSETS_URL+props.product.image.id+"?fit=cover&width=260&height=260"} />
            <div>
                <h2><Link to={ "/product/"+props.product.id}>{ props.product.name }</Link></h2>
                <p>
                ${ props.product.price}
                </p>
            </div>
        </div>
    )
}

export default Product