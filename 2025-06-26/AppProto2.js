import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

//todo
//기존 파티원 정보를 불러와서 처음에 보여주기 ( state 도 변경 )
//프론트 개발

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
  function clearParty(){
    setParty([]);
    //todo
    //api 호출
    clearPartyApi();
  }

  useEffect(() => {	
    console.log('컴포넌트가 생성됨(마운트됨)');
    getMyCardsApi();
    getPartyApi();
    return () => {
      console.log('컴포넌트가 언마운트됨');
    };

  }, []); // []로 비우기	

  function cat(index,job,grade){
    console.log(`보유카드 번호: ${index}`);
    alert(`보유카드 번호: ${index} 직업: ${job} 등급: ${grade}`);
    var d = {job: job,grade: grade};
    // setParty([...party,{job: job,grade: grade}]);
    setParty([...party,d]);

    //todo
    //디비에 파티 추가 api 호출
    partyAdd(d);
  }

  function partyAdd(d){
    // axios.get('http://localhost:8080/spring/card/partyAdd')			
    axios.post('http://localhost:8080/spring/card/partyAdd',d)			
    .then(response => {		
      console.log(response.data);  // 서버로부터 받은 데이터 출력	
      // setMy([...my, response.data]);
    })		
    .catch(error => {		
      console.error('Error fetching data:', error);  // 에러 처리	
    });		
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
  function clearPartyApi(){
    axios.get('http://localhost:8080/spring/card/clearParty')			
    .then(response => {		
      console.log(response.data);  // 서버로부터 받은 데이터 출력	
    })		
    .catch(error => {		
      console.error('Error fetching data:', error);  // 에러 처리	
    });		
  }

  var getMyCardsApi = useCallback(() => {
    axios.get('http://localhost:8080/spring/card/getMyCards')			
    .then(response => {		
      console.log(response.data);  // 서버로부터 받은 데이터 출력	
          // 기존의 `my` 배열을 복사하고, 새 객체를 추가한 새로운 배열로 업데이트
      setMy([...my, ...response.data]);
    })		
    .catch(error => {		
      console.error('에러:', error);  // 에러 처리	
    });		
  }, []);

  var getPartyApi = useCallback(() => {
    axios.get('http://localhost:8080/spring/card/getParty')			
    .then(response => {		
      console.log(response.data);  // 서버로부터 받은 데이터 출력	
          // 기존의 `my` 배열을 복사하고, 새 객체를 추가한 새로운 배열로 업데이트
      setParty([...party, ...response.data]);
    })		
    .catch(error => {		
      console.error('에러:', error);  // 에러 처리	
    });		
  }, []);

  var [my,setMy] = useState([]);
  const [party,setParty] = useState([]);

  return (
    <>
      <h2>파티 1</h2>
      <button onClick={clearParty}>파티 비우기</button>
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
            xxx={()=>cat(index,character.job,character.grade)}
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
