import React from "react";
import JobCard from "../../../Services/JobCard";

import paint from "../../../../assets/landing/air.png";

import mainte from "../../../../assets/services/maintenance.png";

import electric from "../../../../assets/services/electric.png";
import builder from "../../../../assets/services/builder.png";
import house from "../../../../assets/services/house.png";
import security from "../../../../assets/services/security.png";
import { ImFileEmpty } from "react-icons/im";
function ServicesWorker() {
  return (
    <div className="flex flex-col mt-10 items-center pb-20 ">
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
      <div className=" flex flex-wrap justify-center  mx-auto   ">
        <JobCard Descrption={" ffffff"} jobName={"PainTing "} img={paint} />
        <JobCard
          Descrption={"fdfdbdbdfdfffff fffffbdbf"}
          jobName={"Electrical installlation "}
          img={electric}
        />
        <JobCard
          Descrption={
            "fdfdbdbdfdfffffffffffffff ffffffffffffffffff fffffffffffffffffffff ffffffffffffffffffffffffffbdbf"
          }
          jobName={"Service & maintenance"}
          img={mainte}
        />
        <JobCard
          Descrption={
            "fdfdbdbdfdfffffffffffffff ffffffffffffffffff fffffffffffffffffffff ffffffffffffffffffffffffffbdbf"
          }
          jobName={"General Builder"}
          img={builder}
        />
        <JobCard
          Descrption={
            "fdfdbdbdfdfffffffffffffff ffffffffffffffffff fffffffffffffffffffff ffffffffffffffffffffffffffbdbf"
          }
          jobName={"House Extentions"}
          img={house}
        />
        <JobCard
          Descrption={
            "fdfdbdbdfdfffffffffffffff ffffffffffffffffff fffffffffffffffffffff ffffffffffffffffffffffffffbdbf"
          }
          jobName={"Security System"}
          img={security}
        />
      </div>
    </div>
  );
}

export default ServicesWorker;
