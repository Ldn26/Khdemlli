import React from 'react'
import { useQuery } from '@tanstack/react-query';
import Banner from '../components/Banner';
import Header from '../components/Landing/Header';
import Button from '../components/Button';
import fcb from '../assets/aboutusicons/Fb.png';
import insta from '../assets/aboutusicons/Insta.png';
import twitter from '../assets/aboutusicons/Twiter.png';
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import Foot from '../components/SignUp/Foot'
import LoadingSpin from "react-loading-spin";
import { useState } from 'react';
import Portfolio from '../components/Dashboards/WorkerDashboard/ProfileEdit/Portfolio';

function Workerprofile() {
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
  const fetchNotification = async () => {
    const res = await fetch(
      "https://6621946927fcd16fa6c762a9.mockapi.io/profileWorker/workerss"
    );
    return res.json();
  };

  const {data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["notificationw"],
    queryFn: fetchNotification,
  });
  console.log(data)
  return (
    <div>
      {isSuccess && (
        <div>
          <Header />
          <Banner content={data[0].name} className='-mt-4' />
          <div className="ml-7">
            <div className=" items-center mt-20 flex   flex-wrap sm:flex-no-wrap justify-center ">
              <div className="    ">
                <img
                  src={data[0].avatar}
                  className="w-[300px]  h-[300px] md:h-[450px] md:w-[450px] "
                  alt="hola"
                />
              </div>

              <div className="  md:ml-10 ">
                <h1 className="  justify center items-center text-secendFont pt-5  pl-5 text-[10px] md:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
                  {data[0].name} is a Professional Engineer <br /> since{" "}
                  {data[0].date}
                </h1>

                <div className="flex  flex-col md:p-5 md:items-start md:justify-start justify-center items-center  p-3 ">
                  <p className="text-grayColor   w00px] text-md">
                    Un paragraphe est une section de texte en prose vouée au
                    développement d'un point particulier <br /> souvent au moyen
                    de plusieurs phrases, dans la continuité du précédent et du
                    suivant.
                  </p>
                </div>
                <hr className=" mb-3 w-3/4 ml-4" />
                <div className="space-y-3 ">
                  <span className="flex flex-row pl-10">
                    <h1 className="font-bold text-[#1C2752]">Phone : </h1>
                    <button className="pl-2 text-[#7E7E7E]">
                      {data[0].number}
                    </button>
                  </span>
                  <span className="flex flex-row pl-10">
                    <h1 className="font-bold text-[#1C2752]">Email : </h1>
                    <button className="pl-2 text-[#7E7E7E]">
                      {data[0].email}
                    </button>
                  </span>
                </div>
                <div className="flex pt-10 space-x-5 p-10 ">
                  <button className="hover:scale-125 hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300 ">
                    {" "}
                    <img src={insta} alt="" />
                  </button>
                  <button className="hover:scale-125 hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300">
                    <img src={fcb} alt="" />
                  </button>
                  <button className="hover:scale-125 hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300">
                    <img src={twitter} alt="" />
                  </button>
                </div>

                <div className="flex pl-10">
                  <IoIosStar className="text-2xl  text-yellow-400  " />
                  <IoIosStar className="text-2xl  text-yellow-400  " />
                  <IoIosStar className="text-2xl  text-yellow-400  " />
                  <IoIosStarHalf className="text-2xl  text-yellow-400  " />
                </div>

                <Button
                  content={"Request Service"}
                  className="rounded-none font-bold  text-xl bg-orangeColor my-10 text-blueColor m-10 "
                />
              </div>
            </div>
            <div className="container mx-auto">
              <h1 className="text-secendFont text-[10px] md:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2">
                Qualification & Experience
              </h1>
              <p className="text-grayColor pl-5 mt-4  w-[1100px] text-md">
                Efficiently myocardinate market driven innovation open source
                alignments dramatically engaged high pay off infomediaries
                rather than client centric imperatives. Efficiently initiates
                world class applications after client centric infomediaries
                phosfluorescently expedite impactful supply chains via focused
                results holistically generated open source applications through
                bleeding edges sources compellingly supply just in time to
                catalysts for change through top-line potentialities.
              </p>

              <div class=" mt-4 pl-10  text-grayColor    text-md">
                <ol class=" custom-ol list-decimal ">
                  <li>Listen to what they say about you</li>
                  <li> Randomised words which.</li>
                  <li>Internet tend to repeat predefined chunks</li>
                </ol>
              </div>
              <div className="my-6 mb-10  flex flex-col ">
                <h1 className="justify center mb-7 items-center text-secendFont   text-[10px] md:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2">
                  Latest Workes Pictures
                </h1>
                <div className='flex items-center mb-14 justify-center '>
                  <Portfolio images={Prvworkes} />
                </div>
              </div>
            </div>
          </div>

          <Foot />
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

export default Workerprofile
