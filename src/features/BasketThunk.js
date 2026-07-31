import { createAsyncThunk } from "@reduxjs/toolkit";
import {ProductsApi} from "../api/productsApi"

export const productsFetch = createAsyncThunk(
  "products/productsFetch",

  async (arg, thunkAPI) => {
    try {
      const response = await ProductsApi.getAll();

      return response.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue("Xatolik yuz berdi" + error.message);
    }
  },
);
