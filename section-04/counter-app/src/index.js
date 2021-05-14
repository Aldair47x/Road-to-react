import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';

import './index.css'

const divRoot = document.querySelector('#root');

// const saludo = "1111"
const value = 50

ReactDOM.render( <CounterApp value={value} />, divRoot);