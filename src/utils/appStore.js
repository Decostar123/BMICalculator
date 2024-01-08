import {configureStore} from "@reduxjs/toolkit" ; 
import dataSlice from "./dataSlice" ; 
// console.log( 1111 , dataSlice )
const appStore = configureStore({
    reducer :{
        data : dataSlice 
    }
}) 

export  default appStore ; 