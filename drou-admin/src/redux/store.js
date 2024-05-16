import { configureStore } from "@reduxjs/toolkit";

import { productSlice } from "src/sections/products/redux/productSlice";
import { categorySlice } from "src/sections/category/redux/categorySlice";
import { ordersSlice } from "src/sections/order/redux/orderSlice";

const store = configureStore({
    reducer: {
        category: categorySlice.reducer,
        products: productSlice.reducer,
        order: ordersSlice.reducer
    }
})

export default store