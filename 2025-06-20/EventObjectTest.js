import './App.css';
import React from 'react';

function App() {
  function x(e, a) {
    console.log('값 옴:' + a);
    console.log('밸류 값 옴:' + e.target.value);
  }

  // 이벤트 핸들러 함수 분리
  const handleClick = (e) => x(e, 1);

  return (
    <>
      <button onClick={handleClick} value="고양이">눌러</button>
    </>
  );
}

export default App;
