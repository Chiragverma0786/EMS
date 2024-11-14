import React from 'react'

const Login = () => {
  return (
    <>
    <div className="login-body">
        <div className="login-container">
                <h1>Login Here</h1>
                <input type="email" placeholder='Enter Your E-Mail' />
                <input type="password" placeholder='Enter Your Password'/>
                <button>Login</button>
            
        </div>
    </div>

    </>
  )
}

export default Login