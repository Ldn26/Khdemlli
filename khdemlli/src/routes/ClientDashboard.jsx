import React from 'react'
import { useContext } from "react";
import { userContext } from '../contexts/AuthContext';
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SideBar from '../components/Dashboards/ClientDashboard/SideBar';
import Profile from '../components/Dashboards/ClientDashboard/Profile';
function ClientDashboard() {
  const  setUser  = useContext(userContext);

  return (
    <>
    <SideBar/>
      <div>ClientDash</div>
      <button
        onClick={() => {
          setUser(null);
          <Navigate to={"/login"} />;
        }}
      ></button>
      <Profile/>
      <Outlet/>
    </>
  );
}

export default ClientDashboard