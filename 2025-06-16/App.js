import './App.css';

function random(){
  return Math.floor(Math.random() * 45) + 1;
}

function App() {

  var ns = [1, 1, 1, 1, 1, 1];
  // var ns = Array(6).fill(0); // 0으로 채운 6개의 배열

  //var r = ns.map(() => (Math.floor(Math.random()*45)+1)+' ');  
for(var i = 0; i < 6; i++) {
  ns[i] = random() + ' '; // 1부터 45 사이의 랜덤 숫자를 생성하고 문자열로 변환
}



  // Array.from()을 사용해 6개의 숫자(0, 1, 2, ...)로 배열을 생성
  // var r = Array.from({ length: 6 }, () => Math.floor(Math.random() * 45) + 1 + ' ');  

  return (
    <div className="App">
      {ns}
    </div>
  );
}

export default App;