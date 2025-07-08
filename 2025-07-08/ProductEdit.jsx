import axios from "axios";
import React, { useState } from "react";

function ProductEdit({id}) {
  const [product, setProduct] = useState({
    name: "", price: 0, category: "", imageUrl: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/products/${id}`, product)
      .then(() => alert("수정 성공"))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="상품명" onChange={e => setProduct({...product, name: e.target.value})} />
      <input placeholder="가격" type="number" onChange={e => setProduct({...product, price: e.target.value})} />
      <input placeholder="카테고리" onChange={e => setProduct({...product, category: e.target.value})} />
      <button type="submit">수정</button>
    </form>
  );
};
export default ProductEdit;