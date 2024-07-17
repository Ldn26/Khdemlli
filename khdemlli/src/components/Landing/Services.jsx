import React from 'react'
import JobCard from '../Services/JobCard'
import paint from "../../assets/landing/air.png"
import mainte from "../../assets/services/maintenance.png"

import electric from "../../assets/services/electric.png"
import builder from "../../assets/services/builder.png";
import house from "../../assets/services/house.png";
import security from "../../assets/services/security.png";
import { ImFileEmpty } from "react-icons/im";
function Services() {
  return (
    <div className="flex flex-col items-center pb-20 bg-[#F4F4F4]">
      <div className="bg-white flex my-4 px-4 mt-6 items-center">
        <ImFileEmpty className="text-orangeColor " />
        <h2 className="text-blueColor whitespace-nowra text-lg my-4 text-mainfont ml-2 font-bold ">
          Our Services{" "}
        </h2>
      </div>
      <h1 className="text-4xl font-mainfont font-bold text-blueColor  ">
        Our Services
      </h1>
      <p className="text-grayColor my-2 mb-4 w-[300px] text-center text-sm md:w-[500px]">
        We Provide Services in these fields
      </p>
      <div className=" flex flex-wrap justify-center  w-3/4 mx-auto   ">
        <JobCard
          Descrption={
            "Wall painting involves meticulously applying layers of paint or decorative finishes onto surfaces to enhance aesthetics and protect them from wear."
          }
          jobName={"PainTing"}
          img={paint}
          link={"/painting"}
        />
        <JobCard
          Descrption={
            " entails methodically setting up wiring, outlets, switches, and fixtures to provide safe and functional electricity distribution within a building"
          }
          jobName={"Electrical installlation "}
          img={electric}
          link={"/electrical"}
        />
        <JobCard
          Descrption={
            "encompass regular inspections, repairs, to ensure optimal functionality and longevity, addressing issues promptly to prevent potential failures"
          }
          jobName={"Service & maintenance"}
          img={mainte}
          link={"/ment"}
        />
        <JobCard
          Descrption={
            "Overseeing construction projects from start to finish, including site prep, structural work, and finishing, ensuring safety and client satisfaction."
          }
          jobName={"General Builder"}
          img={builder}
          link={"/building"}
        />
        <JobCard
          Descrption={
            "Extending existing structures with precision, construction, and finishing touches to seamlessly integrate new spaces with the original dwelling."
          }
          link={"/house"}
          jobName={"House Extentions"}
          img={house}
        />
        <JobCard
          Descrption={
            "Installing and maintaining electronic systems designed to protect properties, utilizing sensors, cameras, and alarms for comprehensive surveillance "
          }
          jobName={"Security System"}
          img={security}
          link={"/security"}
        />
      </div>
    </div>
  );
}

export default Services