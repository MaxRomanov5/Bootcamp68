import { useEffect } from "react";
import { postGood } from "../../api";

function FormProduct() {
    async function onProductSubmit(e) {
        e.preventDefault();
        const obj = {
            title: e.target.elements.title.value,
            price: e.target.elements.price.value,
            description: "A description",
            categoryId: 1,
            images: ["https://placeimg.com/640/480/any"],
        };
        const res = await postGood(obj);
        console.log(res);
    }

    return (
        <form onSubmit={onProductSubmit}>
            <input type="text" name="title"></input>
            <input type="number" name="price"></input>
            <button type="submit">Add</button>
        </form>
    );
}

export default FormProduct;
