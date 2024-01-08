import { createSlice } from "@reduxjs/toolkit";
const dataSlice = createSlice( 
    
    {
    name : "data"  , 
    initialState :{
        cost : 0 , 
        rate : 0 , 
        fee : 0 , 
        payment : 0, 
        loan : 0 ,
        tenure : 0 
    }
    , 
    reducers : {
        setCost: (state , payload )=>{
            console.log( "payload" ,  payload , payload.payload )
                state.cost = Number(payload.payload) ; 
        }, 
        setRate: (state , payload )=>{
            state.rate =  Number(payload.payload)  ; 
        }, 
        setFee: (state , payload )=>{
            state.fee =  Number(payload.payload)  ; 
        }, 
        setPayment: (state , payload )=>{
            console.log("payload"  , payload.payload ); 
            state.payment = Number(payload.payload) ; 
            console.log( "state.payment" , state.payment )
        }, 
        setLoan: (state , payload )=>{

            state.loan = Number(payload.payload) ; 
            let principal = state.cost - state.payment ; 
            let loan = principal*1.01 ; 
            let tenure = state.tenure ; 
            let rate = state.rate ;
            let num = loan*rate*( (1+rate)^tenure ) ; 
            let den = (1+rate)^(tenure-1 ) ; 
            let emi = num/den ; 

            state.loan = emi; 


         }, 
         setTenure: (state , payload )=>{
            state.tenure =  Number(payload.payload)  ; 
        }

    }
}
)
export default dataSlice.reducer ; 
export const { setCost,setRate, setFee, setPayment, setLoan, setTenure} = dataSlice.actions ; 