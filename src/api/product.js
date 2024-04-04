import axios from "axios";

axios.defaults.baseURL = "https://api.escuelajs.co/api/v1";

export const fetchProducts = async (offset) => {
    try {
        const response = await axios.get(`/products?offset=${offset}&limit=10`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchSingleProduct = async (id) => {
    try {
        const response = await axios.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        // return "Not found";
    }
};
