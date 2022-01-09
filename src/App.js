import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <input style={text} placeholder="Enter your city..."></input>
        <input style={submit} value="Search"></input>
      </form>
    </div>
  );
}

export default App;
