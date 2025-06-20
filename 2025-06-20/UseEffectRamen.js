import React, { useState, useEffect } from 'react';

function RamenTimer() {
//   const [timeLeft, setTimeLeft] = useState(180); // 초기 시간 설정 (3분 = 180초)
  const [timeLeft, setTimeLeft] = useState(10); // 초기 시간 설정 (3분 = 180초)

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {  //JavaScript의 브라우저 내장 함수. 일정 시간 후에 코드를 한 번 실행함
        setTimeLeft(timeLeft - 1); // 1초마다 감소
      }, 1000);
      
      // 컴포넌트가 언마운트되면 타이머 정리
      return () => clearTimeout(timerId); //JavaScript 내장 함수. setTimeout 타이머를 취소함
    }
  }, [timeLeft]); // timeLeft가 바뀔 때마다 이 useEffect를 다시 실행하라는 뜻

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>라면 타이머</h1>
      <h2>{timeLeft > 0 ? `남은 시간: ${timeLeft}초` : "라면이 완성되었습니다!"}</h2>
    </div>
  );
}

export default RamenTimer;    //index.js에서 App으로 읽기러했으니 괜찮음.