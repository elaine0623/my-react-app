import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';


function App() {//執行setXXX的fuction,改變前者變數
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);//首次預設答案值
  const [userGuess, setUserGuess] = useState(0);//使用者預設值為空
  const [message, setMessage] = useState('');
  const [upperbounder, setUpperbounder] = useState(100);
  const [downbounder, setDownbounder] = useState(1);
  // 比對玩家是否猜對的函數
  const handleGuess = () => {
    const guess = parseInt(userGuess);//parseInt(userGuess, 10)10表示進制的意思可忽略不計

    if (isNaN(guess)) {
      setMessage('請輸入有效數字！');
    } else if (guess === targetNumber) {
      setMessage('恭喜你，猜對了！');
    } else if (guess < targetNumber) {
      setMessage('太小了，再試一次。');
      setDownbounder(guess);
      setUserGuess(0);
    } else {
      setMessage('太大了，再試一次。');
      setUpperbounder(guess); 
      setUserGuess(0);
    }
  };
  // 處理文本輸入變化的函數
  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
    // e.target(參數=value)
  };
  // 觸發任何在每次使用者輸入後需要更新的邏輯
  //每次異動都會在console.log呈現>>不需每次都記錄
  //useEffect(() => {
    //console.log(`使用者猜測更新: ${userGuess}`);
  //}, [userGuess]);
  
  return (
    <>
  <h1>猜數字遊戲</h1>
  <p>{downbounder}到{upperbounder}之間的數字，你猜是多少？</p>
  {/* onChange異動時觸發函數 */}
  <input type="text" id="guessField" value={userGuess} onChange={handleInputChange}/>
  <input type="submit" value="猜!" id="guessSubmit" onClick={handleGuess}/>
  <p className="message">{message}</p>
</>

  );
}

export default App;
