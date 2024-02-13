import './App.css';
import style from "../src/myStyle.module.css"
import Example from './components/Example';


function App() {
  const h3style = {
    color: "green",
    fontSize: "30px"
  }
  const subject = "React"
  return (
    <div className='App'>
      <h1>React</h1>
      <h2 style={{ color: "red" }}>Dom</h2>
      <h3 style={h3style}>Welcome React</h3>
      <h4 className={style.reactStyle}>My style</h4>
      <h3>{subject}</h3>
      <Example />
    </div>
  );
}

export default App;
