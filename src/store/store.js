import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/BasketSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
