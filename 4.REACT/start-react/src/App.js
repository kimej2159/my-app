import React, { useState } from "react";
import './App.css';

function App(){
  // 화살함수
  const convert = () => {console.log("단위를 min에서  hours로 변경합니다")};
  const [amount, setAmount] = useState("0");
  const [disabled, setDisabled] = useState(false);


  //일반함수
  function handleChange(event){
    setAmount(event.target.value);
  }

  const resetInput = () => {
    setAmount("0");
    setDisabled(false);   //반전 누르면 disabled가 true로 바뀌는데, 이때 reser누르면 disabled를 초기화
  } 
  const handleSubmit = (e) => e.preventDefault();
  const inversion = () => setDisabled((currenteunji) => !currenteunji);   //current : state의 이전 값을 알아서 가졍는 파라키터 명
  return(
    <div class="main">
      <h1 className='site-header'>단위 환산 앱</h1>
      <div class="unit-converter">
        <div className="ad">
          광고
        </div>
        <div className="converter">
          <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <input 
                type="text"
                value={disabled ? amount * 60 : amount} 
                placeholder="값을 입력하세요"
                onChange={handleChange} 
                disabled={disabled} />
              <label>minutes</label>
            </li>
            <li>
              <input
                type="text"  
                value={!disabled ? amount / 60 : amount} 
                placeholder="값을 입력하세요"
                onChange={handleChange} 
                disabled={!disabled} />
              <label>hours</label>
            </li>
            <li>
              <button onClick={resetInput}>초기화</button>
              <button onClick={inversion}>반전</button>
            </li>
          </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;