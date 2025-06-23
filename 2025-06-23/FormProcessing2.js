import './App.css';
import React, { useState } from 'react';

function App() {
	const [catName, setCatName] = useState('');      // 고양이 이름 상태
	const [likesCats, setLikesCats] = useState(false);  // 체크박스 상태 (고양이 좋아하는지 여부)

	const handleChange = (e) => {
		setCatName(e.target.value); // 고양이 이름 업데이트
	};

	const handleCheckboxChange = (e) => {
		setLikesCats(e.target.checked); // 체크박스 상태 업데이트
	};

	const handleSubmit = (e) => {
		e.preventDefault(); // 폼 제출 시 기본 동작 방지
		alert(`고양이 이름: ${catName}\n고양이를 좋아하나요?: ${likesCats ? "네" : "아니요"}`);
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
				<input type="submit" value="제출" />
			</form>
			<h2>고양이 이름: {catName}</h2>
			<h2>고양이를 좋아하나요?: {likesCats ? "네" : "아니요"}</h2> {/* 체크박스 상태 표시 */}
		</div>
	);
}

export default App;
