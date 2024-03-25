import React from 'react'
import { ImFileEmpty } from "react-icons/im";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";
import quotes from "../../assets/landing/qutes.png";
function CustomersSays() {

  const fetchFeed = async () => {
          const res = await fetch(
            "https://65fd9c189fc4425c65325ced.mockapi.io/khdemli/feed_back"
          );
           return res.json();}

    const { data, isError, isLoading, isSuccess } = useQuery({
      queryKey: ["feedBack"],
      queryFn: fetchFeed,
    });
  
  return (
    <div className=" mt-10   flex-col flex q md:ml-40 ">
      <div className="flex  bg-[#F4F4F4]   ml-5 w-fit  items-center    p-5 py-1">
        <ImFileEmpty className="text-orangeColor " />
        <p className="text-[15px] ml-2   font-semibold text-blueColor  ">
          Testimonial
        </p>
      </div>
      <h1 className="text-secendFont my-2   pl-5  lg:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
        Customers Says
      </h1>

      <div>
        {isSuccess && (
          <Carousel  className = "shadow-2xl shadow-orangeColor " >
            <CarouselContent className="     w-[400px]">
              {data.map((el) => {
               return  <CarouselItem key={el.id} className="md:w-[300px]   w-[100px]  h-[300px] p-5 flex  items-center flex-col ">
                  <div className="flex justify-between  w-[350px]  items-center ">
                    <div className="flex items-center p-2  ">
                      <img
                        src={el.avatar}
                        alt="avatar"
                        className="w-12 h-12  mr-2 rounded-full  "
                      />
                      <div className="flex flex-col ">
                        <h1 className="text-blueColor font-bold  font-secondaryfont">
                          {el.name}
                        </h1>
                        <p className="font-mainfont text-grayColor text-sm ">
                          {el.City}
                        </p>
                      </div>
                    </div>
                    <img src={quotes} alt="qutes" className="w-8 h-8" />
                  </div>
                  <div className="flex items-center my-2 justify-center">
                    <hr className="text-grayColor  w-[350px]  " />
                  </div>
                  <p className="text-sm ml-4  leading-5 lg:max-w-[350px] tracking-wide l text-grayColor  my-4 font-mainfont ">
                    {el.Comment}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum nesciunt doloribus iusto alias distinctio nostrum
                    nulla? Velit,
                  </p>
                </CarouselItem>;
              })}
            </CarouselContent>  
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
     
    </div>
  );
}

export default CustomersSays