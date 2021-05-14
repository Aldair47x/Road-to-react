import React, { useState } from 'react'
import PropTypes from 'prop-types';



export default function CounterApp({value}) {

    const [counter, setCounter] = useState(value);

    const handleAdd = (e) => {
        setCounter(counter+1);
    }

    const handleSubtract = (e) => {
        setCounter(counter-1);
    }

    const handleReset = (e) => {
        setCounter(0);
    }
    

    return (
        <div>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}