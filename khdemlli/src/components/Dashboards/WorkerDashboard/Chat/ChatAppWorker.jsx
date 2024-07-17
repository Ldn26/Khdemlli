import { React, useEffect, useState } from "react";
import Message from "./Message";
import ContactList from "./ContactListW";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "react-loading-spin";
import { BiSolidError } from "react-icons/bi";
import { Scrollbars } from "react-custom-scrollbars";
import { jwtDecode } from "jwt-decode";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import ContactListW from "./ContactListW";
// const sendData = async (data) => {
//   const obj = {
//     firstname: Updatedfirstname,
//     lastname: UpdatedLastname,
//     email: Updatedmail,
//     phone: UpdatedPhone,
//     cardId: UpdatedId,
//     ProfileImage: Profileeditedimage,
//     city: UpdatedCity,
//     experience: UpdatedExp,
//     description: UpdatedDesc,
//     prevWorks: Prvworkes,
//   };
//   console.log(obj);
//   console.log(newPevWork);
//   try {
//     await fetch("https://dummyjson.com/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(obj),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.message) {
//           //  alert("error");
//           console.log("Erroor");
//           return;
//         }
//         /// the true
//         console.log("success fitching data ");
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };

function ChatAppWorker() {
  const baseUrl = "http://127.0.0.1:8000/api"; // all the messages in  the Contact List items
  const [messages, setMessages] = useState([]); /// all the recent messages
  const token = localStorage.getItem("authToken");
  const decodedToken = jwtDecode(token);
  const user_id = decodedToken.id; // "from the token"
  console.log(user_id);
  const fetchChat = async () => {
    try {
      const res = await fetch(baseUrl + "/my-messages/" + user_id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return res.json();
    } catch (error) {
      console.error("Error fetching chat:", error);
      throw error;
    }
  };
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["chat"],
    queryFn: fetchChat,
    refetchInterval: 20000,
  });

  useEffect(() => {
    if (isSuccess && data) {
      // Check if the data is different from the current state
      if (JSON.stringify(messages) !== JSON.stringify(data)) {
        setMessages(data);
      }
    }
  }, [data, isSuccess, messages]);

  useEffect(() => {
    setMessages(data);
  }, [data, isSuccess]);
  console.log(messages);
  return (
    <>
      {isSuccess && (
        <div className="flex h-screen justify-between w-3/5">
          <div className="w-4/12">
            <ContactListW user_id={user_id} messages={messages} />
          </div>

          <div className="w-8/12 items-center justify-center flex flex-col ">
            <BiSolidMessageSquareAdd className="text-[50px] mb-2 text-blueColor  " />
            <h1 className="font-bold font-mainfont text-blueColor   text-xl mb-2">
              Your Messages{" "}
            </h1>
            <p className=" font-mainfont text-blueColor   text-sm  loading mb-4">
              Send messages and photos to a client or worker{" "}
            </p>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="flex w-full flex-col-reverse justify-center items-center">
          <div className="text-blueColor text-2xl mx-2"> Loading data ... </div>
          <LoadingSpin
            className="mx-2 mt-2"
            duration="2s"
            width="20px"
            timingFunction="ease-in-out"
            direction="alternate"
            size="100px"
            primaryColor="blue"
            secondaryColor="#7E7E7E"
            numberOfRotationsInAnimation={2}
          />
        </div>
      )}

      {isError && (
        <div className="flex w-full items-center ">
          <BiSolidError className="text-red-400 text-xl mx-4" />
          <p className="text-red-400 text-lg">Opps , Error fetching data </p>
        </div>
      )}
    </>
  );
}

export default ChatAppWorker;
