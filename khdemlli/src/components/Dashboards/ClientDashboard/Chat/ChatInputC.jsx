import {React,useState} from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import Swal from "sweetalert2";



function ChatInputC(user_id ,sender_id,token) {
  let [newMessage, setnewMessage] = useState({ message: "" });
  console.log("new Messages is ");
  console.log(newMessage.message);

  //  const sendData = () =>{
  //   const FormaData = new FormData()
  //   FormaData.append("user",user_id)
  //   FormaData.append("sender",sender_id)
  //   FormaData.append("message", messageInp);
  //   FormaData.append("is_read", false);
  //  }
  const handleChange = (event) => {
    setnewMessage({
      ...newMessage,
      [event.target.name]: event.target.value,
    });
  };

  // const sendData = async (data) => {
  //   const obj = {
  //     user: user_id,
  //     sender: sender_id,
  //     message : messageInp.message,
  //     is_read : false
  //   };
  // console.log("the  Object that i send to the back end  is ")
  //   console.log(obj);

  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/api/send_message/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`
  //       },
  //       body: JSON.stringify(obj),
  //     });
  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       console.error(errorData.message);
  //       Swal.fire({
  //         title: "OOpps Somthing Wrong",
  //         icon: "error",
  //         toast: true,
  //         timer: 4000,
  //         position: "top-right",
  //         timerProgressBar: false,
  //         showConfirmButton: false,
  //         showCancelButton: true,
  //       });
  //       return;
  //     }
  //     const responseData = await response.json();
  //     setMessageInp({...messageInp ,message : ""})
  //     Swal.fire({
  //       title: "Message Send Successfully",
  //       icon: "success",
  //       toast: true,
  //       timer: 4000,
  //       position: "top-right",
  //       timerProgressBar: false,
  //       showConfirmButton: false,
  //       showCancelButton: true,
  //     });

  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div
      className="flex z-4 s mx-auto  
     bottom-0 z-99 bg-white w-full h-12 border-t justify-between  px-4 py-2 mt-10"
    >
      <input
        type="text"
        value={newMessage.message}
        name="message"
        onChange={handleChange}
        placeholder="Write a message  "
        className="placeholder:text-grayColor   font-semibold  text-sm   
               w-[650px] p-3   shadow-sm outline-none -blueColor font-mainfont duration-200"
      />
      <button
        className="flex items-center  px-7 rounded-xl text-sm  text-white  font-medium  hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105 bg-blueColor  "
        //      onClick={sendData}
      >
        <div className="text-sm ">Send</div>
        <RiSendPlaneFill className="text-[17px] ml-2" />
      </button>
    </div>
  );
}

export default ChatInputC