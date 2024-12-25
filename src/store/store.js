import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import previousPaperSlice from "./previousPaperSlice";
import infrastructureSlice from "./infrastructureSlice";
import homePageModalSlice from './homePageModalSlice';
const store=configureStore({
    reducer:{
        auth:authSlice,
        paper:previousPaperSlice,
        infrastructure:infrastructureSlice,
        modalToggle:homePageModalSlice
    }
});

export default store;