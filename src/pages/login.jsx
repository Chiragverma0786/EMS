import React, { useState } from 'react'

const Login = ({handleEvent}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const formSubmit = (e)=>{
    if(email == '' && password == ''){
      alert("Please fill the inputs")
    }
    else{
    e.preventDefault()
    handleEvent(email, password)
    setEmail('')
    setPassword('')
    }
  }
  
  return (
    <>
    <div className="login-body">
        <div className="login-container">
                <h1>Login Here</h1>
                <input value={email} onChange={(e) =>{
                  setEmail(e.target.value)
                }} type="email" placeholder='Enter Your E-Mail' />

                <input value={password} onChange={(e)=>{
                  setPassword(e.target.value)
                }} type="password" placeholder='Enter Your Password'/>

                <button onClick={formSubmit}>Login</button>
            
        </div>
    </div>

    </>
  )
}

export default Login