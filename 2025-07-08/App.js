import './App.css';
import React, { useState, useEffect } from 'react';
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ProductEdit from "./components/ProductEdit";
import ProductDelete from "./components/ProductDelete";

function App() {
  const [tab, setTab] = useState("list");

  return (
    <div>
      <h1>편의점 상품 관리</h1>
      <nav>
        <button onClick={() => setTab("list")}>상품 목록</button>
        <button onClick={() => setTab("insert")}>상품 등록</button>
        <button onClick={() => setTab("edit")}>상품 수정</button>
        <button onClick={() => setTab("delete")}>상품 삭제</button>
      </nav>

      {tab === "list" && <ProductList />}
      {tab === "insert" && <ProductForm />}
      {tab === "edit" && <ProductEdit id={1} />} {/* 예시 */}
      {tab === "delete" && <ProductDelete id={1} />} {/* 예시 */}
    </div>
  );
};
export default App;