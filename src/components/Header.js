import React from 'react'
import "../style/header.css"
import {useSelector, useDispatch } from "react-redux" ; 
import  { setCost , setRate, setFee, setLoan  } from "../utils/dataSlice" ; 
const Header = () => {
  const dispatch = useDispatch() ; 
  const cost  = useSelector( state =>{
    console.log( "----- " , state.data.cost ) ; 
    return state.data.cost
  } ) ; 

  const rate  = useSelector( state =>state.data.rate ) ; 
  const fee  = useSelector( state =>state.data.fee ) ; 
  console.log( cost , rate , fee ) ; 
  return (
    <div>
        <h3>Total Cost of Asset</h3>
        <input type="number" value={cost} onChange={(e)=> {
          console.log( typeof e.target.value ) ; 
          dispatch(setCost(e.target.value)) ; 
          dispatch( setLoan()) ; 
        }}  />
        <h3>Interest Rate (in % ) </h3>
        <input type="number" value={rate} 
           onChange={(e)=> {
          // console.log( typeof e.target.value ) ; 
          dispatch(setRate(e.target.value)) ; 
          dispatch( setLoan()) ; 
        }} 
        />
        <h3>Processing Fee (in %) </h3>
        <input type="number" value={fee}
         onChange={(e)=> {
          console.log( typeof e.target.value ) ; 
          dispatch(setFee(e.target.value)) ;
          dispatch( setLoan()) ;  
        }} 

        />
    </div>
  )
}

export default Header