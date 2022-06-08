import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'
//you can you function (props) as argument in function or object deconstruction
//what useState does is allows the state of your code to render properly-- just the component and not everything.
//prevState makes it so that it doesn't overide.


export default function CounterHooks({ initialCount }){
    console.log('Render Counter Hooks')
    const [count, setCount]= useState(initialCount)
    const style = useContext(ThemeContext)
    return(
        <div className='Container'>
        <h1>Count Hooks</h1>
        <button style ={style} className="btn minus" onClick={()=> setCount(prevCount => prevCount -1)}>-</button>
         <span>{count}</span>
        <button style={style} className="btn plus" onClick={()=> setCount(prevCount => prevCount +1)}>+</button>
      </div> 
    )
}