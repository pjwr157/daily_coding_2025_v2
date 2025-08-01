import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

var jobs = ["전사","마법사","궁수","도적","사제"];
var grade = ["SSR","SR","S","R","H","N"];

function dice(s,e){
  return Math.floor(Math.random()*(e-s+1))+s;
}

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
  function cat(index){
    console.log(`보유카드 번호: ${index}`);
    alert(`보유카드 번호: ${index}`);
  }

  function gacha(){
    var j = jobs[dice(0,4)];
    var g = grade[dice(0,5)];
    console.log(j,g);
    // 기존의 `my` 배열을 복사하고, 새 객체를 추가한 새로운 배열로 업데이트
    setMy([...my, { job: j, grade: g }]);
  }
  function gachaApi(){
    axios.get('http://localhost:8080/api/gacha')			
    .then(response => {		
      console.log(response.data);  // 서버로부터 받은 데이터 출력	
          // 기존의 `my` 배열을 복사하고, 새 객체를 추가한 새로운 배열로 업데이트
      setMy([...my, response.data]);
    })		
    .catch(error => {		
      console.error('Error fetching data:', error);  // 에러 처리	
    });		
  }

  // var [my,setMy] = useState([{ job: '전사', grade: 'SSR' }]);
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
      <button onClick={gacha}>카드 1뽑</button>
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
