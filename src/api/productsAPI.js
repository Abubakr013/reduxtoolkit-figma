import { api } from "./api";

export const ProductsAPI = {
  getAll: () => api.get("/products"),

  // delete: (id) => api.delete(`/products/${id}`)
};