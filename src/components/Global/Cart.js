import React from "react"
import CartContext from "../../contexts/CartContext"
import {Link} from "gatsby"
const Cart = () => {
    return (
        <CartContext.Consumer>
             {context => {
                 return (
            <div>
                <h2>Items</h2>
                {context.cart.items.length? (
                    <div>
                <ul>
                    {context.cart.items.map((item, index) => {
                        return (
                            <li key={index}>{item.product.name} (${item.product.price}) - {item.quantity} <a href="#" onClick={() => context.removeItem(item.product.id)}>(Remove)</a></li>
                        )
                    })}
                </ul>
                <small>Total: ${context.cart.items.map(item => item.product.price*item.quantity).reduce((a, b) => a + b, 0)}</small> <br/>
                <Link to="/cart">Proceed to checkout</Link>
                </div>
                ) : (
                    <small>Cart is empty</small>
                )}
                
            </div>
            )}}
            
        </CartContext.Consumer>
    )
}

export default Cart