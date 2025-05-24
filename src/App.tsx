import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import React from 'react';

import { createSlice } from '@reduxjs/toolkit';



function App() {

  const [count, setCount] = React.useState(0);
 
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const initialState = {count: 0};
  const reducer = (state: {count: number}, action: {type: string}) => {
    switch(action.type){
      case 'increment' : 
        return {
          ...state,
          count: state.count + 1
        }
      case 'decrement' : 
        return {
          ...state,
          count: state.count - 1
        }
      case 'reset' : 
        return {
          ...state,
          count: 0
        }
      default:
        return state;
    }
  }


  const [state, dispatch] = React.useReducer(reducer, initialState);


  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}>Home</Route>
    //   </Routes>
    // </BrowserRouter>

    <>
     <div>
      <h2>Compteur (useState)</h2>
      <p>Valeur : {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
     <div>
      <h2>Compteur (useReducer)</h2>
      <p>Valeur : {state.count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>+1</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
    </>
  )
}

export default App
