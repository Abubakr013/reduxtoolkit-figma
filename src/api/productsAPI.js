import { api } from "./api";

export const productsApi = {
  getAll: () => api.get("/products"),

  // delete: (id) => api.delete(`/products/${id}`)
};