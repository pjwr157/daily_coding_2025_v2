import React, { useState } from 'react';
import './App.css';

function Card({ job, grade }) {
  return (
    <div className={`card ${job} ${grade}`}>
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
  const [party] = useState([
    { job: '전사', grade: 'SSR' },
    { job: '마법사', grade: 'SR' },
    { job: '궁수', grade: 'S' },
    { job: '전사', grade: 'R' },
    { job: '궁수', grade: 'H' }
  ]);

  return (
    <>
      <CardArea>
        {party.map((character, index) => (
          <Card key={index} job={character.job} grade={character.grade} />
        ))}
      </CardArea>
    </>
  );
}

export default App;
