import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";

const StyledApp = styled.div`
  position: relative;
`;

function App() {
  return (
    <StyledApp className="App">
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
    </StyledApp>
  );
}

export default App;
