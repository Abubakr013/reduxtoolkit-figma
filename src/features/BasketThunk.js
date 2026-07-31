import { createAsyncThunk } from "@reduxjs/toolkit";
import {gettingProducts} from "../api/productsApi"

export const productsFetch = createAsyncThunk(
  "products/productsFetch",

  async (arg, thunkAPI) => {
    try {
      const response = await gettingProducts.getAll();

      return response.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue("Xatolik yuz berdi" + error.message);
    }
  },
);
