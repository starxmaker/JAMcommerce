import React from "react"
import CartProvider from "./src/contexts/CartProvider"
export const wrapRootElement = ({ element }) => (
    <CartProvider>{element}</CartProvider>
)