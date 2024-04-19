import React from "react";
import { CgMoreVertical } from "react-icons/cg";
import worder from "../../../assets/Contact/person.svg";
import { HiOutlineInbox } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import LoadingSpin from "react-loading-spin";
import { BiSolidError } from "react-icons/bi";
import WorkerNotification from "./WorkerNotification";
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
import { useState } from "react";


function ProfileWorker({ image }) {
  const [datas,setData] = useState([])
  const fetchWorkersNotifications = async () => {
    const res = await fetch(
      "https://65fd9c189fc4425c65325ced.mockapi.io/khdemli/workers/ "
    );
    console.log(data);
    return res.json();
  };

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["notificationw"],
    //onSuccess: (data) => setData(data),
    queryFn: fetchWorkersNotifications,
  });

  const [ShowNotification, setShowNotification] = useState(false);



  const HandeleDeleteRequest =async (id)=>{
    const newData = data.filter((noti) => noti.id !== id);
   // console.log(newData)
  //setData(newData)
  //  try {
  //    const res = await fetch(
  //      `https://65fd9c189fc4425c65325ced.mockapi.io/khdemli/feed_back/${id}`,
  //      {
  //        method: "DELETE",
  //      }
  //    );
  //  } catch (error) {
  //    console.error("Error deleting feedback:", error);
  //  }





  } 
  return (
    <div className="w-1/5 border  sticky right-0 top-0 flex flex-col items-center h-screen">
      <div className="flex gap-2 my-5  items-center">
        <h2 className="text-blueColor text-xl font-semibold whitespace-nowrap">
          Your Profile{" "}
        </h2>
        <CgMoreVertical />
      </div>
      <div className="">
        <img
          src={worder}
          className="w-28 h-28 rounded-full border-[12px]   p-2  border-left-grayColer border-r-blueColor   border-t-blueColor"
          alt=""
        />
      </div>
      <h1 className="text-center font-semibold text-xl mt-4">
        Good <br />
        Morning <br /> mohamed
      </h1>
      <p className="font-mainfont text-gray-500 text-center font-semibold">
        Continue Your <br /> Jurney and <br /> Achieve Your <br /> Target
      </p>

      {isSuccess && (
        <Sheet className="o">
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
            <SheetHeader>
              <SheetTitle> Notifications</SheetTitle>
              <SheetDescription>
                {data?.length > 0 &&
                  data.map((el,index) => {
                    return (
                      <WorkerNotification
                        // onDelete={(id) => {
                        //   HandeleDeleteRequest(el.id);
                        // }}
                        key={el.id}
                        name={el.Full_Name}    
                        image={el.image}
                        price={el.id}
                        days={el.id}
                        id={el.id}
                        // setData={setData}
                      />
                    );
                  })}
              </SheetDescription>
            </SheetHeader>
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

export default ProfileWorker;
