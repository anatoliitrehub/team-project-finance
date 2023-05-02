import { createSlice } from "@reduxjs/toolkit";

const burgerSlice = createSlice({
    name:"burger",
    initialState:false,

reducers:{
    toogleOpen:{
    reducer(state,action){
        return action.payload
    }}}
})

export const {toogleOpen} = burgerSlice.actions;
export const burgerReducer = burgerSlice.reducer