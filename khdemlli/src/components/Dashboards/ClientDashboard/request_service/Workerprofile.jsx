import React from "react";
import { useQuery } from "@tanstack/react-query";
import fcb from "../../../../assets/aboutusicons/Fb.png";
import insta from "../../../../assets/aboutusicons/Insta.png";
import twitter from "../../../../assets/aboutusicons/Twiter.png";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import LoadingSpin from "react-loading-spin";
import { useState } from "react";
import Portfolio from "../../WorkerDashboard/ProfileEdit/Portfolio";
import { useParams } from "react-router-dom";
import image from "../../../../assets/landing/1.png"
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
function Workerprofile() {





   const token = localStorage.getItem("authToken");
   const decodedToken = jwtDecode(token);
   const user_id = decodedToken.id;
 const id = useParams()
 console.log(id.id)
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
  // const fetchNotification = async () => {
  //   const res = await fetch(
  //     "https://6621946927fcd16fa6c762a9.mockapi.io/profileWorker/workerss"
  //   );
  //   return res.json();
  // };

  
    const fetchProfile= async () => {
      const res = await fetch("http://127.0.0.1:8000/api/profile/"+id.id);
      return res.json();
    };
    // const { data, isError, isLoading, isSuccess } = useQuery({
    //   queryKey: ["notificationw"],
    //   queryFn: fetchNotification,
    // });

     const { data, isError, isLoading, isSuccess } = useQuery({
       queryKey: ["profile"],
       queryFn: fetchProfile,
     });
  console.log(data)
// send a requset to an order 

const onSubmit = async (data) => {
  const object = {
    wilaya: "default",
    type: "default",
  };
  console.log(JSON.stringify(object));
  console.log("user id");
  console.log(user_id);
  

  try {
    const response = await fetch(
      `http://127.0.0.1:8000/order/${user_id}/${id.id}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      }
    );

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

    console.log("first");
    Swal.fire({
      title: "Your Request Has Been Sent Successfully",
      icon: "success",
      toast: true,
      timer: 4000,
      position: "top-right",
      timerProgressBar: false,
      showConfirmButton: false,
      showCancelButton: true,
    });
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
      {isSuccess && (
        <div className="w-full">
          {/*  //// main div */}
          <div className="flex mt-10">
            <img
              src={image} //data.image
              className=" w-[350px] h-[350px] "
              alt="hola"
            />

            <div className="w-[350px] h-[350px]  flex flex-col ml-4 ">
              <h1 className="  text-secendFont  text-[14px] w-[250px]   text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl mb-2 ">
                {data.first_name} is a Professional Engineer <br /> since{" "}
                {data.surname}
              </h1>
              <p className="text-grayColor  text-[12px]">
                Un paragraphe est une section de texte en prose vouée au
                développement d'un point particulier <br /> souvent au moyen de
                plusieurs phrases, dans la continuité du précédent et du
                suivant.
              </p>
              <hr className=" my-3 w-full " />

              <span className="flex flex-row items-center mb-1 ">
                <h1 className="font-bold text-[#1C2752] text-sm">Phone : </h1>
                <p className="pl-2 text-[#7E7E7E]">
                  {data.Numero}
                </p>
              </span>
              <span className="flex flex-row items-center">
                <h1 className="font-bold text-[#1C2752] text-sm">Email : </h1>
            
                <p className="pl-2 text-[#7E7E7E]">
                {/* data.mail */}
                  {/* {data[0].email || */}
                   {"youcefldn@gail.com "}
                </p>
              </span>

              <div className="flex mt-4 space-x-3  ">
                <button
                  className="hover:scale-125 hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300 "
                >
                  <img src={insta} alt="" />
                </button>
                <button className="hover:scale-125 hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300">
                  <img src={fcb} alt="" />
                </button>
                <button className="hover:scale-125 hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300">
                  <img src={twitter} alt="" />
                </button>
              </div>

              <div className="flex my-3">
                <IoIosStar className="text-2xl  text-yellow-400  " />
                <IoIosStar className="text-2xl  text-yellow-400  " />
                <IoIosStar className="text-2xl  text-yellow-400  " />
                <IoIosStarHalf className="text-2xl  text-yellow-400  " />
              </div>
              <button onClick={onSubmit} className="rounded-md font-bold hover:bg-blueColor hover:text-white text-lg w-[200px] mt-4 bg-orangeColor  text-blueColor py-1 hover:scale-105 transition-all ">
                {"Request Service"}
              </button>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-secendFont  mb-3  text-blueColor  whitespace-nowrap font-bold tracking-wide text-2xl  ">
              Qualification & Experience
            </h1>
            <p className="text-grayColor  mt-1 w-[700px] text-md">
              Efficiently myocardinate market driven innovation open source
              alignments dramatically engaged high pay off infomediaries rather
              than client centric imperatives. Efficiently initiates world class
              applications after client centric infomediaries phosfluorescently
              expedite impactful supply chains via focused results holistically
              generated open source applications through bleeding edges sources
              compellingly supply just in time to catalysts for change through
              top-line potentialities.
            {/* //  data.exp */}
            </p>

            <div className=" mt-4 ml-3  text-grayColor    text-md">
              <ol className=" custom-ol list-decimal ">
                <li className="mb-2">Listen to what they say about you</li>
                <li className="mb-2"> Randomised words which.</li>
                <li className="">Internet tend to repeat predefined chunks</li>
              </ol>
            </div>
            <div className="my-6 mb-10  flex flex-col ">
              <h1 className="justify center mb-7 items-center text-secendFont   text-blueColor  whitespace-nowrap font-bold tracking-wide text-2xl  ">
                Latest Workes Pictures
              </h1>
              <div className="flex items-center mb-14 justify-center ">
                <Portfolio images={Prvworkes}  //{data.profile.prvwork}
                 />

              </div>
            </div>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="flex  justify-center items-center h-screen">
          <div className="text-orangeColor mx-2"> Loading data ... </div>
          <LoadingSpin
            className="mx-2"
            duration="2s"
            width="10px"
            timingFunction="ease-in-out"
            direction="alternate"
            size="50px"
            primaryColor="orange"
            secondaryColor="#7E7E7E"
            numberOfRotationsInAnimation={2}
          />
        </div>
      )}

      {isError && (
        <div className="flex items-center ">
          <BiSolidError className="text-red-400 text-xl mx-4" />
          <p className="text-red-400 text-lg">Opps , Error fetching data </p>
        </div>
      )}
    </div>
  );
}

export default Workerprofile;
