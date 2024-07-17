import React from 'react'
import Header from "../components/Landing/Header"
import Footer from "../components/Landing/Footer"
import { useForm } from "react-hook-form";

import { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";





function ForgetPassword() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
    const [next, setNext] = useState(false);


  const onSubmit = async (data) => {
    const obj = {
      email: data.email,
  
    };
    console.log(obj);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //    Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(obj),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData.message);
        Swal.fire({
          title: "Username or passowrd does not exists",
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
      console.log(responseData);
      setUser(responseData);
      console.log(jwtDecode(responseData.jwt));
  
      localStorage.setItem("authToken", JSON.stringify(responseData.jwt)); //jwt encoded
      Swal.fire({
        title: "Login Successful",
        icon: "success",
        toast: true,
        timer: 4000,
        position: "top-right",
        timerProgressBar: false,
        showConfirmButton: false,
        showCancelButton: true,
      });
      if (jwtDecode(responseData.jwt).is_client) {
        navigate("/clientDash/request");
      } else {
        navigate("/WorkerDash");
      }

      console.log("Logged in successfully");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <Header />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  px-1  my-32 gap-4 items-center flex flex-col"
      >
        <h1 className="text-secendFont   text-center  pl-5  lg:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
          Forgot password ?
        </h1>
        <p className="text-sm text-center -mt-3 font-semibold text-blueColor">
          Don’t worry! It happens. Please enter the email associated with your{" "}
          <br />
          account.
        </p>
        {!next && (
          <>
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
            <button
              onClick={() => setNext(true)}
              className="py-3 px-7  w-[450px] text-sm  font-medium  bg-blueColor text-white hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
            >
              Next
            </button>
          </>
        )}
        {next && (
          <>
            <div>
              <div className="flex relative">
                <input
                  type="text"
                  placeholder="press ur token"
                  {...register("token", {
                    required: "token is required",
                  })}
                  className="placeholder:text-gray-400   font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
               w-[450px] p-3 border  shadow-sm outline-none -blueColor font-mainfont duration-200"
                />
              </div>
            </div>

            <div>
              <div className="flex relative">
                <input
                  type={`${show ? "text" : "password"}`}
                  placeholder="new password"
                  {...register("password1", {
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
            <div>
              <div className="flex relative">
                <input
                  type={`${show ? "text" : "password"}`}
                  placeholder="confirm your password"
                  {...register("password2", {
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
              onSubmit={handleSubmitt(onSubmit)}
              className="py-3 px-7  w-[450px] text-sm  font-medium  bg-blueColor text-white hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
            >
              Submit
            </button>
          </>
        )}
      </form>
      <Footer />
    </div>
  );
}

export default ForgetPassword