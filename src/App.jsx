import { CartProvider } from "./context/CartContext.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="app">
  <h1>Shopping Cart</h1>

  <div className="content">
    <ProductList />
    <Cart />
  </div>
</div>

    </CartProvider>
  );
}

export default App;