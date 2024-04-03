import { useState, useEffect } from "react";
import { fetchProducts } from "../../api/product";
function Gallery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const productsList = await fetchProducts(0);
      setProducts(productsList);
    };
    getData();
  }, []);

  return <div>Gallery</div>;
}

export default Gallery;
