import { api } from "./api";

export const productsAPI = {
  getAll: () => api.get("/products"),

  // delete: (id) => api.delete(`/products/${id}`)
};