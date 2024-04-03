import { useState, useEffect } from "react";
import { fetchProducts } from "../../api/product";
import GalleryList from "../GalleryList/GalleryList";

function Gallery() {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const productsList = await fetchProducts(offset);
      setProducts([...products, ...productsList]);
      setLoading(false)
    };
    getData();
  }, [offset]);

  
  function handleLoadMore() {
    setOffset(offset+10)
  }

  return <div>
    <h1>Gallery</h1>
    {products.length === 0 && <h2>No products yet.</h2>}
    {products.length > 0 && <><GalleryList data={products}/><button type="button" onClick={handleLoadMore}>Load more</button></>}
   
    {loading && <h2>Loading more...</h2>}
    
  </div>;
}

export default Gallery;
