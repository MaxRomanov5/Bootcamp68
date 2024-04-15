import axios from "axios";

axios.defaults.baseURL = "https://api.escuelajs.co/api/v1";

function getGoods() {
  const data = axios.get("/products");
  return data;
}

function getSingleProduct(id) {
  const data = axios.get(`/products/${id}`);
  return data;
}
