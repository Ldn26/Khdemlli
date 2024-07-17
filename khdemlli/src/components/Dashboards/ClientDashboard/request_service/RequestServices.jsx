import React from "react";
import {useEffect , useState } from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Outlet, redirect } from "react-router-dom";
import addIcon from "../../../../assets/dash/plus.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../../contexts/AuthContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode"







function RequestServices() {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const token = localStorage.getItem("authToken");
  const decodedToken = jwtDecode(token);
  const user_id = decodedToken.id;

  const fetchArtisants = async () => {
    try {
      const res = await fetch(baseUrl + "all_artisan/", {
        headers: {
          "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,
        },
      });
console.log(data)
      return res.json();
    } catch (error) {
      console.error("Error fetching chat:", error);
      throw error;
    }
  };
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["Art"],
    queryFn: fetchArtisants,
  });
  //  const fetchCredentials = async () => {
  //    const res = await fetch("http://127.0.0.1:8000/api/profile/"+user_id);
  //    return res.json();
  //  };
      const fetchCredentials = async () => {
        const res = await fetch("http://127.0.0.1:8000/api/user/");
        return res.json();
      };
  
    const { data:Cordonates, } = useQuery({
      queryKey: ["cordonates"],
      queryFn: fetchCredentials,
    });
   
    console.log(Cordonates)
    console.log(Cordonates)
    localStorage.setItem("cordonate", JSON.stringify(Cordonates));
  

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [selectedArt, setSeletedArt] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const Services = [
    "Painting",
    "Electical",
    "General Builder",
    "Service & maintenance service",
    "Electrical installlation service",
    "Security System service",
    "House Extentions service",
  ];
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

  const [targetId, setTargetId] = useState(null);
  const [filredArt, setFiltredArt] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isSuccess && data) {
      setFiltredArt(data);
    }
  }, [isSuccess, data]);

  const handleSelectJob = (value) => {
    setSelectedJob(value);
    setValue("Job", value);
    const filtredwithJob = data?.filter((item) => {
      return item.profil.job_title.toLowerCase().includes(value.toLowerCase());
    });
    setFiltredArt(filtredwithJob);
    console.log(filtredwithJob);
  };
  const handleSelectCity = (value) => {
    setSelectedCity(value);
    setValue("city", value);
    const filtredwithCity = filredArt?.filter((item) => {
      return item.profil.City.toLowerCase().includes(value.toLowerCase());
    });
    console.log(filtredwithCity);
    setFiltredArt(filtredwithCity);
  };
   console.log("user id");
   console.log(user_id);
  const onSubmit = async (data) => {
    const object = {
      wilaya: selectedCity,
      type: selectedJob,
    };
    console.log(JSON.stringify(object));
    console.log("user id");
    console.log(user_id);
    console.log("target id ");
    console.log(targetId);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/order/${user_id}/${targetId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(object),
        }
      );

      if (!response.ok) {
        console.error("Internal Server Error");
        Swal.fire({
          title: "Oops Something Went Wrong",
          text: "Internal Server Error. Please try again later.",
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

      console.log("first");
      Swal.fire({
        title: "Your Request Has Been Sent Successfully",
        icon: "success",
        toast: true,
        timer: 4000,
        position: "top-right",
        timerProgressBar: false,
        showConfirmButton: false,
        showCancelButton: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionClick = (option) => {
    setSelectedOption(option.username);
    setTargetId(option.id);
    setIsOpen(false);
  };

  return (
    <div className="w-full  h-screen flex items-center justify-center  ">
      <button
        className="absolute bottom-2 right-4"
        onClick={() => {
          setShow((el) => !el);
        }}
      >
        <img src={addIcon} alt="add request" className="w-[50px] h-[50px]" />
      </button>
      <div
        className={`${
          show ? "opacity-1" : "pointer-events-none opacity-0"
        }  "border border-b-blueColor w-[450px] h-[350px] duration-500 p-5 shadow-2xl "`}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  px-1   mb-10 gap-4 items-center flex flex-col"
        >
          <h1 className="font-bold text-blueColor  self-start font-mainfont">
            Request A Service{" "}
          </h1>

          <div className="flex flex-col   justify-center">
            <label
              className="text-xs font-bold pb-2 text-blueColor ml-2"
              htmlFor="Service Type "
            >
              Service Type
            </label>
            <Select onValueChange={handleSelectJob}>
              <SelectTrigger
                {...register("Job")}
                className="w-[400px] hover:border-blueColor hover:shadow-lg text-sm p-3 shadow-sm outline-none -blueColor font-mainfont duration-200"
              >
                <SelectValue placeholder="Service type" />
              </SelectTrigger>
              <SelectContent
                position="bottom"
                className="bg-blueColor rounded-xl"
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
          <div className="flex flex-col   justify-center" r>
            <label
              className="text-xs font-bold pb-2 text-blueColor ml-2"
              htmlFor="Service Type "
            >
              Wilaya
            </label>
            <Select onValueChange={handleSelectCity}>
              <SelectTrigger
                {...register("city")}
                className="w-[400px]    hover:border-blueColor  hover:shadow-lg text-sm   p-3   shadow-sm outline-none   font-mainfont duration-200  "
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

          <div className="flex flex-col   justify-center">
            <label
              className="text-xs font-bold pb-2 text-blueColor ml-2"
              htmlFor="Select Worker "
            >
              Select Worker
            </label>

            <div className="relative w-[400px]">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer block appearance-none w-full text-gray-700 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                {selectedOption || "Select a Worker"}
              </div>
              {isOpen && (
                <div className="absolute mt-1 w-full  bg-blueColor shadow-lg rounded-xl  border border-gray-300 z-10">
                  {isSuccess &&
                    filredArt.length > 0 &&
                    filredArt.map((el, index) => (
                      <div
                        key={index}
                        className="hover:bg-white cursor-pointer  text-white hover:text-blueColor rounded-lg flex items-center px-4 py-2"
                        onClick={() => handleOptionClick(el)}
                      >
                        <Link to={"/clientDash/workerprofile/" + el.id}>
                          <img
                            src={el.image || addIcon}
                            alt=""
                            className="w-[30px] h-[30px] hover:scale-125 transition-all  mr-2"
                          />
                        </Link>

                        <h1 className=" font-mainfont text-[15px]  ml-3 font-semibold">
                          {el.username}
                        </h1>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="py-2 px-7  w-[400px] text-sm  font-medium  bg-orangeColor rounded-lg text-white hover:shadow-xl  hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
          >
            Request Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestServices;
