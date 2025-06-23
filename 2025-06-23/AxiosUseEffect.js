import axios from 'axios';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        axios.get('http://localhost:8080/spring/api/x')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('에러남. 에러정보:', error);
            });
    }, []);  // 빈 배열: 최초 1번만 실행

    return (
        <>
            야옹
        </>
    );
}
export default App;