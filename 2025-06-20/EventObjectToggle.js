import './App.css';
import React, { useState } from 'react';

function App() {
  const [cat, setCat] = useState('야옹');

  return (
    <>
      <button onClick={() => setCat(cat === '야옹' ? '어흥' : '야옹')}>
        {cat}
      </button>
    </>
  );
}

export default App;
