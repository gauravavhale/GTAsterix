import React, { useState } from 'react'
import axios from 'axios'

const LoginForm = ({onSubmit}) => {

    const [message, setMessage] = useState("")
    const [input, setInput] = useState({
        name:"",
        password:""
    })

    const handleInput=(e)=>{
        const {name, value} = e.target
        setInput((prev)=>({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(input)
        handleLogin()
    }

    const handleLogin = async () => {
        const res = await axios.post("/login",{
             email: input.name,
             password: input.password,
        })

        if(res.data.token){
            setMessage("Login Successfull")
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                name='name'
                placeholder='Name'
                type='text'
                value={input.name}
                onChange={handleInput}
                required            />
            <input
                name='password'
                placeholder='Password'
                type='password'
                value={input.password}
                onChange={handleInput}
                required
                />
            <button type='submit'>Submit</button>
            <p>{message}</p>
        </form>
    </div>
  )
}

export default LoginForm