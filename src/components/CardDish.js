import React from 'react'

function CardDish(props) {
  const handleClick = ()=>{
    props.setCurrentDish(props.val);
    props.setShowPopup(true);
  }
  return (
    <li key={props.val.idMeal} onClick={handleClick}>
        <img src={props.val.strMealThumb} alt="image" />
        <h4>{props.val.strMeal}</h4>
    </li>
  )
}

export default CardDish;