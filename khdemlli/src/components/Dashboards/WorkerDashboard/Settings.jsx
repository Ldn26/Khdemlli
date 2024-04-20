import React, { useEffect } from "react";
import { TiCamera } from "react-icons/ti";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "react-loading-spin";
import { BiSolidError } from "react-icons/bi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Portfolio from "./ProfileEdit/Portfolio";


function Settings() {
  const fetchWorkers = async () => {
    const res = await fetch(
      "https://65fd9c189fc4425c65325ced.mockapi.io/khdemli/workers/1"
    );
    return res.json();
  };


  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["work"],
    queryFn: fetchWorkers,
  });



  const sendData = async (data) =>{
      const obj = {
        firstname: Updatedfirstname,
        lastname: UpdatedLastname,
        email: Updatedmail,
        phone: UpdatedPhone,
        cardId: UpdatedId,
        ProfileImage: Profileeditedimage,
        city: UpdatedCity,
        experience: UpdatedExp,
        description: UpdatedDesc,
        prevWorks: Prvworkes,
      };
      console.log(obj)
      console.log(newPevWork)
     try {
       await fetch("https://dummyjson.com/auth/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(obj),
       })
         .then((res) => res.json())
         .then((data) => {
           if (data?.message) {
            //  alert("error");
            console.log("Erroor")
             return;
           }
           /// the true
           console.log("success fitching data ");
         });
     } catch (error) {
       console.log(error);
     }
    }
  



  // or send the whole path container in  Profileeditedimage 
  const [Updatedfirstname, SetUpdatedFirstName] = useState("");
  const [UpdatedLastname, SetUpdatedLastname] = useState("");
  const [Updatedmail, SetUpdatedmail] = useState("");
  const [UpdatedCity, SetUpdatedCity] = useState("");
  const [UpdatedPhone, SetUpdatedPone] = useState("");
  const [UpdatedService, SetUpdatedService] = useState("");
  const [UpdatedExp, SetUpdatedExp] = useState("");
  const [UpdatedDesc, SetUpdatedDesc] = useState("");
  const [UpdatedId, SetUpdatedId] = useState(""); 
  const [Profileeditedimage ,SetProfileedetedimage] = useState(null)
  const [Prvworkes, SetPrvWorkes] = useState([
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ]);
  const [newPevWork,SetnewPrvWork] = useState("")  // the whole  path 
// initialization 
  useEffect(() => {
    if (data) {
      SetUpdatedDesc(data.experience);
      SetUpdatedmail(data.image);
      SetUpdatedPone(data.id);
      SetUpdatedService(data.Job);
      SetUpdatedId(data.id);
      SetUpdatedExp(data.experience);
      SetUpdatedFirstName(data.Full_Name);
      SetUpdatedLastname(data.Full_Name);
      SetUpdatedCity(data.City);
      SetProfileedetedimage(data.image);
    }
  }, [data]);

