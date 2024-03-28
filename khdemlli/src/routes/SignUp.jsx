import React from 'react'
import Head from '../components/SignUp/Head'
import Tab from '../components/SignUp/Tab'
import Foot from '../components/SignUp/Foot'
function SignUp() {
  return (
    <div>
      <Head content={"Login"} redirection={"/login"} question={"Already A Member"}/>
      <Tab/>
   <Foot/>
    </div>
  )
}

export default SignUp