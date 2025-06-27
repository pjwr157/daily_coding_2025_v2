import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Clock from './Clock.js';
import Card from './Card.js';
import CardArea from './CardArea.js';
import Stars from './Stars.js';

function App() {
  var [dice,setDice] = useState(0);
  var [gold,setGold] = useState(0);  
  var [my,setMy] = useState([]);
  var [pj,setPj] = useState([]);
  var [pjList,setPjList] = useState([]);

  function clearPj(){
    setPj([]);
    clearPjApi();
  }

  useEffect(() => {	
    getMyWealth();
    getMyCardsApi();
    getPjApi();
    getPjListApi();
    return () => {
    };
  }, []); // []로 비우기	 

  function cat(index,no){
    if (pj.length >= 5) {
      alert('참여 인원은 최대 5명까지만 추가할 수 있습니다.');
      return; // 추가 중단
    }    
    console.log(`보유카드 번호: ${index} 고유no: ${no}`);
    var d = {id:'cat',no: no};
    pjMemberAdd(d);
  }

  function getPjListApi(){
    axios.get('http://localhost:8080/card/pj/getPjList')			
    .then(response => setPjList(response.data) )		
    .catch(error => console.error('에러:', error) );
  }
  function pjMemberAdd(d){
    axios.post('http://localhost:8080/card/card/pjMemberAdd',d)			
    .then(() => {		
      getPjApi();
      getMyCardsApi();
    })		
    .catch(error => console.error('에러:', error) );
  }
  function gachaApi(){
    axios.get('http://localhost:8080/card/api/gacha')			
    .then(response => {		
      setMy([...my, response.data]);
      getMyWealth();
    })		
    .catch(error => console.error('에러:', error) );
  }
  function clearPjApi(){
    axios.get('http://localhost:8080/card/card/clearPjMember')			
    .then(() => {		
      getMyCardsApi();
    })		
    .catch(error => console.error('에러:', error) );
  }
  function getMyCardsApi(){
    axios.get('http://localhost:8080/card/card/getMyCards')			
    .then(response => setMy(response.data) )
    .catch(error => console.error('에러:', error) );
  }
  function getPjApi(){
    axios.get('http://localhost:8080/card/card/getPjMember?no=1')			
    .then(response => setPj(response.data) )		
    .catch(error => console.error('에러:', error) );
  }
  function getMyWealth(){
    axios.get('http://localhost:8080/card/shop/getWealth')			
    .then(response => {		
      setGold(response.data.gold);
      setDice(response.data.dice);
    })		
    .catch(error => console.error('에러:', error) );
  }
  function buyGold(){
    axios.get('http://localhost:8080/card/shop/buyGold')			
    .then(() => getMyWealth() )		
    .catch(error => console.error('에러:', error) );
  }
  function buyDice(){
    axios.get('http://localhost:8080/card/shop/buyDice')			
    .then(() => getMyWealth() )		
    .catch(error => console.error('에러:', error) );
  }  

  return (
    <>
      <Clock />
      <fieldset>
        <legend>
          {pjList.length > 0 ?
            <>
              {pjList[0].no} {pjList[0].name} <Stars amount={pjList[0].level} /> {pjList[0].gold}💰 {pjList[0].content}
            </>
          : ''}
          &nbsp;&nbsp;<button onClick={clearPj}>참여인원 비우기</button>
        </legend>
        <CardArea pjId={3}>
          {pj.map((character, index) => (
            <Card key={index} job={character.job} grade={character.grade} />
          ))}
        </CardArea>
      </fieldset>
      <fieldset>
        <legend>
          {pjList.length > 0 ? 
            <>
              {pjList[1].no} {pjList[1].name} <Stars amount={pjList[1].level} /> {pjList[1].gold}💰 {pjList[1].content}
            </>
          : ''}
          &nbsp;&nbsp;<button onClick={clearPj}>참여인원 비우기</button>
        </legend>
        <CardArea pjId={2}>
          {pj.map((character, index) => (
            <Card key={index} job={character.job} grade={character.grade} />
          ))}
        </CardArea>
      </fieldset>
      <fieldset>
        <legend>
          {pjList.length > 0 ?
            <>
              {pjList[2].no} {pjList[2].name} <Stars amount={pjList[2].level} /> {pjList[2].gold}💰 {pjList[2].content}
            </>
          : ''}
          &nbsp;&nbsp;<button onClick={clearPj}>참여인원 비우기</button>
        </legend>
        <CardArea pjId={1}>
          {pj.map((character, index) => (
            <Card key={index} job={character.job} grade={character.grade} />
          ))}
        </CardArea>
      </fieldset>
      <CardArea>
        {my.map((character, index) => (
          <Card key={index} job={character.job} grade={character.grade} xxx={()=>cat(index,character.no)} />
        ))}
      </CardArea>
      <fieldset>
        <legend>&nbsp;내 카드&nbsp;</legend>
        <button onClick={gachaApi}>카드 1뽑 by api</button>
      </fieldset>      
      <fieldset>
        <legend>&nbsp;상점&nbsp;</legend>
        <span>{dice}🎲 {gold}💰</span>&nbsp;
        <button onClick={buyDice}>주사위상자 구매</button>&nbsp;<button onClick={buyGold}>골드 충전(만원)</button>
      </fieldset>
    </>
  );
}

export default App;