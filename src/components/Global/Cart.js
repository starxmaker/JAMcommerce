import React from "react"
import CartContext from "../../contexts/CartContext"

const Cart = () => {
    return (
        <CartContext.Consumer>
             {context => (
            <div>
                <h2>Items</h2>
                {context.cart.items.length? (
                    <div>
                <ul>
                    {context.cart.items.map((item, index) => {
                        return (
                            <li key={index}>{item.product.name} - {item.quantity} <a href="#" onClick={() => context.removeItem(item.product.id)}>(Remove)</a></li>
                        )
                    })}
                </ul>
                <button>Proceed to checkout</button>
                </div>
                ) : (
                    <small>Cart is empty</small>
                )}
                
            </div>
            )}
            
        </CartContext.Consumer>
    )
}

export default Cart