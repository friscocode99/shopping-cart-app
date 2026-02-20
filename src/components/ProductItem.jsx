import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function ProductItem({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ marginBottom: "10px" }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;