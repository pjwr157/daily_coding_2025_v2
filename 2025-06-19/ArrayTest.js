import React, { useState } from 'react';
import './App.css';

function Card({ job }) {
  return (
    <div className={`card ${job}`}> {/* $ 기호는 템플릿 리터럴을 사용할 때 변수나 표현식을 삽입하기 위해 쓰이는 문법 */}
      카드
    </div>
  )
}

function CardArea({ children }) {           //아래의 <CardArea>가 가능한 이유임ㅋ
  return (
    <div id='card_area'>
      {children}
    </div>
  )
}

function App() {
  var [party] = useState(['전사', '마법사', '궁수', '전사', '궁수'])

  return (
    <>
      <CardArea>
        {party.map((job, index) => (          //자바스크립트의 함수 문법 규칙! array.map((값, 인덱스, 전체배열) => { ... });
          <Card key={index} job={job} />      //index 변수는 map() 함수가 자동으로!
        ))}
      </CardArea>
    </>
  )
}

export default App;
