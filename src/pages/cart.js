import * as React from "react"
import axios from "axios"
import Storefront from "../layouts/storefront"
import CartDetails from "../components/Cart/CartDetails"
import CartContext from "../contexts/CartContext"
import { loadStripe } from "@stripe/stripe-js"
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_PUBLISH_KEY)
  }
  return stripePromise
}

const CartPage = () => {
    const [token, setToken] = React.useState('')
    const formTemplate = {
        name: "",
        surname: "",
        email: "",
        address: "",
        city: "",
        state: "",
        country: "",
        postalCode: ""
    }
    const transbankTemplate = {
        url: "",
        token: ""
    }
    const context = React.useContext(CartContext)
    const [form, setForm] = React.useState(formTemplate)
    const [transbank, setTransbank] = React.useState(transbankTemplate)
    const handleSubmit =async  (event) => {
        event.preventDefault()
        const payload = {
            ...form,
            cart: context.cart
        }
        const url = process.env.GATSBY_ENDPOINTS_URL+"createOrder"
        const response = await axios.post(url,payload)
        console.log(response.data)
        if(response.data.result === 1){
            const stripe = await getStripe()
            stripe.redirectToCheckout({ sessionId: response.data.message });  
        }
        if(response.data.result === 2){
            setTransbank({
                url: response.data.message.url,
                token: response.data.message.token
            })
        }
    }
    const handleChange = (event) => {
        setForm(prevValue =>{
            return{
                ...prevValue,
                [event.target.name]: event.target.value
            }
        })
    }
    React.useEffect(() => {
        if (transbank.url.length && transbank.token.length) {
          document.getElementById("transbankForm").submit()
        }
      }, [transbank]);
    return (
        <div>
            <Storefront>
                <h1>Complete your information</h1>
                <form onSubmit={handleSubmit}>
                    <input name="name" value={form.name} placeholder="First name" required onChange={handleChange}/> <br/>
                    <input name="surname" value={form.surname} placeholder="Last name" required onChange={handleChange}/> <br />
                    <input name="email" type="email"  value={form.email} placeholder="Email" required onChange={handleChange}/> <br/>
                    <input name="address" value={form.address} placeholder="Address" required onChange={handleChange}/> <br />
                    <input name="city" value={form.city} placeholder="City" required onChange={handleChange}/> <br />
                    <input name="state" value={form.state} placeholder="State" required onChange={handleChange}/><br />
                    <input name="country" value={form.country} placeholder="Country" required onChange={handleChange}/><br />
                    <input name="postalCode" value={form.postalCode} placeholder="Postal Code" required onChange={handleChange}/> <br />
                    <h2>Cart</h2>
                    <CartDetails />
                    <button type="submit">Proceed to payment</button>
                </form>
                <form method="post" action={transbank.url} id="transbankForm">
                    <input type="hidden" name="token_ws" value={transbank.token}/>
                </form>
            </Storefront>
        </div>
    )
}

export default CartPage