import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement,reset,incrementByAmount} from './counterSlice'
import React,{useState} from 'react'
const Counter = () => {
    const count =useSelector((state)=>state.Counter.count)
    const dispatch =useDispatch();
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    </section>
  )
}

export default Counter
