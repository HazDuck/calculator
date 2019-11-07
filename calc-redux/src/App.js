import React from 'react';
import './App.css';
import { createStore } from 'redux'
import { calculator, initialState } from './reducers/calculator'
import Calc from './Calc'

const store = createStore(calculator, initialState)
const App = () => {

  return (
    <div className="calc">
      <Calc/>
    </div>
  )
}

export { App, store };
