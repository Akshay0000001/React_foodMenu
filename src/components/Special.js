import React, {useContext} from 'react'
import CardDish from './CardDish';
import { Allmenu } from './AllMenuContext';
import Cart from './Cart';

function Special(props) {
    const special = useContext(Allmenu); //assigning the value of usecontext allmenu into special

    let numberOfItems = 8;

    let data = special.data.map((val, index)=>{
        if(index < numberOfItems){ 
            return(
                <CardDish val={val} setShowPopup={props.setShowPopup} setCurrentDish={props.setCurrentDish}/>
            )
        }
    })

  return (
    <section>
    <Cart/>
    <div className="special-container">
        <div className='content text-center'>
            <h2>Special Dishes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur error expedita sed minus adipisci doloremque maxime cum! Atque nemo voluptates blanditiis eligendi corporis soluta itaque consequuntur odio alias! Cumque.</p>
        </div>
        <div className="menu-list">
            <ul className='flex flex-wrap justify-content-equaly'>
                {data}
            </ul>
        </div>
    </div>
    </section>
  )
}

export default Special;