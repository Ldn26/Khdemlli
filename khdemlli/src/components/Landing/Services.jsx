import React from 'react'
import JobCard from '../Services/JobCard'
import air from "../../assets/landing/air.png"
import { ImFileEmpty } from "react-icons/im";

function Services() {
  return (
    <div className="flex flex-col items-center bg-[#F4F4F4]">
      <div className="bg-white flex my-4 px-4 mt-6 items-center">
        <ImFileEmpty  className='text-orangeColor '/>
        <h2 className="text-blueColor whitespace-nowra text-lg my-4 text-mainfont ml-2 font-bold ">
          Our Services{" "}
        </h2>
      </div>
      <h1 className='text-4xl font-mainfont font-bold text-blueColor  '>Our Services</h1>
      <p className="text-grayColor my-2 mb-4 w-[900px] text-center text-sm">
        Lorem ipsum dolor sit amet consectetur <br /> adipisicin  elit. Libero deleniti
        autem laborum eius s earum
        praesent ium atit
        aspern
      </p>
      <div className=" flex flex-wrap justify-center  w-3/4 mx-auto   ">
        <JobCard
          Descrption={
            "fdfdbdbdfdfffffffffffffff ffffffffffffffffff fffffffffffffffffffff ffffffffffffffffffffffffffbdbf"
          }
          jobName={"Air Conditions"}
          img={air}
        />
        <JobCard
          Descrption={
            "fdfdbdbdfdfffffffffffffff ffffffffffffffffff fffffffffffffffffffff ffffffffffffffffffffffffffbdbf"
          }
          jobName={"Air Conditions"}
          img={air}
        />
        <JobCard
          Descrption={
            "fdfdbdbdfdfffffffffffffff ffffffffffffffffff fffffffffffffffffffff ffffffffffffffffffffffffffbdbf"
          }
          jobName={"Air Conditions"}
          img={air}
        />
        <JobCard
          Descrption={
            "fdfdbdbdfdfffffffffffffff ffffffffffffffffff fffffffffffffffffffff ffffffffffffffffffffffffffbdbf"
          }
          jobName={"Air Conditions"}
          img={air}
        />
        <JobCard
          Descrption={
            "fdfdbdbdfdfffffffffffffff ffffffffffffffffff fffffffffffffffffffff ffffffffffffffffffffffffffbdbf"
          }
          jobName={"Air Conditions"}
          img={air}
        />
        <JobCard
          Descrption={
            "fdfdbdbdfdfffffffffffffff ffffffffffffffffff fffffffffffffffffffff ffffffffffffffffffffffffffbdbf"
          }
          jobName={"Air Conditions"}
          img={air}
        />
      </div>
    </div>
  );
}

export default Services