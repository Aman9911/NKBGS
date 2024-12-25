import { createSlice } from "@reduxjs/toolkit";

const initialState={status:false,infraData:null}

const infrastructureSlice=createSlice({
    name:'infrastructure',
    initialState,
    reducers:{
        getInfrastructures:(state,action)=>{
            state.infraData=action.payload;
        }
    }
})

export const {getInfrastructures}=infrastructureSlice.actions;
export default infrastructureSlice.reducer;