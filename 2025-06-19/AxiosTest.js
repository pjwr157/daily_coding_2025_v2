import axios from 'axios';

function App() {
    axios.get('http://localhost:8080/api/catOne')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('에러남. 에러정보:', error);
        });

    return (
        <>
            야옹
        </>
    );
}

export default App;