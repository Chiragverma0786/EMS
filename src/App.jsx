import React, { useContext, useEffect, useState } from 'react'
import Login from './pages/login'
import AdminDash from './pages/admin-dash'
import EmpDash from './pages/emp-dash'
import { getLocalStorage, setLocalStorage } from './Local Storage/localstorage'
import { AuthContext } from './Auth Provider/Auth-provider'

const App = () => {
  const [user, setUser] = useState('')
  const authData = useContext(AuthContext)
  

  const handleEvent = (email, password)=>{
      if(email == 'admin@me.com' && password == '123'){
        setUser('admin')
      }
      else if(authData && authData.employees.find((e)=>email == e.email && password == e.password)){
        setUser('user')
      }
      else{
        alert('Wrong ID, Password')
      }
  }
  return (
    <>
    {!user ? <Login handleEvent={handleEvent} /> : ''}
    {user === 'admin' && <AdminDash />}
    {user === 'user' && <EmpDash />}
    </>
  )
}

export default App