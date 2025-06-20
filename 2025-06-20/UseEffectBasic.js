import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showCat, setShowCat] = useState(true);

  const toggleCat = () => {
    setShowCat(!showCat);
  };

  return (
    <div>
      <button onClick={toggleCat}>
        {showCat ? '고양이 없애기' : '고양이 보여주기'}
      </button>
      {showCat && <Cat />}
      {/* 컴포넌트가 화면에서 제거(Unmount)될 때 */}
    </div>
  );
}

function Cat() {
  useEffect(() => {
    console.log('Cat 컴포넌트가 생성됨'); // 컴포넌트가 생성될 때 실행

    return () => {                        // useEffect 내부에서만 사용됨. 컴포넌트가 사라질 때 React가 자동으로 실행함.
      console.log('Cat 컴포넌트가 제거됨'); // 컴포넌트가 제거될 때 실행
    };
  }, []);

  return <p>야옹</p>;
}

export default App;
