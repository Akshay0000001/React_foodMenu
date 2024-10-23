import React,{createContext, useReducer} from 'react'

export const cartContext = createContext();

function CheckoutContext(props) {
    const initialState = {
        values: []
    }
    const reducer = (state, action)=>{
        switch(action.type){
            case 'click':
                if(state.values.some(val => val.strMeal === action.payload.strMeal)){
                    return { values: [...state.values.filter(val => val.strMeal !== action.payload.strMeal)] }
                }
                else{
                    return {values: [...state.values, action.payload] }
                }
            default:
                return state
        }
    }

    const[state, dispatch] = useReducer(reducer, initialState);
  return (
    <cartContext.Provider value={{state, dispatch}}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CheckoutContext;