import React from 'react'
import { useState } from 'react'
import { products } from '../DemoData/productData'
import { useMemo } from 'react'

const Product = () => {
    const [input,setInput] = useState("")
    const [error,setError] = useState(null)
    const [loading, setLoading] = useState(true)


   const filteredUser = useMemo(()=> products.filter((e)=>{
    return e.name.toLowerCase().includes(input.toLowerCase())
   }),[input])

  return (
    <div>
        <input type="text" 
        value={input}
        placeholder='Enter Your Product here....'
        onChange={(e)=>setInput(e.target.value)}
        />

        <ul>
            {filteredUser.map((e)=>(
                <li key={e.id}>
                    {e.name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Product