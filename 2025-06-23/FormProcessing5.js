import './App.css';
import React, { useState } from 'react';

function App() {
  const [catName, setCatName] = useState('');        // 고양이 이름 상태
  const [likesCats, setLikesCats] = useState(false); // 체크박스 상태 (고양이 좋아하는지 여부)
  const [catType, setCatType] = useState('');        // 라디오 버튼 상태 (고양이 종류)
  const [furColor, setFurColor] = useState('');      // 셀렉트 박스 상태 (고양이 털 색깔)
  const [catAge, setCatAge] = useState(1);           // 슬라이더 상태 (고양이 나이)

  const handleChange = (e) => {
    setCatName(e.target.value); // 고양이 이름 업데이트
  };

  const handleCheckboxChange = (e) => {
    setLikesCats(e.target.checked); // 체크박스 상태 업데이트
  };

  const handleRadioChange = (e) => {
    setCatType(e.target.value); // 라디오 버튼 상태 업데이트
  };

  const handleSelectChange = (e) => {
    setFurColor(e.target.value); // 셀렉트 박스 상태 업데이트
  };

  const handleSliderChange = (e) => {
    setCatAge(e.target.value); // 슬라이더 상태 업데이트 (고양이 나이)
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 기본 동작 방지
    alert(`고양이 이름: ${catName}\n고양이를 좋아하나요?: ${likesCats ? "네" : "아니요"}\n고양이 종류: ${catType}\n고양이 털 색깔: ${furColor}\n고양이 나이: ${catAge}`);
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
              checked={catType === '러시안블루'}
              onChange={handleRadioChange}
            />
            러시안블루
          </label>
          <label>
            <input
              type="radio"
              value="샴"
              checked={catType === '샴'}
              onChange={handleRadioChange}
            />
            샴
          </label>
          <label>
            <input
              type="radio"
              value="페르시안"
              checked={catType === '페르시안'}
              onChange={handleRadioChange}
            />
            페르시안
          </label>
        </div>

        {/* 셀렉트 박스 */}
        <div>
          <h3>고양이 털 색깔을 선택하세요:</h3>
          <select value={furColor} onChange={handleSelectChange}>
            <option value="">색깔 선택</option>
            <option value="검정">검정</option>
            <option value="흰색">흰색</option>
            <option value="회색">회색</option>
            <option value="갈색">갈색</option>
          </select>
        </div>

        {/* 슬라이더 (고양이 나이 입력) */}
        <div>
          <h3>고양이 나이: {catAge}살</h3>
          <input
            type="range"
            min="1"
            max="100"
            value={catAge}
            onChange={handleSliderChange}
          />
        </div>

        <input type="submit" value="제출" />
      </form>

      <h2>고양이 이름: {catName}</h2>
      <h2>고양이를 좋아하나요?: {likesCats ? "네" : "아니요"}</h2>
      <h2>선택한 고양이 종류: {catType}</h2> {/* 선택한 고양이 종류 표시 */}
      <h2>선택한 털 색깔: {furColor}</h2>   {/* 선택한 털 색깔 표시 */}
      <h2>고양이 나이: {catAge}살</h2>      {/* 선택한 고양이 나이 표시 */}
    </div>
  );
}

export default App;