const  handleChangeProfileimage = (e) =>{
 const  selectedimage = e.target.files[0]
  const reader = new FileReader()
  reader.onload = ()=>{
    SetProfileedetedimage(reader.result)
  }
  reader.readAsDataURL(selectedimage)
  //console.log(selectedimage) // its an object and i will send it as object as well contain only the nessecry metadata
//  console.log(Profileeditedimage) // the whole svg path 
} 
const handelChangePrvWorks = (e)=>{
  const selectedPrvJob = e.target.files[0]
  const reader = new FileReader ()
  reader.onload = ()=>{
    SetnewPrvWork(reader.result)
    SetPrvWorkes([... Prvworkes,{ original: reader.result , thumbnail:reader.result}]); 
  }
  //console.log(newPevWork) // the whole path 
 reader.readAsDataURL(selectedPrvJob) // console.log(selectedPrvJob) // an object  contain infos about the image  

}



  return (
    <>
      {isSuccess && (
        <div className=" w-3/5 flex  justify-center  overflow-hidden flex-col">
          <h1 className="text-center font-inter py-2 text-blueColor ">
            Setting
          </h1>
          <hr className="w-full h-[1px] justify-center items-center mb-4 bg-blueColor mx-auto "></hr>

          <div className="flex ml-10 items-center">
            <div className=" ">
              <img
                src={data.image}
                alt=""
                className="w-24 h-24 rounded-full  r border-4 border-blueColor"
              />
            </div>
            <div className="flex flex-col ml-2">
              <h1 className="font-semibold text-blueColor font-mainfont ">
                Mr : {data?.Full_Name}
              </h1>
              <h1 className="font-semibold text-blueColor font-mainfont text-xs">
                Your Acount is ready
              </h1>
            </div>
          </div>
          <Dialog className="w-[1200px]  bg-blueColor ">
            <DialogTrigger className="text-sm flex mt-4 bg-orangeCol ml-10  h-7 whitespace-nowrap  rounded bg-orangeColor w-fit text-blueColor hover:bg-blueColor duration-500 hover:text-orangeColor font-semibold px-3 py-1 ">
              Edit Profile
            </DialogTrigger>
            <DialogContent className=" p-10  max-w-[860px] h-[600px]">
              <DialogHeader>
                <DialogTitle className="text-grayColor font-semibold text-xl font-mainfont ">
                  Edit Profile
                </DialogTitle>
                <DialogDescription className="p-4 relative">
                  <button
                    onClick={sendData}
                    className="text-sm flex   absolute right-0 top-[50px] bg-orangeCol ml-10  h-7 whitespace-nowrap  rounded  w-fit text-white bg-blueColor hover:bg-blueColor duration-500 hover:text-orangeColor font-semibold px-3 py-1 "
                  >
                    Save Changes
                  </button>
                  <div className="flex ml-10 items-center">
                    <div className=" relative">
                      <img
                        src={Profileeditedimage}
                        alt="Profilw"
                        className="w-24 h-24 rounded-full hover:border-orangeColor  border-4 border-blueColor"
                      />
                      <button className="absolute top-[70px]  left-[60px]  hover:bg-orangeColor text-white bg-blueColor text-xl p-1 rounded-full">
                        <input
                          type="file"
                          id="choose"
                          accept="image/*"
                          onChange={handleChangeProfileimage}
                          className="hidden"
                        />

                        <label htmlFor="choose">
                          <TiCamera />
                        </label>
                      </button>
                    </div>
                    <div className="flex flex-col ml-2">
                      <h1 className="font-semibold text-blueColor mb-2 font-mainfont ">
                        Mr : {Updatedfirstname}
                      </h1>
                      <h1 className="font-semibold text-blueColor font-mainfont text-xs">
                        Your Acount is ready
                      </h1>
                    </div>
                  </div>
                  <div className={` flex   flex-col }`}>
                    <div className="flex my-4 justify-between">
                      <div className="flex flex-col justify-center mr-2">
                        <label
                          htmlFor="first"
                          className="text-lg  text-blueColor font-semibold whitespace-nowrap mb-1"
                        >
                          {" "}
                          First name
                        </label>
                        <input
                          id="first"
                          type="text"
                          onChange={(e) => {
                            SetUpdatedFirstName(e.target.value);
                          }}
                          value={Updatedfirstname}
                          placeholder="first name"
                          className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]   hover:border-2  hover:border-blueColor 
                           w-[150px] p-1 text-black  border  shadow-sm outline-none -blueColor font-mainfont duration-400"
                        />
                      </div>{" "}
                      <div className="flex flex-col justify-center mr-2">
                        <label
                          htmlFor="last"
                          className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
                        >
                          {" "}
                          Surname
                        </label>{" "}
                        <input
                          id="last"
                          type="text"
                          value={UpdatedLastname}
                          onChange={(e) => {
                            SetUpdatedLastname(e.target.value);
                          }}
                          placeholder="last name"
                          className="placeholder:text-gray-400 rounded  text-black   font-semibold hover:shadow-lg text-[16px]  hover:border-2  hover:border-blueColor 
               w-[150px] p-1   border  shadow-sm outline-none -blueColor font-mainfont duration-400"
                        />
                      </div>{" "}
                      <div className="flex flex-col justify-center ">
                        <label
                          htmlFor="mail"
                          className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
                        >
                          {" "}
                          Email
                        </label>
                        <input
                          id="mail"
                          type="text"
                          placeholder="Email"
                          value={Updatedmail}
                          onChange={(e) => {
                            SetUpdatedmail(e.target.value);
                          }}
                          className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px] text-black  hover:border-2  hover:border-grayColorx 
                p-1 w-[350px]  border  shadow-sm outline-none -blueColor font-mainfont duration-400"
                        />
                      </div>
                    </div>
                    <div className="flex  justify-between">
                      <div className="flex flex-col justify-center mr-2">
                        <label
                          htmlFor="id"
                          className="text-lg  text-blueColor font-semibold whitespace-nowrap mb-1"
                        >
                          {" "}
                          ID number
                        </label>
                        <input
                          type="text"
                          id="id"
                          value={UpdatedId}
                          onChange={(e) => {
                            SetUpdatedId(e.target.value);
                          }}
                          placeholder="Id number"
                          className="placeholder:text-gray-400 text-black rounded font-semibold hover:shadow-lg text-[16px]   hover:border-2  hover:border-blueColor 
                           w-[316px] p-1   border  shadow-sm outline-none -blueColor font-mainfont duration-400"
                        />
                      </div>{" "}
                      <div className="flex flex-col justify-center ">
                        <label
                          htmlFor="city"
                          className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
                        >
                          {" "}
                          City
                        </label>
                        <input
                          id="city"
                          type="text"
                          onChange={(e) => {
                            SetUpdatedCity(e.target.value);
                          }}
                          value={UpdatedCity}
                          placeholder="Edit ur City "
                          className="placeholder:text-gray-400 rounded text-black font-semibold hover:shadow-lg text-[16px]  hover:border-2  hover:border-grayColorx 
                p-1 w-[350px]  border  shadow-sm outline-none -blueColor font-mainfont duration-400"
                        />
                      </div>
                    </div>

                    <div className="flex my-4 justify-between">
                      <div className="flex flex-col justify-center mr-2">
                        <label
                          htmlFor="serv"
                          className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
                        >
                          {" "}
                          Service Type
                        </label>
                        <input
                          id="serv"
                          onChange={(e) => {
                            SetUpdatedService(e.target.value);
                          }}
                          value={UpdatedService}
                          type="text"
                          placeholder="Select a new Service"
                          className="placeholder:text-gray-400 rounded text-black font-semibold hover:shadow-lg text-[16px]   hover:border-2  hover:border-blueColor 
               w-[310px] p-1   border  shadow-sm outline-none -blueColor font-mainfont duration-400"
                        />
                      </div>{" "}
                      <div className="flex flex-col justify-center ">
                        <label
                          htmlFor="phone"
                          className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
                        >
                          {" "}
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          value={UpdatedPhone}
                          onChange={(e) => {
                            SetUpdatedPone(e.target.value);
                          }}
                          type="type"
                          placeholder="Edit ur number"
                          className="placeholder:text-gray-400 text-black rounded font-semibold hover:shadow-lg text-[16px]  hover:border-2  hover:border-grayColorx 
                p-1 w-[350px]  border  shadow-sm outline-none -blueColor font-mainfont duration-400"
                        />
                      </div>
                    </div>
                    <div className="flex my-4 justify-between items-center">
                      <div className="flex flex-col">
                        <label
                          htmlFor="desc"
                          className="text-lg  text-blueColor font-semibold whitespace-nowrap mb-1"
                        >
                          Description
                        </label>
                        <textarea
                          id="desc"
                          className="p-2 font-semibold hover:outline font-mainfont resize-none h-20"
                          value={UpdatedDesc}
                          onChange={(e) => {
                            SetUpdatedDesc(e.target.value);
                          }}
                          rows={5}
                          cols={20}
                          placeholder="Enter your text here..."
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="exp"
                          className="text-lg  text-blueColor font-semibold whitespace-nowrap mb-1"
                        >
                          Expirence
                        </label>
                        <textarea
                          id="exp"
                          value={UpdatedExp}
                          className="p-2 font-mainfont font-semibold hover:outline resize-none h-20"
                          onChange={(e) => {
                            SetUpdatedExp(e.target.value);
                          }}
                          rows={5}
                          cols={20}
                          placeholder="tell us about ur experience..."
                        />
                      </div>
                      <div className="flex flex-col rounded-xl items-center bg-blueColor ">
                        <label
                          htmlFor="prvworks"
                          className="text-white  font-mainfont font-semibold text-sm p-4 text-center"
                        >
                          Drop Your Latest Works to Upload
                        </label>
                        <input
                          type="file"
                          onChange={handelChangePrvWorks}
                          className="hidden"
                          accept="image/*"
                          id="prvworks"
                        />
                        <label
                          htmlFor="prvworks"
                          className="bg-orangeColor text-black  hover:bg-white hover:text-blueColor font-semibold rounded duration-500  mb-4 px-3 py-1"
                        >
                          Browse
                        </label>
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* the form  */}
          <hr className="mt-4" />
          <div
            className={`  container mx-auto pl-4 mt-7   shadow-orangeColor flex flex-col  }`}
          >
            {/* contact and infos */}

            {/* name amd mail section  */}
            <div className="flex mb-4 justify-between">
              <div className="flex flex-col justify-center mr-2">
                <label
                  htmlFor="first"
                  className="text-lg  text-blueColor font-semibold whitespace-nowrap mb-1"
                >
                  {" "}
                  First name
                </label>
                <input
                  id="first"
                  type="text"
                  readOnly
                  value={data.Full_Name}
                  placeholder="first name"
                  className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]   hover:border-2  hover:border-blueColor 
               w-[316px] p-1   border  shadow-sm outline-none -blueColor font-mainfont duration-400"
                />
              </div>{" "}
              <div className="flex flex-col justify-center ">
                <label
                  htmlFor="mail"
                  className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
                >
                  {" "}
                  Email
                </label>
                <input
                  id="mail"
                  type="text"
                  placeholder="Email"
                  value={data.image}
                  readOnly
                  className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]  hover:border-2  hover:border-grayColorx 
                p-1 w-[350px]  border  shadow-sm outline-none -blueColor font-mainfont duration-400"
                />
              </div>
            </div>
            {/* city  vand id section   */}
            <div className="flex  justify-between">
              <div className="flex flex-col justify-center mr-2">
                <label
                  htmlFor="id"
                  className="text-lg  text-blueColor font-semibold whitespace-nowrap mb-1"
                >
                  {" "}
                  ID number
                </label>
                <input
                  id="id"
                  readOnly
                  value={data.id}
                  type="number"
                  placeholder="Id number"
                  className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]   hover:border-2  hover:border-blueColor 
               w-[316px] p-1   border  shadow-sm outline-none -blueColor font-mainfont duration-400"
                />
              </div>{" "}
              <div className="flex flex-col justify-center ">
                <label
                  htmlFor="city"
                  className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
                >
                  {" "}
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  readOnly
                  value={data.City}
                  placeholder="Edit ur City "
                  className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]  hover:border-2  hover:border-grayColorx 
                p-1 w-[350px]  border  shadow-sm outline-none -blueColor font-mainfont duration-400"
                />
              </div>
            </div>
            {/*  job and phone Section */}
            <div className="flex my-4 justify-between">
              <div className="flex flex-col justify-center mr-2">
                <label
                  htmlFor="serv"
                  className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
                >
                  {" "}
                  Service Type
                </label>
                <input
                  id="serv"
                  readOnly
                  value={data.Job}
                  type="text"
                  placeholder="Select a new Service"
                  className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]   hover:border-2  hover:border-blueColor 
               w-[316px] p-1   border  shadow-sm outline-none -blueColor font-mainfont duration-400"
                />
              </div>{" "}
              <div className="flex flex-col justify-center ">
                <label
                  htmlFor="phone"
                  className="text-lg text-blueColor font-semibold whitespace-nowrap mb-1"
                >
                  {" "}
                  Phone Number
                </label>
                <input
                  id="phone"
                  value={data.id}
                  readOnly
                  type="text"
                  placeholder="Edit ur number"
                  className="placeholder:text-gray-400 rounded font-semibold hover:shadow-lg text-[16px]  hover:border-2  hover:border-grayColorx 
                p-1 w-[350px]  border  shadow-sm outline-none -blueColor font-mainfont duration-400"
                />
              </div>
            </div>
            {/* experience and description  section  */}
            <div className="flex my-4 justify-around items-center">
              <div className="flex flex-col">
                <label
                  htmlFor="desc"
                  className="text-lg  text-blueColor font-semibold whitespace-nowrap mb-1"
                >
                  Description
                </label>
                <textarea
                  id="desc"
                  value={data.experience}
                  readOnly
                  className="p-2 border h-20 resize-none"
                  rows={5} // Number of visible text lines
                  cols={40} // Number of visible text columns
                  placeholder="Enter your text here..."
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="exp"
                  className="text-lg  text-blueColor font-semibold whitespace-nowrap mb-1"
                >
                  Expirence
                </label>
                <textarea
                  id="exp"
                  className="p-2 border h-20 resize-none"
                  readOnly
                  value={data.experience}
                  rows={5} // Number of visible text lines
                  cols={40} // Number of visible text columns
                  placeholder="tell us about ur experience..."
                />
              </div>
            </div>
            <Portfolio images={Prvworkes} />
          </div>
        </div>
      )}
      {isError && (
        <div className="flex w-full items-center ">
          <BiSolidError className="text-red-400 text-xl mx-4" />
          <p className="text-red-400 text-lg">Opps , Error fetching data </p>
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
    </>
  );
}

export default Settings;
