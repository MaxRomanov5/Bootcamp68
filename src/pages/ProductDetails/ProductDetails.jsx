import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../api";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState("");
  console.log(product);

  useEffect(() => {
    async function getData() {
      const { data } = await getSingleProduct(productId);
      setProduct(data);
    }
    getData();
  }, []);
  console.log(productId);
  return (
    <div>
      {product && (
        <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.category.name}</p>
          <img src={product.category.image} width="300" alt="" />
        </>
      )}
    </div>
  );
};

export default ProductDetails;
