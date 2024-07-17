import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useState,useEffect } from "react";

import { ImFileEmpty } from "react-icons/im";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { BiSolidError } from "react-icons/bi";
import ic from "../../assets/landing/1.png";

function OurWorker() {
    const fetchWorkers = async (page) => {
      const res = await fetch(
        //  `http://127.0.0.1:8000/api/artisan/?page=${page}`
        `http://127.0.0.1:8000/api/artisan-users/`
      );
      return res.json();
    };
    const [currentPage, setCurrentPage] = useState(1);
  const { data, isError, isLoading, isSuccess, isPreviousData } = useQuery({
    queryKey: ["Workers", currentPage],
    queryFn: () => fetchWorkers(currentPage),
    keepPreviousData: true,
  });
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
  return (
    <div className=" flex flex-col   items-center justify-center h-screen -mt-10  ">
      <div className="flex  bg-[#F4F4F4]    ml-5 w-fit  items-center    p-5 py-1">
        <ImFileEmpty className="text-orangeColor " />
        <p className="text-[15px] ml-2   font-semibold text-blueColor  ">
          Our Workerrs
        </p>
      </div>

      <h1 className="text-secendFont    text-blueColor  pt-4 whitespace-nowrap font-bold tracking-wide text-3xl  ">
        Meet Our Experts
      </h1>
      <Carousel className="mb-4">
        <CarouselContent className=" flex w-[800px] container   mt-4 items-center  ">
          {data?.map((el) => {
            return (
              <CarouselItem
                key={el.id}
                className="bg-white border transition-all basis-1/3 border-orangeColor mb-4   mx-2  pl-0 flex  items-center flex-col  "
              >
                <Link to={"/workerprofile/" + el.id}>
                  <img
                    src={ic} // {el.profil.profile_pic}
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
            );
          })}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default OurWorker;
