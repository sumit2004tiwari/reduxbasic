import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement, reset, byvalue } from './slice/counterSlice'

function App() {
const count = useSelector((state)=>state.counter.value)
const [incValue , setIncValue] = useState(0)
const dispatch = useDispatch()

console.log(dispatch , "dispatch")

function handleOnchange (e){
  const value = Number(e.target.value)
    setIncValue(value)
    console.log("incValue>>>>>>" , incValue)
    dispatch()
}

  return (
    <>
      <h2>i am your dad</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>Reset</button><br />
      <input type="text"  placeholder='write number'  onChange={(e)=> handleOnchange(e)}/>
      <button onClick={()=>dispatch(byvalue(incValue))}>inc count by value</button>

    </>
  )
}

export default App
