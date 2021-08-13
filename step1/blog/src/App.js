import logo from './logo.svg';
import './App.css';

function App() {

  // 변수값도 불러오고
  let posts = "aaa";
  // 함수도 불러오고
  function 함수() {
    return 100
  }
  return (
    <div className="App">
      <div className="">
        <p>{posts}</p>
        <p>{함수()}</p>
        <img src={logo} alt="logo"/>
      </div>
    </div>
  );
}

export default App;
