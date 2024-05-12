import { configureStore } from "@reduxjs/toolkit";

import { productSlice } from "src/sections/products/redux/productSlice";
import { categorySlice } from "src/sections/category/redux/categorySlice";

const store = configureStore({
    reducer: {
        category: categorySlice.reducer,
        products: productSlice.reducer
    }
})

export default store