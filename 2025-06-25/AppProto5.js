import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

// var jobs = ["전사","마법사","궁수","도적","사제"];
// var grade = ["SSR","SR","S","R","H","N"];

function Card({ job, grade, xxx}) {
  return (
    <div className={`card ${job} ${grade}`} onClick={xxx}>
      {job} - {grade} {/* job과 grade를 표시 */}
    </div>
  );
}

function CardArea({ children }) {
  return (
    <div id='card_area'>
      {children}
    </div>
  );
}

function App() {
  useEffect(() => {	
    console.log('컴포넌트가 생성됨');
    getMyCardsApi();
  }, []); // []로 비우기	

  function cat(index){
    console.log(`보유카드 번호: ${index}`);
    alert(`보유카드 번호: ${index}`);
  }

  function gachaApi(){
    axios.get('http://localhost:8080/spring/api/gacha')			
    .then(response => {		
      console.log(response.data);  // 서버로부터 받은 데이터 출력	
          // 기존의 `my` 배열을 복사하고, 새 객체를 추가한 새로운 배열로 업데이트
      setMy([...my, response.data]);
    })		
    .catch(error => {		
      console.error('Error fetching data:', error);  // 에러 처리	
    });		
  }
  function getMyCardsApi(){
    axios.get('http://localhost:8080/spring/card/getMyCards')			
    .then(response => {		
      console.log(response.data);  // 서버로부터 받은 데이터 출력	
          // 기존의 `my` 배열을 복사하고, 새 객체를 추가한 새로운 배열로 업데이트
      setMy([...my, ...response.data]);
    })		
    .catch(error => {		
      console.error('에러:', error);  // 에러 처리	
    });		
  }  

  var [my,setMy] = useState([]);
  const [party] = useState([
    { job: '전사', grade: 'SSR' },
    { job: '마법사', grade: 'SR' },
    { job: '궁수', grade: 'S' },
    { job: '전사', grade: 'R' },
    { job: '궁수', grade: 'H' }
  ]);

  return (
    <>
      <h2>파티 1</h2>
      <CardArea>
        {party.map((character, index) => (
          <Card key={index} job={character.job} grade={character.grade} />
        ))}
      </CardArea>
      <h2>보유</h2>
      <button onClick={gachaApi}>카드 1뽑 by api</button>
      <CardArea>
        {my.map((character, index) => (
          <Card key={index} job={character.job} grade={character.grade} 
            xxx={()=>cat(index)}
          />
        ))}
      </CardArea>
      <h2>적</h2>
      <CardArea>
        {party.map((character, index) => (
          <Card key={index} job={character.job} grade={character.grade} />
        ))}
      </CardArea>
    </>
  );
}

export default App;
