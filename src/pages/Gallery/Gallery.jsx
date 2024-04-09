import { useState, useEffect } from "react";
import { fetchProducts, fetchSingleProduct } from "../../api/product";
import GalleryList from '../../components/GalleryList/GalleryList.jsx';
import SerchForm from "../../components/SerchForm/SerchForm.jsx";
import Product from "../../components/Product/Product.jsx";
import { useSearchParams } from "react-router-dom";

function Gallery() {
    const [product, setProduct] = useState("");
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchQwery, setSearchQwery] = useState("");
    const [searchParams, setSearchParams] = useSearchParams()

    const queryParam = searchParams.get("query") || ""

    useEffect(() => {
        async function getProduct() {
            if (queryParam) {
                const response = await fetchSingleProduct(queryParam);
                setProduct(response);
            }
        }
        getProduct()
    }, [queryParam])
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
        setSearchParams({query: searchQwery})
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
