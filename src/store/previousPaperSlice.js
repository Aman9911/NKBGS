import { createSlice } from "@reduxjs/toolkit";

const initialState={}

const previousPaperSlice=createSlice({
    name:'paper',
    initialState,
    reducers:{
        getPaper:(state,action)=>{
            state.data=action.payload;
        }
    }
})

export const {getPaper}=previousPaperSlice.actions;
export default previousPaperSlice.reducer;