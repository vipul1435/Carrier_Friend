import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    clickedData:null,
};

export const globalSlice =  createSlice({
    name:'global',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload;
        },
        setClick:(state,action)=>{
            state.clickedData = action.payload;
        },
    }
});

export const {setUser,setClick} =  globalSlice.actions;
export default globalSlice.reducer;