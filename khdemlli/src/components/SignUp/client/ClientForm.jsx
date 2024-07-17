import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import  {userContext}  from "../../../contexts/AuthContext";
import { useContext } from "react";
import Swal from "sweetalert2";   

function ClientForm() {
  const {setUser} = useContext(userContext)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);

  const onSubmit = async (data) => {
   const obj = {
     username: data.username,
     email: data.email,
     password: data.password,
     is_artisan: false,
     is_client: true,
   };
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(obj),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData.message);
        Swal.fire({
          title: "Usern Already  exist",
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

      const responseData = await response.json();
      setUser(responseData);
      console.log(responseData.jwt);
      localStorage.setItem("authToken", JSON.stringify(responseData.jwt)); //jwt encoded
      Swal.fire({
        title: "Sign-Up  Successful",
        icon: "success",
        toast: true,
        timer: 4000,
        position: "top-right",
        timerProgressBar: false,
        showConfirmButton: false,
        showCancelButton: true,
      });
      navigate("/clientDash/request");
      console.log("Sign in  in successfully");
    } catch (error) {
      console.error(error);
    }
  };













  

  return (
    <div className="flex justify-center my-12 items-center">
      <div className="mt-  flex-col justify-center border w-[500px] flex   md:ml-10 ">
        <div className="flex items-center justify-center">
          <h1 className="text-secendFont my-2  text-center  pl-5  lg:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
            Hola Client
          </h1>
          <HiSparkles className="text-yellow-400 text-ce" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  px-1  my-2 gap-4 items-center flex flex-col"
        >
          <div>
            <input
              type="text"
              placeholder="User name"
              {...register("username", {
                required: "Name is required",
              })}
              className="placeholder:text-gray-400  font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
               w-[450px] p-3 border  shadow-sm outline-none -blueColor font-mainfont duration-400"
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
              placeholder="Email "
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="placeholder:text-gray-400  font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
               w-[450px] p-3 border  shadow-sm outline-none -blueColor font-mainfont duration-200"
            />
            {errors.email && (
              <p className="text-red-400 mt-1 ml-4 text-sm">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div>
            <div className="flex relative">
              <input
                type={`${show ? "text" : "password"}`}
                placeholder="Password"
                {...register("password", {
                  required: "password is required",
                })}
                className="placeholder:text-gray-400   font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
               w-[450px] p-3 border  shadow-sm outline-none -blueColor font-mainfont duration-200"
              />
              {!show ? (
                <FaEyeSlash
                  className="absolute right-[13px] top-[16px] hover:text-blueColor hover:scale-105"
                  onClick={() => {
                    setShow(true);
                  }}
                />
              ) : (
                <FaEye
                  className="absolute right-[13px] top-[16px] hover:text-blueColor hover:scale-105"
                  onClick={() => {
                    setShow(false);
                  }}
                />
              )}
            </div>
            {errors.password && (
              <p className="text-red-400 mt-1 ml-4 text-sm">
                {errors.password?.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="py-2 px-7  w-[450px] text-sm  font-medium  bg-blueColor text-white hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default ClientForm;
