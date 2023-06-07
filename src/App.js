import Header from "./components/Header";
import Screen from "./components/Screen";
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Screen currentNum={2001}/>
    </div>
  );
}

export default App;
