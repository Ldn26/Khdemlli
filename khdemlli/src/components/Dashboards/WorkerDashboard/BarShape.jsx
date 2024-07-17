import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,

  ResponsiveContainer,
  Cell,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import {jwtDecode} from "jwt-decode"; // Correctly import jwtDecode

function BarShape() {
  const baseUrl = "http://127.0.0.1:8000/";
  const token = localStorage.getItem("authToken");
  const decodedToken = jwtDecode(token);
  const user_id = decodedToken.id;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fetchOrderChart = async () => {
    const res = await fetch(baseUrl + "/order/"+user_id +"/chart/");
    return res.json();
  };

  
  const {
    data: oo,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["chart"],
    queryFn: fetchOrderChart,
  });
 

  // Transform the fetched data into a format suitable for the chart
  const chartData = months.map((month, index) => {
    return {
      name: month,
      services: oo ? oo[month] : 0,
    };
  });
  
 
 

  return (
    <div className="mt-4 -ml-40"  style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer width="100%"  height="100%">
        <BarChart
          data={chartData} 
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
         
          
        >x``
          <CartesianGrid strokeDasharray="3 3"   />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          
          <Bar dataKey="services" fill="#8884d8">
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 0 ? "orange" : "orange"}
                stroke={index === 0 ? "orange" : "none"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarShape;
