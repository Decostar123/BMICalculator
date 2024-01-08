import React , {useState} from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { setPayment , setLoan} from '../utils/dataSlice';
import "../style/slider.css"
const DownPaymentSlider = () => {
  // const [ val , setVal ] = useState( 0 ) ; 
  const dispatch = useDispatch() ; 
  const payment  = useSelector( state =>{
    console.log( "1111" , state.data ) ; 
    return state.data.payment ; 
  } ) ; 
  const cost = useSelector( state => state.data.cost ) ; 
  
  // const cost  = useSelector( state =>state.data.cost ) ;
  return (
    <div>
    <h4>Down Payment</h4>
    <h3><span>Total Down Payment - ₹ {payment}</span></h3>
    <input type="range" min="1" max={cost} placeholder='0'
     value={payment} className="slider" id="myRange" 
      onChange={(e)=>{
        // console.log( typeof e.target.value ) ; 
        dispatch( setPayment(e.target.value )   )  ;
        dispatch( setLoan()) ; 
        // setVal(e.target.value ) ;
      }}
     />
     <div className="bottom">
      <h4>0%</h4>
      <h4>{payment*1.01   }</h4>
      <h4>100%</h4>
     </div>
    </div>
  )
}

export default DownPaymentSlider