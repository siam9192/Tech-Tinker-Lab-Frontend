import { createSlice } from "@reduxjs/toolkit"

interface IToggleSlice {
    isLoadingLineOpen:boolean
} 

const initialState:IToggleSlice = {
    isLoadingLineOpen:false
} 


const toggleSlice = createSlice({
    name:'toggle',
    initialState,
    reducers:{
     toggleLoadingLineComponent:(state,{payload})=>{
        state.isLoadingLineOpen = payload
     }
    }
})



export const {toggleLoadingLineComponent} = toggleSlice.actions

export default toggleSlice.reducer