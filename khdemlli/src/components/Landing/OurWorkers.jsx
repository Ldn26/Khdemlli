import React from "react";
import { ImFileEmpty } from "react-icons/im";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { BiSolidError } from "react-icons/bi";
import LoadingSpin from "react-loading-spin";
import Button from "../Button"
import ic from "../../assets/landing/1.png";
import { useState,useEffect } from "react";

function OurWorkers({content,back= "",items = ""}) {

  const [currentPage, setCurrentPage] = useState(1);

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
   const fetchWorkers = async (page) => {
     const res = await fetch(
       //  `http://127.0.0.1:8000/api/artisan-users/${page}`
       `http://127.0.0.1:8000/api/artisan-users/`
     );
     return res.json();
   };

  const { data, isError, isLoading, isSuccess, isPreviousData } = useQuery({
    queryKey: ["Workers", currentPage],
    queryFn: () => fetchWorkers(currentPage),
    keepPreviousData: true,
  });

  useEffect(() => {
    // Fetch data whenever currentPage changes
    fetchWorkers(currentPage);
  }, [currentPage]);


    const defaultC1 = "my-20 w-[500px] md:w-[700px]  lg:w-[1000px] xl:w-[1400px] mx-auto flex-col flex items-center py-4 bg-blueColor ";
    const defaultC2 = "bg-white border h px-10 py-8 w-1/3 mx-1 basis-1/3  flex  items-center flex-col    "
    const v1 = `${defaultC1} ${back}`.trim();
    const v2 = `${defaultC2} ${items}`.trim();

  return (
    <div className={v1}>
      <div className="flex  bg-[#F4F4F4]   ml-5 w-fit  items-center    p-5 py-1">
        <ImFileEmpty className="text-orangeColor " />
        <p className="text-[15px] ml-2   font-semibold text-blueColor  ">
          Our Workers
        </p>
      </div>
      <h1 className="text-secendFont   my-2 pl-5  lg:text-3xl text-white  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
        {content}
      </h1>
      {isError && (
        <div className="flex items-center ">
          <BiSolidError className="text-red-400 text-xl mx-4" />
          <p className="text-red-400 text-lg">Opps , Error fetching data </p>
        </div>
      )}
      {isLoading && (
        <div className="flex  items-center">
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
      {isSuccess && (
        <div>
          <Carousel>
            <CarouselContent className="w-[400px] flex sm:w-[450px] items-center  md:w-[700px] lg:w-[900px] xl:w-[1200px] ">
              {data?.map((el) => {
                return (
                  <CarouselItem key={el.id} className={v2}>
                    <img
                      src={ic} // {el.profil.profile_pic}
                      alt="av"
                      className=" md:w-[200px]  w-[100px]  md:h-[150px] h-[150px]"
                    />

                    <h1 className="text-blueColor font-bold whitespace-nowrap my-2 font-secondaryfont">
                      {el.username}
                    </h1>

                    <p className="text-sm  whitespace-nowrap leading-5 tracking-wide text-grayColor  font-mainfont ">
                      {el.profil.job_title}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      {" "}
                      {el.profil.City}
                    </p>
                    <div className="flex mt-4 items-center justify-center">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <IoIosStar
                          key={i}
                          className="text-2xl text-yellow-400"
                        />
                      ))}
                    </div>
                  </CarouselItem>
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
      )}
      <Link to="/ourteam">
        <Button
          content={"See more"}
          className="font-bold  text-blueColor  text-lg bg-orangeColor my-10"
        />
      </Link>
    </div>
  );
}

export default OurWorkers;
