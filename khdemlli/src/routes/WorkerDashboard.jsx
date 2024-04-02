import React from 'react'
// import { useContext } from "react";
// import { userContext } from '../contexts/AuthContext';
// import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SideBar from '../components/Dashboards/WorkerDashboard/SideBarWorker';
import ProfileWorker from "../components/Dashboards/WorkerDashboard/ProfileWorker"
function WorkerDashboard() {
    // const { setUser } = useContext(userContext);
  return (
    <div className='container mx-auto flex  w-full border  '>
       <SideBar />
        <Outlet />
        <ProfileWorker />
   
    </div>
  );
}

export default WorkerDashboard