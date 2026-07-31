import { createSlice } from "@reduxjs/toolkit";
import { productsFetch } from "./BasketThunk";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(productsFetch.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(productsFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })

      .addCase(productsFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
