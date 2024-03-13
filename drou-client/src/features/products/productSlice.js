import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";
import { productCollection } from "../../config/firebase";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};
export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const data = await getDocs(productCollection);
    const productItem = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return productItem;
  } catch (error) {
    throw new Error(error)
  }
});


const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state) => {
      state.status = "loading";
    })
    .addCase(getProducts.fulfilled, (state,action) => {
      state.status = 'success';
      state.products = action.payload
    })
    .addCase(getProducts.rejected, (state,action) => {
      state.status = 'failed';
      state.error = action.error.message
    })
  }
});


export default productSlice.reducer
