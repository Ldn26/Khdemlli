import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import Button from "../../../Button"
import SearchfromList from './SearchfromList';
 import { LuArrowRightSquare } from "react-icons/lu";
 import { Scrollbars } from "react-custom-scrollbars";
import ContactItemW from './ContactItemW';

function ContactListW({messages,user_id}) {

 console.log(messages)
 console.log(user_id)
  return (
    <>
     

          <div className="  duration-500 bo  p-2  overflow-x-hidden h-screen   bg-white text-white">
            <SearchfromList />
            <div className="flex justify-center flex-col ">
              {messages &&  messages.length > 0 &&
                messages.map((el, index) => {
                  return (
                    <ContactItemW
                      ////   sender_name={el.sender_profil.full_name}
                      //   sender_avatar={el.sender_profil.image}
                      //     reciver_avatar={el.reciver_profile.image}
                      //reciver_name={el.reciver_profile.full_name}
                      key={index}
                      mess={el.messages}
                      user_id = {user_id}
                      sender_id={el.sender}
                      receiver = {el.receiver}

                    />
                  );
                })}
            </div>
          </div>
     
    

      {/* {isError && <>handling error</>} */}
    </>
  );
}

export default ContactListW