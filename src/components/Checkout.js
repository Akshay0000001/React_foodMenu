import React, { useContext } from 'react'
import {cartContext} from '../checkout/CheckoutContext'

function Checkout(props) {
  const {state} = useContext(cartContext)

  function handleClick(val){
    props.setCurrentDish(val);
    props.setShowPopup(true);
  }

  const result = state.values.map((val)=>{
    return(
      <li onClick={()=>{
        handleClick(val)
      }}>
        <img src={val.strMealThumb} alt="" />
        <h4>{val.strMeal}</h4>
      </li>
    )
  })
  return (
    <div className='checkout'>
      <h2>Cart</h2>
      {result.length !== 0 ? 
      <ul>
        {result}
      </ul> :
      <h3>Cart is empty!!!</h3> }
    </div>
  )
}

export default Checkout;