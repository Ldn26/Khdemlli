import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../contexts/AuthContext";
import { useContext } from "react";
import Swal from "sweetalert2";

function WorkerForm() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const Cities = [
    "Algiers",
    "Oran",
    "Constantine",
    "Annaba",
    "Batna",
    "Blida",
    "Sétif",
    "Chlef",
    "Djelfa",
    "Sidi Bel Abbès",
    "Biskra",
    "Tébessa",
    "El Oued",
    "Skikda",
    "Tizi Ouzou",
  ];
  const Services = ["Painting", "Electical", "General Builder"];
  const Years = [
    "1 Year",
    "2 Years",
    "3 Years ",
    "4 Years",
    "5 Years",
    "6 Years",
  ];
  const [selectedYear, setSeletedYear] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const { setUser } = useContext(userContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleSelectJob = (value) => {
    setSelectedJob(value);
    setValue("Job", value);
  };
  const handleSelectCity = (value) => {
    setSelectedCity(value);
    setValue("city", value);
  };

  const handleExp = (value) => {
    setSeletedYear(value);
    setValue("Exp", value);
  };

  const onSubmit = async (data) => {
    const obj = {
      username: data.name,
      email: data.email,
      password: data.password,
      is_artisan: true,
      is_client: false,
      profil: {
        first_name: data.name,
        surname: data.Exp,
        Country: data.city,
        City: data.city,
        job_title: data.Job,
        Numero: Number(data.number),
      },

      // expericence: data.Exp,
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
          title: "Username Already  exist",
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
        title: "Sign-Up Successful",
        icon: "success",
        toast: true,
        timer: 4000,
        position: "top-right",
        timerProgressBar: false,
        showConfirmButton: false,
        showCancelButton: true,
      });
      navigate("/workerDash");
      console.log("Sign in  in successfully");
    } catch (error) {
      console.error(error);
    }
  };

  // const onSubmit = async (data) => {

  //   const obj = {
  //     username: data.name,
  //     email: data.email,
  //     password: data.password,
  //     is_artisan: true,
  //     is_client: false,
  //     profil: {
  //       first_name: data.name,
  //       surname: data.Exp,
  //       Country: data.city,
  //       City: data.city,
  //       job_title: data.Job,
  //       Numero: Number(123455676),
  //     },

  //     // expericence: data.Exp,
  //   };
  //   console.log(obj);

  //   try {
  //     await fetch("http://localhost:8000/api/register/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(obj),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data?.message) {
  //           alert("error");
  //           return;
  //         }
  //         /// the true
  //         console.log("success fitching data ");
  //         setUser(obj);
  //         navigate("/workerDash");
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="flex justify-center my-12 items-center">
      <div className=" flex-col justify-center border w-[500px] flex   md:ml-10 ">
        <div className="flex items-center justify-center">
          <h1 className="text-secendFont my-2  text-center  pl-5  lg:text-4xl text-blueColor  whitespace-nowrap font-bold tracking-wide text-xl  p-2 ">
            Hola Worker
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
              {...register("name", {
                required: "Name is required",
              })}
              className="placeholder:text-grayColor  font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
               w-[450px] p-3 border  shadow-sm outline-none -blueColor font-mainfont duration-400"
            />
            {errors.name && (
              <p className="text-red-400 mt-1 ml-4 text-sm">
                {errors.name?.message}
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
                  minLength: {
                    value: 5,
                    message: "Password must have at least 5 characters",
                  },
                })}
                className="placeholder:text-grayColor   font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
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
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="placeholder:text-grayColor  font-semibold hover:shadow-lg text-sm  hover:border-2  hover:border-blueColor 
               w-[450px] p-3 border  shadow-sm outline-none -blueColor font-mainfont duration-200"
            />
            {errors.email && (
              <p className="text-red-400 mt-1 ml-4 text-sm">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone number +213"
              {...register("number", {
                required: "Phone number is required",
                // pattern: {
                //   value: /^[25-7]\d{2}\s\d{3}\s\d{3}$/,
                //   message: "Phone number must match the pattern: 0AA BBB BBB",
                // },
              })}
              className="placeholder:text-grayColor font-semibold hover:shadow-lg text-sm hover:border-2 hover:border-blueColor w-[450px] p-3 border shadow-sm outline-none -blueColor font-mainfont duration-400"
            />
            {errors.number && (
              <p className="text-red-400 mt-1 ml-4 text-sm">
                {errors.number?.message}
              </p>
            )}
          </div>

          <div>
            <Select onValueChange={handleSelectJob}>
              <SelectTrigger
                {...register("Job")}
                className="w-[450px] hover:border-blueColor hover:shadow-lg text-sm p-3 shadow-sm outline-none -blueColor font-mainfont duration-200"
              >
                <SelectValue placeholder="Service type" />
              </SelectTrigger>
              <SelectContent
                position="bottom"
                className="bg-blueColor   rounded-xl"
              >
                {Services.map((el, index) => (
                  <SelectItem
                    key={index}
                    value={el}
                    className=" font-semibold text-mainfont text-white"
                  >
                    {el}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select onValueChange={handleSelectCity}>
              <SelectTrigger
                {...register("city")}
                className="w-[450px]    hover:border-blueColor  hover:shadow-lg text-sm   p-3   shadow-sm outline-none   font-mainfont duration-200  "
              >
                <SelectValue placeholder="Your City" />
              </SelectTrigger>
              <SelectContent
                position="bottom"
                className="bg-orangeColor   rounded-xl"
              >
                {Cities.map((el, index) => (
                  <SelectItem
                    key={index}
                    value={el}
                    className="font-semibold text-mainfont"
                  >
                    {el}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select onValueChange={handleExp}>
              <SelectTrigger
                {...register("Exp")}
                className="w-[450px]    hover:border-blueColor  hover:shadow-lg text-sm   p-3   shadow-sm outline-none    font-mainfont duration-200  "
              >
                <SelectValue placeholder="Years of Experience" />
              </SelectTrigger>
              <SelectContent
                position="bottom"
                className="bg-blueColor text-white  rounded-xl"
              >
                {Years.map((el, index) => (
                  <SelectItem
                    key={index}
                    value={el}
                    className="font-semibold text-mainfont"
                  >
                    {el}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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

// Export the WorkerForm component
export default WorkerForm;
