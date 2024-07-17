import React from 'react'
import { Outlet } from 'react-router-dom'
function ServiceRequest() {
  return (
    <div className="w-3/5  mx-auto relative container">
      <Outlet  />
    </div>
  );
}

export default ServiceRequest