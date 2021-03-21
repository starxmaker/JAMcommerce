import React from "react"
import CartContext from "../../contexts/CartContext"

const CartDetails = () => {
    return (
        <CartContext.Consumer>
         {context => {
                 return (
        <table>
            <tr>
                <td>Product</td>
                <td>Base price</td>
                <td>Quantity</td>
                <td>Price</td>
            </tr>
           {context.cart.items.length? context.cart.items.map (item => (
                <tr>
                    <td>{item.product.name}</td>
                    <td>{item.product.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity * item.product.price}</td>
                </tr>)) : (<tr><td>Sin registros</td></tr>)}
        </table>)}}
        </CartContext.Consumer>
    )
}

export default CartDetails