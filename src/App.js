import './App.css';
import Content from './Components/Content';
import whatsapp from "./whatsapp.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Content log={whatsapp}/>
        
      </header>
    </div>
  );
}

export default App;
