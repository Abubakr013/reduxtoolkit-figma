import { api } from "./api";

export const gettingProducts = {
  getAll: () => api.get("/products"),

  // delete: (id) => api.delete(`/products/${id}`)
};