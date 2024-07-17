import React from "react";
import { CgMoreVertical } from "react-icons/cg";
import worder from "../../../assets/Contact/person.svg";
import { HiOutlineInbox } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import LoadingSpin from "react-loading-spin";
import { BiSolidError } from "react-icons/bi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import ClientNotification from "./ClientNotification";
import { Scrollbars } from "react-custom-scrollbars";

function ProfileClient({ image }) {
  const baseUrl = "http://127.0.0.1:8000/";
  const token = localStorage.getItem("authToken");
  //const Cordonates =  JSON.parse(localStorage.getItem("cordonateClient"))

//  console.log(Cordonates)
  const decodedToken = jwtDecode(token);
  const user_id = decodedToken.id;


  const fetchClientsNotifications = async () => {
      const res = await fetch(`${baseUrl}notifications/${user_id}/`)
    return res.json();
  };

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["notificationc"],
    //onSuccess: (data) => setData(data),
    queryFn: fetchClientsNotifications,
    refetchInterval: 1000,
  });



    const handelDeleteNotification = async (id) => {
      // const newData = data.filter((noti) => noti.id !== id);
      // console.log(newData);
      // setData(newData);
      const object = {
        notification_id: id,
        action: "delete",
      };
      console.log(object);
      console.log(JSON.stringify(object));

      try {
        const response = await fetch(`${baseUrl}notifications/${user_id}/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(object),
        });

        if (!response.ok) {
          console.error("Internal Server Error");
          Swal.fire({
            title: "Oops Something Went Wrong",
            text: "Internal Server Error. Please try again later.",
            icon: "error",
            toast: true,
            timer: 4000,
            position: "top-right",
            timerProgressBar: false,
            showConfirmButton: false,
            showCancelButton: true,
          });
          return;
        }

        console.log("Notifcation Deleted");
      } catch (error) {
        console.error(error);
      }
    };

 
    console.log(data)
  return (
    <div className="w-1/5 border    sticky right-0 top-0 flex flex-col items-center h-screen">
      <div className="flex gap-2 my-5  items-center">
        <h2 className="text-blueColor text-xl font-semibold whitespace-nowrap">
          Your Profile{" "}
        </h2>
        <CgMoreVertical />
      </div>
      <div className="">
        <img
          src={worder} // {Cordonates.image}
          className="w-28 h-28 rounded-full border-[12px]   p-2  border-left-grayColer border-r-blueColor   border-t-blueColor"
          alt=""
        />
      </div>
      <h1 className="text-center font-semibold text-xl mt-3">
        <p className="-mb-1">  Good </p>
        Morning <br /> 
         {/* {Cordonates.first_name} */} Client Name
      </h1>
      <p className="font-mainfont text-gray-500 mt-3 text-center font-semibold">
        Continue Your <br /> Jurney and <br /> Achieve Your <br /> Target
      </p>

      {isSuccess && (
        <Sheet>
          <SheetTrigger>
            <div className="flex justify-between mt-4">
              <IoNotificationsOutline className="text-4xl rounded-full   hover:bg-gray-300 mx-2 border-[2px]   p-1" />
              <Link to="inboxw">
                {" "}
                <HiOutlineInbox className="text-4xl rounded-full cursor-pointer hover:bg-gray-300  mx-2 border-[2px]   p-1 " />
              </Link>
            </div>
          </SheetTrigger>
          <SheetContent side="right">
            <Scrollbars
              style={{ width: "100%", height: "100%" }}
              className="ml-5 "
            >
              <SheetHeader>
                <SheetTitle> Notifications</SheetTitle>
                <SheetDescription>
                  {data?.length > 0 &&
                    data.map((el, index) => {
                      return (
                        <ClientNotification
                          handelDeleteNotification={handelDeleteNotification}
                          key={index}
                          status = {el.status}
                          time={el.notification.formatted_created_at}
                          id={el.notification.id} // notification id
                          content={el.notification.content}
                          // image={el.image}
                        />
                      );
                    })}
                </SheetDescription>
              </SheetHeader>
            </Scrollbars>
          </SheetContent>
        </Sheet>
      )}
      {isLoading && (
        <div className="flex w-full flex-col-reverse mt-10 justify-center items-center">
          <div className="text-blueColor text-center text-2xl mx-2">
            {" "}
            Loading <br /> Notifications ...{" "}
          </div>
          <LoadingSpin
            className="mx-2 mt-2"
            duration="2s"
            width="20px"
            timingFunction="ease-in-out"
            direction="alternate"
            size="90px"
            primaryColor="orange"
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
    </div>
  );
}

export default ProfileClient;
