import React from 'react'
import io from "socket.io-client"
const socket = io.connect("backend url")   




function SocketC() {

const SendMesage =()=>{

}
  return (
    <div className='w-3/5'>



        <input type="text" placeholder='ssend Mesage' />
    </div>
  )
}

export default SocketC