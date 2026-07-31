import { createAsyncThunk } from "@reduxjs/toolkit";
import {ProductsAPI} from "../api/ProductsApi"

export const productsFetch = createAsyncThunk(
  "products/productsFetch",

  async (arg, thunkAPI) => {
    try {
      const response = await ProductsAPI.getAll();

      return response.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue("Xatolik yuz berdi" + error.message);
    }
  },
);
