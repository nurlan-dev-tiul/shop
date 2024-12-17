import * as products from "./api/products";
import * as components from "./api/components";

// Все api запросы будем получать отсюда для удобства к примеру Api.products.getAll
export const Api = {
  products,
  components
}