import React from 'react'
import { useContext } from "react";
import { userContext } from '../contexts/AuthContext';
import { Outlet } from "react-router-dom";
import ProfileClient from '../components/Dashboards/ClientDashboard/ProfileClient';
import SideBarClient from '../components/Dashboards/ClientDashboard/SideBarClient';
function ClientDashboard() {
  const  setUser  = useContext(userContext);

  return (
    <div className="container  mx-auto flex  w-full ">
      <SideBarClient />
      <Outlet />
      <ProfileClient />
    </div>
  );
}

export default ClientDashboard