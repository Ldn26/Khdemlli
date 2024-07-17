import React from "react";
import { ImFileEmpty } from "react-icons/im";
import { useForm } from "react-hook-form";

function GetinTouchWorker() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const obj = {
      fullname: data.name,
      email: data.email,
      message: data.content,
      phone: data.phone,
      messgeTitle: data.Subject,
    };
    console.log(obj);

    try {
      await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.message) {
            alert("error");
            return;
          }
          /// the true
          console.log("success fitching data ");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-[700px]  my-10 mx-auto bg-[#F4F4F4] py-10 flex items-center flex-col">
      <div className="flex  bg-white   ml-5 w-fit items-center    p-5 py-1">
        <ImFileEmpty className="text-orangeColor " />
        <p className="text-[15px] ml-2   font-semibold text-blueColor  ">
          Contact Us
        </p>
      </div>
      <h1 className="text-secendFont my-6   pl-5  lg:text-2xl text-blueColor font-mainfont whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
        Get in touch
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  px-1  my-2 gap-4 items-center flex flex-col"
      >
        <div className="flex ">
          {/* name */}
          <div>
            <input
              type="text"
              placeholder="Your name"
              {...register("name", {})}
              className="placeholder:text-grayColor mx-2 font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
                w-[290px] p-3 border  shadow-sm outline-none -blueColor font-mainfont duration-400"
            />
          </div>

          {/* mail  */}
          <div>
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="placeholder:text-grayColor  mx-2 font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
               w-[290px] p-3 border  shadow-sm outline-none -blueColor font-mainfont duration-200"
            />
            {errors.email && (
              <p className="text-red-400  mt-1 ml-4 text-sm">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>

        {/* phone number  */}

        <div>
          <input
            type="number"
            {...register("phone", {
              pattern: {
                value: /^(00213|\+213|0)(5|6|7)[0-9]{8}$/,
                message: "Invalid  Phone Number",
              },
            })}
            placeholder="Phone Number"
            className="placeholder:text-grayColor  font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
               w-[600px] p-3 border  shadow-sm outline-none -blueColor font-mainfont duration-400"
          />
        </div>
        {/* Subjet  */}
        <div>
          <input
            {...register("Subject", {})}
            type="text"
            placeholder="Subject"
            className="placeholder:text-grayColor  font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
               w-[600px] p-3 border  shadow-sm outline-none -blueColor font-mainfont duration-400"
          />
        </div>

        {/* Sumbject content */}
        <div>
          <textarea
            {...register("content", {})}
            className="w-[600px] p-2 placeholder:text-grayColor font-mainfont font-semibold"
            rows={2} // Number of visible text lines
            cols={40} // Number of visible text columns
            placeholder="Feel Free ..."
          />
        </div>

        <button
          type="submit"
          className="py-2 px-7  rounded-xl text-sm text-blueColor hover:bg-blueColor hover:text-white font-medium  bg-orangeColor  hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default GetinTouchWorker;
