import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART } from "./actionTypes"




export const addToCart = () =>{
    return {
        type:ADD_TO_CART,
    }
}

export const removeFromCart = () =>{
    return {
        type:REMOVE_FROM_CART,
    }
}

export const resetCart = ()=>{
    return {
        type:RESET_CART,
    }
}