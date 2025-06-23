import './App.css';
import React, { useState } from 'react';

function App() {
  const [catName, setCatName] = useState('');      // 고양이 이름 상태
  const [likesCats, setLikesCats] = useState(false);  // 체크박스 상태 (고양이 좋아하는지 여부)
  const [catType, setCatType] = useState('');      // 라디오 버튼 상태 (고양이 종류)

  const handleChange = (e) => {
    setCatName(e.target.value); // 고양이 이름 업데이트
  };

  const handleCheckboxChange = (e) => {
    setLikesCats(e.target.checked); // 체크박스 상태 업데이트
  };

  const handleRadioChange = (e) => {
    setCatType(e.target.value); // 라디오 버튼 상태 업데이트
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 기본 동작 방지
    alert(`고양이 이름: ${catName}\n고양이를 좋아하나요?: ${likesCats ? "네" : "아니요"}\n고양이 종류: ${catType}`);
  };

  return (
    <div>
      <h2>고양이 이름 짓기</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={catName}
          onChange={handleChange}
          placeholder="고양이 이름 입력"
        />
        
        {/* 체크박스 */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={likesCats}         // 체크박스 상태 연결
              onChange={handleCheckboxChange}  // 체크박스 상태 변경 핸들러
            />
            고양이를 좋아하나요?
          </label>
        </div>

        {/* 라디오 버튼 */}
        <div>
          <h3>고양이 종류를 선택하세요:</h3>
          <label>
            <input
              type="radio"
              value="러시안블루"

              name = "catType"
              //checked={catType === '러시안블루'}
              
              onChange={handleRadioChange}
            />
            러시안블루
          </label>
          <label>
            <input
              type="radio"
              value="샴"

              name = "catType"
              //checked={catType === '샴'}

              onChange={handleRadioChange}
            />
            샴
          </label>
          <label>
            <input
              type="radio"
              value="페르시안"

              name = "catType"
              //checked={catType === '페르시안'}

              onChange={handleRadioChange}
            />
            페르시안
          </label>
        </div>

        <input type="submit" value="제출" />
      </form>

      <h2>고양이 이름: {catName}</h2>
      <h2>고양이를 좋아하나요?: {likesCats ? "네" : "아니요"}</h2>
      <h2>선택한 고양이 종류: {catType}</h2> {/* 선택한 고양이 종류 표시 */}
    </div>
  );
}

export default App;
