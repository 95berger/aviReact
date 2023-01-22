import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import PicturSize from "./comp/PicturSize";

function App() {
  const [counter, setCounter] = useState(0);
  const [url, setUrl] = useState("")

  const addres = (event)=>{
    setUrl(event.target.value)
  } 


  return (
    <div className="App">
     
        <PicturSize
          // src={
          //    "https://cdn.babamail.co.il/Images/2018/12/23/2cb83a42-bbda-4ab8-82d8-77134ba7098a.jpg"
          // }
          src={url}
        />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        >
        click here
      </button>
      <h1>hello world</h1>
      <h1>you click {counter} times</h1>
      <label>
      write url pleas
        <input onChange={addres} value= {url}></input>
       
        </label>
    </div>
  );
}

export default App;
a