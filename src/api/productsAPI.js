import { api } from "./api";

export const ProductsApi = {
  getAll: () => api.get("/products"),

  // delete: (id) => api.delete(`/products/${id}`)
};