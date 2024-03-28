import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkerForm from '../SignUp/worker/WorkerForm'
import ClientForm from "./client/ClientForm";

function Tab() {
  return (
    <>
      <h1 className="text-center font-mainfont font-bold  -my-2 text-blueColor">Join Us as : </h1>
      <Tabs defaultValue="client" className="w-[600px]  mt-5 mx-auto mb-20">
        <TabsList className="w-full bg-orangeColor text-white flex items-center justify-center ">
          <TabsTrigger value="client" className="w-1/2 font-bold ">
            Client{" "}
          </TabsTrigger>
          <TabsTrigger value="worker" className="w-1/2 font-bold ">
            Worker
          </TabsTrigger>
        </TabsList> 
        <TabsContent value="client"  >
          <ClientForm />
        </TabsContent>
        <TabsContent value="worker">
          <WorkerForm />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default Tab;
