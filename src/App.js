import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { increment, decrement } from './container/login/actions'

function App({count, increaseCounter, decreaseCounter}) {
  console.log(count)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>1</p>
        <button onClick={() => increaseCounter()}>Añadir</button>
        <button onClick={() => decreaseCounter()}>Restar</button>
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

const mapStateToProps = state => {
  return {
    count: state.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increment()),

    decreaseCounter: () => dispatch(decrement()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
