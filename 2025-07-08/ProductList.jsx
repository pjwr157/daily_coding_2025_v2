import axios from "axios";
import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>상품 목록</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - {p.price}원</li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;