import { useState, useEffect } from "react";
import { fetchProducts, fetchSingleProduct } from "../../api/product";
import GalleryList from "../GalleryList/GalleryList";
import SerchForm from "../SerchForm/SerchForm";
import Product from "../Product/Product";

function Gallery() {
    const [product, setProduct] = useState("");
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchQwery, setSearchQwery] = useState("");

    // useEffect(() => {
    //   const getData = async () => {
    //     setLoading(true)
    //     const productsList = await fetchProducts(offset);
    //     setProducts([...products, ...productsList]);
    //     setLoading(false)
    //   };
    //   getData();
    // }, [offset]);

    // function handleLoadMore() {
    //   setOffset(offset+10)
    // }
    const onClick = async () => {
        const response = await fetchSingleProduct(searchQwery);
        setProduct(response);
    };

    return (
        <div>
            <h1>Gallery</h1>
            {/* {products.length === 0 && <h2>No products yet.</h2>}
    {products.length > 0 && <><GalleryList data={products}/><button type="button" onClick={handleLoadMore}>Load more</button></>} */}
            <SerchForm
                searchQwery={searchQwery}
                setSearchQwery={setSearchQwery}
                onClick={onClick}
            />
            {loading && <h2>Loading more...</h2>}
            {product ? <Product product={product} /> : <p>No product found.</p>}
        </div>
    );
}

export default Gallery;
