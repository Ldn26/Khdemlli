import React, { useEffect, useState } from "react";
import { FaComments } from "react-icons/fa6";
import icon from "../../../assets/id/casq.svg";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoMdClose } from "react-icons/io";
import StarRatings from "react-star-ratings";
function ClientNotification({
  content,
  image,
  id,
  status,
  time,
  handelDeleteNotification,
})
 {
  const [feedback, setFeedback] = useState("");
  const baseUrl = "http://127.0.0.1:8000/";

  const submitFeed = async () => {
    const object = {
      
      notification_id: id,
      content: feedback,
     number_of_stars: rating,
      //done or refused or accepted
    };
    console.log(object);
    console.log(JSON.stringify(object));

    try {
      const response = await fetch(`${baseUrl}api/send_feedback/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });

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
        title: "Your Rate Has Been Sent Successfully",
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
  const token = localStorage.getItem("authToken");
  const decodedToken = jwtDecode(token);
  const user_id = decodedToken.id;
  const [rating, setRating] = useState(0);
  const changeRating = (newRating) => {
    setRating(newRating);
  };


  return (
    <div className="my-6 ml-4 w-[270px] relative hover:bg-gray-50 hover:scale-105 transition-all pt-4 px-2 shadow shadow-orangeColor">
      <button
        className="absolute right-2 opacity-60 top-2 text-[16px]"
        onClick={() => handelDeleteNotification(id)}
      >
        <IoMdClose />
      </button>
      <div className="flex items-center">
        <img
          src={icon || image}
          className="w-[40px] h-[40px] rounded-full mr-3"
          alt="client image"
        />
        <div className="flex flex-col">
          <h1 className="mb-2 font-semibold font-mainfont w-[200px]">
            {content}
          </h1>
          <p className="-mt-2 text-xs text-gray-400">{time}</p>
        </div>
      </div>

      <div className="flex justify-end p-2">
        {status === "accepted" && (
          <button className="p-2 bg-orangeColor hover:bg-blueColor hover:text-white text-blueColor font-semibold">
            <div className="flex items-center justify-around">
              <h1>Send Message</h1>
              <FaComments className="ml-3 text-xl" />
            </div>
          </button>
        )}
        {status === "done" && (
          <Dialog>
            <DialogTrigger className="text-sm flex mt-4 ml-10 h-7 whitespace-nowrap rounded bg-orangeColor w-fit text-blueColor hover:bg-blueColor duration-500 hover:text-orangeColor font-semibold px-3 py-1">
              Give him a feedback
            </DialogTrigger>
            <DialogContent className="p-10  w-[600px] h-[270px]">
              <DialogHeader>
                <DialogTitle className="text-blueColor -mt-7 -ml-5 font-bold">
                  Your Service Rating
                </DialogTitle>
                <DialogDescription className="-ml-5">
                  <div className="flex flex-col">
                    <div className="w-fit my-1 ">
                      <StarRatings
                        rating={rating}
                        starRatedColor="#FFB342"
                        changeRating={changeRating}
                        numberOfStars={5}
                        starDimension="30px"
                        starSpacing="0px"
                        starSelectingHoverColor="orange"
                        name="rating"
                      />
                    </div>

                    <label
                      htmlFor="feed"
                      starSpacing="5px"
                      className="text-lg text-blueColor font-bold whitespace-nowrap mb-2"
                    >
                      Additional feedback
                    </label>
                    <textarea
                      id="feed"
                      placeholder="If you have any additional feedback, please type it in here..."
                      onChange={(e) => setFeedback(e.target.value)}
                      cols={20}
                      className="p-2 font-semibold outline-none hover:outline border-gray-500 border resize-none rounded-xl w-[450px] h-24"
                    />
                    <button
                      onClick={submitFeed}
                      className="text-sm flex mt-2   hover:scale-110 transition-all whitespace-nowrap  w-fit text-white bg-blueColor hover:bg-blueColor duration-500  scale-105  rounded-full font-semibold px-4 py-2"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}

export default ClientNotification;
