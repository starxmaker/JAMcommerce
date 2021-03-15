import React from "react"
import CartContext from './CartContext';

let savedCart
if (typeof window !== 'undefined'){
    try {
        savedCart = JSON.parse(localStorage.getItem("savedCart"))
    } catch(e) {
       
    }
} 


class CartProvider extends React.Component {
    state = { cart: savedCart && savedCart.items? savedCart : { items: [] } }
    render() {
        return (
            <CartContext.Provider
                value={{
                    cart: this.state.cart,
                    addItem: (product, quantity) =>{
                        this.setState(prevState => {
                            const newState = Object.assign({},prevState)
                            // check if element exist
                            const previousItem = newState.cart.items.find(element => element.product.id === product.id)
                            if(!previousItem) {
                                newState.cart.items.push({product, quantity})
                            }else{
                                const index= newState.cart.items.indexOf(previousItem)
                                newState.cart.items[index] = {product, quantity}
                            }
                            if(typeof window !== 'undefined')  localStorage.setItem("savedCart", JSON.stringify(newState.cart))
                            return newState

                        })
                    },
                    removeItem: (productId) =>{
                        this.setState(prevState => {
                            const newState = Object.assign({},prevState)
                            const newItems = prevState.cart.items.filter(element => element.product.id != productId)
                            newState.cart.items = newItems
                            if(typeof window !== 'undefined')  localStorage.setItem("savedCart", JSON.stringify(newState.cart))
                            return newState
                        })
                    }
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export default CartProvider