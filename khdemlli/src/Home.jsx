import React from 'react'
import { useContext } from 'react'
import { userContext } from "./contexts/AuthContext";
import { Navigate } from 'react-router-dom';
import {Outlet } from "react-router-dom";
function Home() {
 const  {setUser} = useContext(userContext)

  return (
    <>
      <div>Home</div>
      <button
        onClick={() => {
          setUser(null);
          <Navigate to={"/login"} />;
        }}
      >
        log out
      </button>
      <Outlet />
    </>
  );
}

export default Home