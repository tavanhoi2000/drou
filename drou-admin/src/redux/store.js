import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "src/sections/category/redux/categorySlice";


const store = configureStore({
    reducer: {
        category: categorySlice.reducer
    }
})

export default store