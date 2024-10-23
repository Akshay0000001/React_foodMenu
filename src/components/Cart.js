import React,{useContext} from "react"
import {cartContext} from '../checkout/CheckoutContext'

const Cart = ()=>{
    const{state}=useContext(cartContext)
    const result = state.values.map((val)=>{
        return(
            <li className="cart-item">
                <img src={val.strMealThumb} alt={val.strMeal} />
                <h6>{val.strMeal}</h6>
            </li>
        )
    })
    //{result && <h3>CART</h3>}
    return(
        <div className="cart">
            {result.length !== 0 ? <h3>Cart</h3> : null}
            <div className="scrollable">
                <ul> 
                    {result}
                </ul>
            </div>
        </div>
    )
}

export default Cart;