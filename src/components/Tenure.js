import React  , {useState} from 'react';
import "../style/tenure.css"
import { useDispatch } from 'react-redux'; 
import { setTenure , setLoan } from "../utils/dataSlice"
const Tenure = () => {
    const [ind, setInd] = useState( -1 ) ; 
    const dispatch = useDispatch() ; 
  return (
    <div class="box">
      {new Array(5).fill(0).map((ele, index) => (
        <button style={ { backgroundColor:ind===index?"lightseagreen":""}} key={index} onClick={()=>{

setInd(index) ; 
dispatch( setTenure(12*(index+1) )) ; 
dispatch( setLoan()) ; 


        }}>{12*(index+1)}</button>
      ))}
    </div>
  );
}

export default Tenure;
