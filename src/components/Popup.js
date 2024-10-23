import React, { useContext } from 'react'
import { cartContext } from '../checkout/CheckoutContext'

function Popup(props) {
  const { state, dispatch } = useContext(cartContext)

  function handleCartClick() {
    dispatch({ type: 'click', payload: props.currentDish})
    if(state.values.some(val => val.strMeal === props.currentDish.strMeal)){
      handleClick();
    }
    
  }

  const handleClick = () => {
    props.setShowPopup(false); 
  }


  return (
    <div className="popup">
      <button id='close-button' onClick={handleClick}>close</button>
      <div className="pop_container">
        <img src={props.currentDish.strMealThumb} alt={`${props.currentDish.strMeal} image`} />
        <h4 id='dishcategory'>{props.currentDish.strCategory}</h4>
        <h4>{props.currentDish.strMeal}</h4>
        <ul className='flex'>
          <li>{props.currentDish.strIngredient1}</li>
          <li>{props.currentDish.strIngredient2}</li>
          <li>{props.currentDish.strIngredient3}</li>
          <li>{props.currentDish.strIngredient4}</li>
        </ul>
        <p>{props.currentDish.strInstructions}</p>
        <button onClick={handleCartClick}>
          {state.values.some(val => val.strMeal === props.currentDish.strMeal) ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </div>
    </div>
  )
}

export default Popup;