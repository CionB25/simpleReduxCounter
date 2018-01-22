import React, { Component } from 'react';
import { createStore } from 'redux'
import logo from './logo.svg';
import './App.css';

function rootReducer(state = [], action) {
  switch(action.type) {
    case 'ADD-ONE':
      return state.concat("added one");
    case 'SUBTRACT-ONE':
      return state.concat([action.data]);
    default:
      return state
  }
}

const increment = () => {
  console.log("in store increment")
  store.dispatch({type: "ADD-ONE"})
}

const decrement = () => {
  console.log("in store decrement")
  store.dispatch({type: "SUBTRACT-ONE", data: "subtract one"})
}

let store = createStore(rootReducer)

class App extends Component {
  constructor() {
    super()
    store.subscribe(() => {
      console.log(store.getState())
    })
  }
  render() {
    return (
      <div className="App">
        <h1>simple redux counter</h1>
        <p>#</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

export default App;
