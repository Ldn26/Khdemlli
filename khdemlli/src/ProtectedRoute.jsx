import React from 'react'
import { useContext } from 'react'
import { userContext } from './contexts/AuthContext'
import { Navigate } from 'react-router-dom'
function ProtectedRoute({children}) {
  
   const {user}  = useContext(userContext)
  if(user === null ){
   return <Navigate to= '/logim'/>
  }
  return children
}

export default ProtectedRoute