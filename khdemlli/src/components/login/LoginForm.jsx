import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useContext } from "react";
import { userContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import Swal from "sweetalert2";

function LoginForm() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);

  // const onSubmit = async (data) => {
  // //  console.log(data);
  //   const obj = {
  //     email: data.email,
  //     password: data.password,
  //   };
  //   console.log(obj);

  //   try {
  //     await fetch("http://127.0.0.1:8000/api/login/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         //  Authorization: `Bearer ${token}`
  //       },
  //       body: JSON.stringify(obj),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data?.message) {
  //           console.log(data.message)
  //           alert("Opps An Eroor Bro error");
  //           return;
  //         }
  //         if(response.status = ok){

  //           /// the true
  //           setUser(data);
  //           console.log(data);
  //           localStorage.setItem("authTokens", JSON.stringify(data)); //jwt encoded
  //           navigate("/workerDash");
  //           console.log("Log in ");
  //         }

  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onSubmit = async (data) => {
    const obj = {
      email: data.email,
      password: data.password,
    };
    console.log(obj);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
   //       Authorization: `Bearer ${token}`,
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
  const handelClick =()=>{
     navigate("/forgetPassword");
  }
  /////
  return (
    <div className="flex justify-center mb-60 items-center">
      <div className="mt-10  flex-col justify-center  w-[500px] flex   md:ml-10 ">
        <h1 className="text-secendFont my-2  text-center  pl-5  lg:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
          Account Log in
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  px-1  my-2 gap-4 items-center flex flex-col"
        >
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
          <div className="flex items-center justify-between  flex-row">
            <input
              type="radio"
              name="favoriteColor"
              value="red"
              onClick={handelClick}
              //   checked={selectedColor === "red"}
              //   onChange={handleChange}
            />
            <label className="text-blueColor text-sm ml-[300px]  font-semibold">
              Forget Password ?
            </label>
          </div>
          <button
            type="submit"
            className="py-3 px-7  w-[450px] text-sm  font-medium  bg-blueColor text-white hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
