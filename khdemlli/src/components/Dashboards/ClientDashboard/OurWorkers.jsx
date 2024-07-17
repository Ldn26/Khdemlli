import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useState ,useEffect} from "react";


import { ImFileEmpty } from "react-icons/im";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

import { IoIosStar } from "react-icons/io";
import ic from "../../../assets/landing/1.png";

function OurWorkers() {

     const fetchWorkers = async (page) => {
       const res = await fetch(
         //  `http://127.0.0.1:8000/api/artisan/?page=${page}`
         `http://127.0.0.1:8000/api/all_artisan/`
       );
       return res.json();
     };

    const [currentPage, setCurrentPage] = useState(1);
//   const fetchWorkers = async (page) => {
//  const res = await fetch(
//    `https://65fd9c189fc4425c65325ced.mockapi.io/khdemli/workers?limit=6&page=${page}`
//  );
//     return res.json();
//   };

  const { data, isError, isLoading, isSuccess, isPreviousData } = useQuery({
    queryKey: ["Workers", currentPage],
    queryFn: () => fetchWorkers(currentPage),
    keepPreviousData: true,
  });
  console.log(data)
  useEffect(() => {
    // Fetch data whenever currentPage changes
    fetchWorkers(currentPage);
  }, [currentPage]);
  
   const handleNextPage = () => {
     if (!isPreviousData && data.length === 6) {
       setCurrentPage((prevPage) => prevPage + 1);
     }
   };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };


  //  const fetchArtisants = async () => {
  //    try {
  //      const res = await fetch(baseUrl + "artisan-users", {
  //        headers: {
  //          "Content-Type": "application/json",
  //          //   Authorization: `Bearer ${token}`,
  //        },
  //      });

  //      return res.json();
  //    } catch (error) {
  //      console.error("Error fetching chat:", error);
  //      throw error;
  //    }
  //  };
  //  const { data, isError, isLoading, isSuccess } = useQuery({
  //    queryKey: ["Art"],
  //    queryFn: fetchArtisants,
  //  });
  
  return (
    <div className="w-3/5 flex flex-col items-center justify-center h-screen  ">
      <div className="flex  bg-[#F4F4F4]   mt-10 ml-5 w-fit  items-center    p-5 py-1">
        <ImFileEmpty className="text-orangeColor " />
        <p className="text-[15px] ml-2   font-semibold text-blueColor  ">
          Our Workerrs
        </p>
      </div>

      <h1 className="text-secendFont    text-blueColor  pt-4 whitespace-nowrap font-bold tracking-wide text-3xl  ">
        Meet Our Experts
      </h1>
      <Carousel>
        <CarouselContent className=" flex w-[600px] container   mt-4 items-center  ">
          {data?.map((el, index) => {
            return (
              <>
                <CarouselItem
                  key={el.id}
                  className="bg-white border transition-all basis-1/3 border-orangeColor mb-4   mx-2  pl-0 flex  items-center flex-col  "
                >
                  <Link to={"workerprofile/" + el.id}>
                    <img
                      src= {ic} // {el.profil.profile_pic}
                      alt="khedam"
                      className="w-[160px] hover:scale-110 transition-all mt-2 rounded h-[120px] "
                    />
                  </Link>
                  <h1 className="text-blueColor font-bold whitespace-nowrap mt-2   font-secondaryfont">
                    {el.username}
                  </h1>
                  <p className="text-sm whitespace-nowrap leading-5 tracking-wide text-grayColor mt-1 font-mainfont ">
                    {el.profil.job_title}
                  </p>

                  <p className="text-xs text-gray-400 mt-1"> {el.profil.City}</p>
                  <div className="flex mt-2 pb-2 items-center justify-center">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <IoIosStar key={i} className="text-2xl text-yellow-400" />
                    ))}
                  </div>
                </CarouselItem>
              </>
            );
          })}
        </CarouselContent>

        <CarouselPrevious
         
          onClick={handlePreviousPage}
          disabled={currentPage <= 1}
        />
        <CarouselNext
          onClick={handleNextPage}
          disabled={isPreviousData || data?.length < 6}
          
        />
      </Carousel>
    </div>
  );
}

export default OurWorkers;
