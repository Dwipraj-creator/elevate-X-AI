import React, { useRef } from 'react'

const UseRef = () => {

    const ref = useRef(null);


    const handleRef = ()=>{
        ref.current.focus()
    }

  return (
    <div>
        <input type="text" placeholder='Enter something' ref={ref} />
        <button onClick={handleRef}>
            Focus
        </button>
    </div>

  )
}

export default UseRef