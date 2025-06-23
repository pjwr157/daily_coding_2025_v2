import './App.css';
import React, { useState } from 'react';											

function App() {							// State는 React 컴포넌트 안에서 일시적으로 데이터를 저장하는 변수 같은 거야. 브라우저에 저장되는 건 아님.
	const [x, setFormData] = useState('');	// 컴포넌트 함수 안에서 만들어야 함										
	const handleChange = (e) => { 			// 입력 값 변경 시 상태 업데이트
		const catName = e.target.value;									
		setFormData(catName);				// 일어났을 때 어떻게 반응할지 정의하는 것. 즉, "어떤 함수 실행할지 정하는 것" = 이벤트 핸들링					
	};										
	const handleSubmit = (e) => {		  	// 폼 제출 시 처리								
		e.preventDefault();  				// 기본 폼 제출 동작 방지									
	};										
											
	return (										
		<div>									
			<h2>고양이 이름 짓기</h2>								
			<form onSubmit={handleSubmit}>								
				<input name="name" value={x} onChange={handleChange} />							
			  <input type="submit" value="제출" />
			</form>
      <h2>고양이이름: {x}</h2>								
		</div>									
  )
}	
										
export default App;											