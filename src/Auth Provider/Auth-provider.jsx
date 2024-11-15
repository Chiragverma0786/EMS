import React, { createContext, useContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../Local Storage/localstorage'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)
    
    useEffect(() => {
        const {employees,admin} = getLocalStorage()
        setUserData({employees,admin})
    }, [])
    

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider