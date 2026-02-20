import ProductItem from "./ProductItem.jsx";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 200 },
  { id: 4, name: "Keyboard", price: 100 },
  { id: 5, name: "Monitor", price: 300 },
  { id: 6, name: "Mouse", price: 50 },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
