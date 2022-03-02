import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Request from "./server/api";
import "./App.css";

function App() {
  useEffect(() => {
    Request.TestCookieGet({})
      .then((result) => {
        console.log(
          "chengTong ~ file: App.js ~ line 9 ~ TestCookiePost ~ result",
          result
        );
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
