import React from "react";
import JobCard from "../../../Services/JobCard";

import paint from "../../../../assets/landing/air.png";

import mainte from "../../../../assets/services/maintenance.png";

import electric from "../../../../assets/services/electric.png";
import builder from "../../../../assets/services/builder.png";
import house from "../../../../assets/services/house.png";
import security from "../../../../assets/services/security.png";
import { ImFileEmpty } from "react-icons/im";
import ServiceCard from "./ServiceCard";
function ServicesWorker() {
  return (
    <div className="flex flex-col mt-0 items-center pb-10 ">
      <div className="bg-white flex my-4 px-4    items-center">
        <ImFileEmpty className="text-orangeColor " />
        <h2 className="text-blueColor whitespace-nowra text-lg text-mainfont ml-2 font-bold ">
          Our Services{" "}
        </h2>
      </div>
      <h1 className="text-4xl font-mainfont font-bold text-blueColor  ">
        Our Services
      </h1>
      <p className="text-grayColor my-2 mb-4 w-[300px] text-center text-sm md:w-[500px]">
        We Provide Services in these fields
      </p>
      <div className="  flex flex-wrap justify-center  mx-auto  ">

        <ServiceCard
          Descrption={"fdfdbdbdfdfffff fffffbdbf"}
          jobName={"Electrical installlation "}
          img={electric}
        />
        <ServiceCard
          Descrption={"fdfdbdbdfdfffff fffffbdbf"}
          jobName={"Electrical installlation "}
          img={electric}
        />
          <ServiceCard
          Descrption={
            "fdfdbdbdfdfffffffffffffff fffff"
          }
          jobName={"Service & maintenance"}
          img={mainte}
        />
         <ServiceCard
          Descrption={
            "fdfdbdbdfdfffffffffffffff ffffffffffffbdbf"
          }
          jobName={"General Builder"}
          img={builder}
        />
    <ServiceCard
          Descrption={
            "fdfdbdbdf dfffffffff ffffff fffffffff fff ffffffffffffffffbdbf"
          }
          jobName={"House Extentions"}
          img={house}
        />
  <ServiceCard
          Descrption={
            "fdfdbdbdfdfff  fffff ffbd d er gdf grdf"
          }
          jobName={"Security System"}
          img={security}
        />
      </div>
    </div>
  );
}

export default ServicesWorker;
