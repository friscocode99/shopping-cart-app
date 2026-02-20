import { CartProvider } from "./context/CartContext.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <h1>Shopping Cart App</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;