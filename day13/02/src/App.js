import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(0)
  console.log("Componenet rendered");


  React.useEffect( () => {
    console.log("Effect function ran")
    fetch("https://swapi.dev/api/people/1")
    .then(res=>res.json())
    .then(data=>console.log(data))
  }, [count])

  

  return (
    <div className="App">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prev => prev+1)}>
        Add
      </button>
    </div>
  );
}

export default App;
