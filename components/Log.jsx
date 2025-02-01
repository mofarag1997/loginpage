import React,{useState} from 'react'
import Login from './login'

const Log = () => {
const [show,setShow]=useState(true)
const change=()=>{
    setShow(!show)
}
  return (
    <div>
      <Login show={show} change={change}/>
    </div>
  )
}

export default Log
