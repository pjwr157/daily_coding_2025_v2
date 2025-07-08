import axios from "axios";
import React, { useState } from "react";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "", price: 0, category: "", imageUrl: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/products", product)
      .then(() => alert("등록 성공"))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="상품명" onChange={e => setProduct({...product, name: e.target.value})} />
      <input placeholder="가격" type="number" onChange={e => setProduct({...product, price: e.target.value})} />
      <input placeholder="카테고리" onChange={e => setProduct({...product, category: e.target.value})} />
      <button type="submit">등록</button>
    </form>
  );
};
export default ProductForm;