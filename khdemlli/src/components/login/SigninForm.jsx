import React from 'react'
import { useContext } from 'react';
import { userContext } from '../../contexts/AuthContext';

function SigninForm() {
const {setUser} = useContext(userContext)
  /// fetch and send  the data to the back_end   when we submit the form 
  // need to use the useForm to handle the states 
// if it's ok we navigate to the main     <Navigate  to= " /main " / >
  // setUser(data)

  return (
    <form action="">
      <label htmlFor="name">name</label> <input type="text" id="name" />
      <label htmlFor="last_name ">last name </label> <input type="text" id='last_name'/>
    </form>
  );
}

export default SigninForm