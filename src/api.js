import axios from "axios";

axios.defaults.baseURL = "https://api.escuelajs.co/api/v1";

export function getGoods() {
    const data = axios.get("/products");
    return data;
}

export function getSingleProduct(id) {
    const data = axios.get(`/products/${id}`);
    return data;
}

export function postGood(item) {
    const data = axios.post("/products", item, {
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
        },
    });
    return data;
}
