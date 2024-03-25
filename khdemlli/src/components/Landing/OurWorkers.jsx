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
function OurWorkers() {
  const fetchWorkers = async () => {
    const res = await fetch(
      "https://65fd9c189fc4425c65325ced.mockapi.io/khdemli/workers"
    );
    return res.json();
  };

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["Workers"],
    queryFn: fetchWorkers,
  });

  return (
    <div className=" my-40 w-[500px] md:w-[700px]  lg:w-[1000px] xl:w-[1400px] mx-auto flex-col flex items-center py-4 bg-blueColor ">
      <div className="flex  bg-[#F4F4F4]   ml-5 w-fit  items-center    p-5 py-1">
        <ImFileEmpty className="text-orangeColor " />
        <p className="text-[15px] ml-2   font-semibold text-blueColor  ">
          Our Workerrs
        </p>
      </div>
      <h1 className="text-secendFont my-6   pl-5  lg:text-4xl text-white  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
        Check Our Best Workers
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
            <CarouselContent className="w-[400px] flex sm:w-[450px]   items-center justify-cente  md:w-[700px] lg:w-[900px] xl:w-[1200px]">
              {data?.map((el) => {
                return (
                  <CarouselItem
                    key={el.id}
                    className="  bg-white border px-10 py-8 w-1/3 mx-1 basis-1/3  flex  items-center flex-col "
                  >
                    <Link to="/" className="">
                      <img
                        src={el.image}
                        alt="av"
                        className=" md:w-[300px]  w-[100px]  md:h-[200px] h-[150px]"
                      />
                    </Link>
                    <h1 className="text-blueColor font-bold whitespace-nowrap my-2 font-secondaryfont">
                      {el.Full_Name}
                    </h1>

                    <p className="text-sm  whitespace-nowrap leading-5 tracking-wide text-grayColor  font-mainfont ">
                      {el.Job}
                    </p>
                    <div className="flex mt-4 items-center justify-center">
                      <IoIosStar className="text-2xl  text-yellow-400  " />

                      <IoIosStar className="text-2xl  text-yellow-400  " />

                      <IoIosStar className="text-2xl  text-yellow-400  " />
                      <IoIosStarHalf className="text-2xl  text-yellow-400  " />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
      <Link to="workers">
        <Button
          content={"See more"}
          className="font-bold text-xl bg-orangeColor my-10"
        />
      </Link>
    </div>
  );
}

export default OurWorkers;
