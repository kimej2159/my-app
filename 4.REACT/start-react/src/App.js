import React, { useState } from "react";
import './App.css';

function App(){
  // 화살함수
  const convert = () => {console.log("단위를 min에서  hours로 변경합니다")};
  const [amount, setAmount] = useState("0");
  const handleSubmit = (e) => e.preventDefault();

  //일반함수
  function handleChange(event){
    setAmount(event.target.value);
  }

  const resetInput = () => setAmount("0")
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
            <li><input type="text" value={amount} onChange={handleChange} placeholder="값을 입력하세요"  />minutes</li>
            <li><input type="text"  value={amount / 60} placeholder="값을 입력하세요"  />hours</li>
            <li><button onClick={resetInput}>리셋</button></li>
          </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;