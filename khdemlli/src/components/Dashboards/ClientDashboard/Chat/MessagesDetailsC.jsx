import { React, useEffect, useState } from "react";
import Message from "./Message";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "react-loading-spin";
import { BiSolidError } from "react-icons/bi";
import { Scrollbars } from "react-custom-scrollbars";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import casq from "../../../../assets/id/casq.svg";
import ContactListC from "./ContactListC";
import ChatInputC from "./ChatInputC";

function MessagesDetailsC() {
  const baseUrl = "http://127.0.0.1:8000/api"; // all the messages in  the Contact List items
  const token = localStorage.getItem("authToken");
  const decodedToken = jwtDecode(token);
  console.log(token);
  const user_id = decodedToken.id; // "from the token"
  console.log("user id  is " + user_id);
  const id = useParams();
  console.log(id.id);
  // fetch the  Private massages
  const [prvmessages, setPrvMessages] = useState(null);
  const fetchPrivetMessages = async () => {
    const res = await fetch(
      baseUrl + "/get_messages/" + user_id + "/" + id.id,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.json();
  };
  const {
    data: Prvmesages,
    isError: isErrorPrv,
    isLoading: isLoadingPrv,
    isSuccess: isSuccessPrv,
  } = useQuery({
    queryKey: ["chat"],
    queryFn: fetchPrivetMessages,
    refetchInterval: 20000,
  });

  useEffect(() => {
    if (isSuccessPrv && Prvmesages) {
      setPrvMessages(Prvmesages);
    }
  }, [isSuccessPrv, Prvmesages]);
  // console.log("Privete Messages : ");
  // console.log(prvmessages);
  //  Fetch All the messages of Contact List
  const [RecentMessages, SetRecentMessages] = useState();
  const fetchContactList = async () => {
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
  const {
    data: LatestMessages,
    isError: isLatestMessagesError,
    isLoading: isLoadingList,
    isSuccess: isSuccessList,
  } = useQuery({
    queryKey: ["latest"],
    queryFn: fetchContactList,
    refetchInterval: 20000,
  });

  useEffect(() => {
    SetRecentMessages(LatestMessages);
  }, [LatestMessages, isSuccessList]);
  // console.log("Latest messages ");
  // console.log(LatestMessages);
  // console.log(RecentMessages);

  return (
    <div className="w-3/5 border h-screen flex  justify-between ">
      {/* Contact List items  */}
      <div className="w-4/12 h-screen border">
        {isSuccessList && (
          <Scrollbars style={{ width: "100%", height: "100%" }}>
            <ContactListC user_id={user_id} messages={LatestMessages} />
          </Scrollbars>
        )}
        {isLoadingList && (
          <div className="flex w-full flex-col-reverse justify-center items-center">
            <div className="text-blueColor text-2xl mx-2">
              {" "}
              Loading data ...{" "}
            </div>
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
        {isLatestMessagesError && (
          <div className="flex w-full items-center ">
            <BiSolidError className="text-red-400 text-xl mx-4" />
            <p className="text-red-400 text-lg">Opps , Error fetching data </p>
          </div>
        )}
      </div>
      {/* messages private  */}
      <div className=" flex w-8/12   items-center ">
        {isSuccessPrv && (
          <Scrollbars style={{ width: "100%", height: "100%" }}>
            <div className="container  relative  h-screen overflw-y-scroll  mx-auto">
              <div className="bg-white z-40 sticky top-0">
                <div className="items-center px-2 justify-ce flex bg-gray-50 rounded ">
                  <img
                    src={casq} // el.reciever_profile.image
                    className="w-[25px] h-[25px] rounded-full"
                    alt=""
                  />
                  <h1 className="text-blueColor text-center p-2 font-mainfont  font-semibold">
                    {/* {data.recievername} */}
                    Laidani Youcef
                  </h1>
                </div>
              </div>
              <div>
                {prvmessages?.length > 0 &&
                  prvmessages.reverse().map((el, index) => {
                    return (
                      <Message
                        message={el.messages}
                        user_id={user_id}
                        //   recievername={el.sender_profile.name}
                        reciver={el.receiver}
                        sender={el.sender}
                        //  time={el.time}
                        key={index}
                      />
                    );
                  })}
              </div>
            
                <ChatInputC user_id={user_id} token={token} sender_id={id.id} />
         
            </div>
          </Scrollbars>
        )}
        {isErrorPrv && (
          <div className="flex w-full items-center ">
            <BiSolidError className="text-red-400 text-xl mx-4" />
            <p className="text-red-400 text-lg">Opps , Error fetching data </p>
          </div>
        )}
        {isLoadingPrv && (
          <div className="flex w-full flex-col-reverse justify-center items-center">
            <div className="text-blueColor text-2xl mx-2">
              {" "}
              Loading data ...{" "}
            </div>
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
      </div>
    </div>
  );
}

export default MessagesDetailsC;
