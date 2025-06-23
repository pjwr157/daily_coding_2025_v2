import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState(null); // 서버로부터 받은 데이터를 저장할 상태 변수
    const [error, setError] = useState(null); // 에러를 저장할 상태 변수

    useEffect(() => {
        axios.get('http://localhost:8080/spring/api/x')
            .then(response => {
                setData(response.data);  // 서버로부터 받은 데이터를 상태에 저장
                console.log(response.data);
            })
            .catch(error => {
                setError(error);  // 에러 발생 시 에러 상태에 저장
                console.error('에러남. 에러정보:', error);
            });
    }, []); // 빈 배열을 넣어서 컴포넌트가 마운트될 때 한 번만 실행

    return (
        <div>
            <h1>데이터 확인</h1>
            {error && <p>데이터를 불러오는 중 에러가 발생했습니다.</p>}
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>데이터를 불러오는 중...</p>}
        </div>
    );
}

export default App;
