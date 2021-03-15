import React from "react"
import Cart from "../components/Global/Cart"

const Storefront = ({children}) => {
    return (
        <div>
            <Cart />
            { children}
        </div>
    )
}

export default Storefront