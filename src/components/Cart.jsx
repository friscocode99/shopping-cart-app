import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Cart</h2>
      {cart.length === 0 && <p>No items yet</p>}

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - ${item.price}
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;