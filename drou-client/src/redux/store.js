import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { productSlice } from "../pages/UI/Shop/redux/shopSlice";
import { homeSlice } from "../pages/UI/Home/redux/homeSlice";
import { detailSlice } from "../pages/UI/Detail/redux/detailSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productSlice.reducer,
        home: homeSlice.reducer,
        detail: detailSlice.reducer
    }
})

export default store;


