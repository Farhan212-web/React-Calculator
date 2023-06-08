import ButtonList from "./components/ButtonList";
import Header from "./components/Header";
import Screen from "./components/Screen";
import './css/App.css';
import { useState } from "react";

function App() {

  const [currentNum, setCurrentNum] = useState("");

  const buttonClick = (newNum) => {
    setCurrentNum(currentNum + newNum)
  }

  return (
    <div className="App">
      <Header />
      <Screen currentNum={currentNum}/>
      <ButtonList buttonClick={buttonClick} />
    </div>
  );
}

export default App;
