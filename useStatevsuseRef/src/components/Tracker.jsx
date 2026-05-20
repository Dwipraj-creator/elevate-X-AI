import React from 'react'
import { useEffect } from 'react'
import { use } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Tracker = () => {

const [name,setName]= useState("")
const renderCount = useRef(0)
const submitCount = useRef(0)
const inputRef = useRef(null)

useEffect(()=>{
    renderCount.current +=1
})

const handleSubmit = () =>{
    submitCount.current += 1
    console.log("submit count:",submitCount.current)
}
const handleReset = () => {
    setName("")
}
const handleFocus = () =>{
    inputRef.current.focus()
}

  return (
    <div>
        <h1>Tracker</h1>
        <input type="text"
        ref={inputRef}
        placeholder='Enter your name '
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <h2>You typed:{name}</h2>
        <h3>Render Count:{renderCount.current}</h3>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleFocus}>Focus</button>
    </div>
    
  )
}

export default Tracker