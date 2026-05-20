import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

 const SearchUser = () => {
    const [input,setInput] = useState("")
    const [users,setUser]=useState([])
    const [loading,setLoading]= useState(true);
    const [error,setError]= useState("")


    useEffect(()=>{
async function fetchUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
       
        setUser(data) 
    
    } catch (error) {
        setError(error.message)
        
    }finally{
        setLoading(false)
    }
}
fetchUsers()
    },[])


const filterdUser = users.filter((e)=>{
   const match = e.name.toLowerCase().includes(input.toLocaleLowerCase())
   return match
})



  return (
    <div>

        <h1>Search User </h1>

 {loading && <p>loading....</p>}
 {error && <p>{error}</p>}
<h2>Showing {filterdUser.length} users</h2>


<input type="text" onChange={(e)=>setInput(e.target.value)} placeholder='search users' value={input} />




        <ul>
           
            {filterdUser.map((e)=>(
                <li key={e.id}>
                    <h3>Name:- {e.name}</h3>
                   <h3> Email:- {e.email}</h3>
                   <h3>city:- {e.address.city}</h3>
                    
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SearchUser
