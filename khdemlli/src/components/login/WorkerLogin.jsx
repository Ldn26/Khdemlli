import React from "react";
import { ImFileEmpty } from "react-icons/im";
import { useForm } from "react-hook-form";

function WorkerLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <div className="mt-10  flex-col justify-center border w-[500px] flex  md:ml-10 ">
      <div className="flex  bg-[#F4F4F4]   ml-5 w-fit  items-center    p-5 py-1">
        <ImFileEmpty className="text-orangeColor " />
        <p className="text-[15px]   ml-2 font-semibold text-blueColor  ">
          Testimonial
        </p>
      </div>
      <h1 className="text-secendFont my-2   pl-5  lg:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
        Signiing Up
      </h1>

      <form
        onSubmit={handleSubmit(onsubmit)}
        className="ml-5 border px-1 py-5 my-2 bg-[#F4F4F4] items-center flex flex-col"
      >
        <div>
          <input
            type="text"
            placeholder="Your Name "
            {...register("name", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Password must have at least 8 characters",
              },
            })}
            className="text-grayColor  hover:shadow-lg text-sm   w-[350px] p-3 border  shadow-sm outline-none hover:brder-blueColor font-mainfont duration-500"
          />
          {errors.name && (
            <p className="text-red-400 mt-1 ml-4 text-sm">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Email Addreess "
            {...register("name", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Password must have at least 8 characters",
              },
            })}
            className="text-grayColor  hover:shadow-lg text-sm   w-[350px] p-3 border  shadow-sm outline-none hover:brder-blueColor font-mainfont duration-500"
          />
          {errors.name && (
            <p className="text-red-400 mt-1 ml-4 text-sm">
              {errors.name?.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default WorkerLogin;
