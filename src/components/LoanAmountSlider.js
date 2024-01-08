import React , {useState} from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { setLoan } from '../utils/dataSlice';
import "../style/slider.css"
const LoanAmountSlider = () => {
  const [ val , setVal ] = useState( 0 ) ; 
  const dispatch = useDispatch() ; 
  const loan  = useSelector( state =>{
    console.log( "1111" , state.data ) ; 
    return state.data.loan ; 
  } ) ; 
  const cost = useSelector( state => state.data.cost ) ; 


  return (
    <div>
    <h4>Loan per Month</h4>
    <h3><span>Total Loan Amount {loan}</span></h3>
    <input type="range" min="1" max={cost}
     value={loan} className="slider" id="myRange" 
    //  onChange={(e)=>{
    //     // console.log( typeof e.target.value ) ; 
    //     dispatch( setLoan(e.target.value )   ) 
    //     // setVal(e.target.value ) ;
    //   }}
     />
     <div className="bottom">
      <h4>0%</h4>
      <h4>{loan}</h4>
      <h4>100%</h4>
     </div>
    </div>
  )
}

export default LoanAmountSlider