import { createSlice } from "@reduxjs/toolkit";

const initialState={toggle:true}

const homePageModalSlice=createSlice({
    name:'modalToggle',
    initialState,
    reducers:{
        getModalToggle:(state,action)=>{
            state.toggle=action.payload;
        }
    }
})

export const {getModalToggle}=homePageModalSlice.actions;
export default homePageModalSlice.reducer;