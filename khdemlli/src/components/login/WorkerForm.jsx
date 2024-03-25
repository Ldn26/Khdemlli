import React from 'react'
import { useContext } from 'react';
import { userContext } from '../../contexts/AuthContext';
import { useForm } from "react-hook-form";



function WorkerForm() {
const {setUser} = useContext(userContext)
  /// fetch and send  the data to the back_end   when we submit the form 
  // need to use the useForm to handle the states 
// if it's ok we navigate to the main     <Navigate  to= " /main " / >
  // setUser(data)

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
    <div className="mt-10  flex-col justify-center border w-[500px] flex   md:ml-10 ">
      <h1 className="text-secendFont my-2   pl-5  lg:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
      Create An Account 
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

export default WorkerForm ;