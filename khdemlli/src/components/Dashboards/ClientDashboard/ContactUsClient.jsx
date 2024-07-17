import React from "react";
import BannerWoker from "./ContactUsWorker/BannerWorker";
import GetinTouchWorker from "./ContactUsWorker/GetInTouchWorker";

import ContactDetailsWorker from "./ContactUsWorker/ContactDetailsWorker";


function ContactUsClient() {
  return (
    <div className="w-3/5 container  mx-auto ">
  <BannerWoker content={"Contact Us "}/>
   <ContactDetailsWorker/>
      <GetinTouchWorker /> 
    </div>
  );
}

export default ContactUsClient;
