import { useState } from "react";
import ProductCard from "../components/ProductCard";
import dummyProducts from "../dummyData.json";

function ProductList() {
  const [search, setSearch] = useState("");

  const filteredProducts = dummyProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="page-title">Product list</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border px-4 py-2 rounded mb-4"
      />
      <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
