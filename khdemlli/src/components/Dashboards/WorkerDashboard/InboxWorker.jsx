import {React,useEffect} from "react";
// import DataTable from "react-data-table-component";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";
import LoadingSpin from "react-loading-spin";
import { jwtDecode } from "jwt-decode";
import ava from "../../../assets/id/casq.svg";


function InboxWorker() {
  const baseUrl = "http://127.0.0.1:8000/api"; 
  const token = localStorage.getItem("authToken");
  const decodedToken = jwtDecode(token);
  const [notificationw, setNotificationw] = useState(null);
  const [Afterfiltre, setAfterFilter] = useState([]);
  const fetchNotification = async () => {
    const res = await fetch(
      "https://65fd9c189fc4425c65325ced.mockapi.io/khdemli/feed_back",
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
    );
    return res.json();
  };
  

  


  const handleFilter = (e) => {
    const filtredNotification =  notificationw?.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setAfterFilter(filtredNotification)
  
  };  
  //   const DeleteaNotification = async(id)=>{
  //     try {
  //    const res = await fetch(
  //    `https://65fd9c189fc4425c65325ced.mockapi.io/khdemli/feed_back/${id}`,
  //   {
  //      method : "DELETE"
  //   },z
  //  );
  //     }catch (error){
  //        console.error("Error deleting feedback:", error);
  //     }
  //   }

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["notificationw"],
    queryFn: fetchNotification,
    refetchInterval: 20000,
  });

   useEffect(() => {
     if (isSuccess && data) {
       setNotificationw(data);
     }
   }, [isSuccess, data]);


      useEffect(() => {
        if (isSuccess && data) {
          setAfterFilter(data);
        }
      }, [isSuccess, data]);


  // const  dataTable = data?.map((item)=>{
  //   return {
  //     name : item.name,
  //     Content : item.Comment,
  //     Time : item.City
  //   }
  // })
  //  const [search, setSearch] = useState(dataTable);

  //   const customStyles = {
  //     headRow: {
  //       styles: {},
  //     },
  //     headCells: {
  //       headCells: {
  //         style: {},
  //       },
  //     },
  //     cells: {
  //       style: {},
  //     },
  //     rows: {
  //       style: {
  //         cursor: "pointer",
  //         "&:hover": {
  //           backgroundColor: "rgba(0, 0, 0, 0.04)",
  //         },
  //       },
  //     },
  //   };
  //  const columns = [
  //   {
  //     name: "name",
  //     selector: (row) => row.name,
  //     sortable: true,
  //     style: {
  //       fontWeight: "bold",
  //       fontFamily: ["Mulish", "sans-serif"],
  //     },
  //   },
  //   {
  //     name: "Content",
  //     selector: (row) => row.Content,
  //     sortable: true,
  //     style: {
  //      fontSize: "12px",
  //       fontFamily: ["Mulish", "sans-serif"],
  //     },
  //   },
  //   {
  //     name: "Time",
  //     selector: (row) => row.Time,
  //     style: {
  //       fontSize: "10px",
  //       color: "#7E7E7E",
  //       fontFamily: ["Mulish", "sans-serif"],
  //     },
  //   },
  //   // {
  //   //   cell: (row) => (
  //   //     // <button onClick={() => DeleteaNotification(row.id)}>
  //   //     //   <MdDelete />
  //   //     // </button>
  //   //   ),
  //   //   allowOverflow: true,
  //   //   button: true,
  //   //   width: "56px",
  //   // },
  // ];
  // const  dataTable = data?.map((item)=>{
  //   return {
  //     name : item.name,
  //     Content : item.Comment,
  //     Time : item.City
  //   }
  // })
  //  const [search, setSearch] = useState(dataTable);

  //   const [selectedRows ,setSelectedRows]= useState([])
  //   const DeleteSelectedRow = () =>  {
  //     const updatedData = dataTable.filter((row) => {
  //     // compair accourding to the instances
  //    return !selectedRows.some((selectedRow) => JSON.stringify(selectedRow) === JSON.stringify(row));
  //     })
  //     setSearch(updatedData)
  //     setSelectedRows([])
  //   }

  return (
    <>
      {isSuccess && (
        <div className="w-3/5 flex flex-col">
          <div className="flex justify-between mt-2 items-center px-2 pt-2">
            <div className="mb-3 relative  ">
              <input
                type="text"
                placeholder="Search"
                 className="bg-[#F5F6FA] rounded-full p-[5px] pl-10 w-[400px] placeholder:"
                onChange={handleFilter}
              />
              <IoSearchSharp className="absolute top-[9px] left-[16px] text-grayColor " />
            </div>
            <div className="">
              <button
              //  onClick={DeleteSelectedRow}
              >
                <MdDelete className="mx-2 text-2xl text-red-500 hover:scale-110 hover:transition-all" />
              </button>
            </div>
          </div>
          <div className="flex flex-col p-2">
      {Afterfiltre.length > 0  &&   Afterfiltre?.map((el,index)=>{
           return (
             <div
               key={index}
               className="flex items-cente bg-white p-2 border-b border-gray-100 rounded-xl  hover:bg-gray-50 cursor-pointer"
             >
               {/* <img
          src={user_id !== id ? reciver_avatar : sender_avatar}
          className="mr-1 rounded-full w-[40px] h-[40px]"
          alt=""
        /> */}
               <img
                 src={el.avatar || ava}
                 className="mr-1 rounded-full w-[40px] h-[40px]"
                 alt=""
               />
               <div className="flex flex-col mx-2">
                 <h1 className="text-[14px] text-black font-semibold ">
                   {el.name || " youcef laidani"}
                 </h1>
                 <p className="-mt-1 text-[12px] w-[500px] h-[20px] text-gray-400  overflow-hidden">
                   {el.messages && el.messages.length > 0
                  ? el.messages[0]
                     : "No messages"}
                 </p>
               </div>
             </div>
           );
      })
      }
        
           
           
           
          </div>

          {/* <DataTable
            className="w-full"
            customStyles={customStyles}
            highlightOnHover
            columns={columns}
            selectedrows={selectedRows}
            onSelectedRowsChange={(newSelectedRows) => {     
               setSelectedRows(newSelectedRows.selectedRows);
            }}
            data={search || dataTable}
            pagination
            responsive
            selectableRows
            noTableHead // no header
            progressPending={isLoading}
          ></DataTable> */}
        </div>
      )}
      {isError && (
        <div className="flex w-full items-center ">
          <BiSolidError className="text-red-400 text-xl mx-4" />
          <p className="text-red-400 text-lg">Opps , Error fetching data </p>
        </div>
      )}
      {isLoading && (
        <div className="flex  w-3/5 flex-col-reverse  items-center">
          <div className="text-blueColor text-xl font-semibold mx-2 "> Loading data ... </div>
          <LoadingSpin
            className=""
            duration="2s"
            width="10px"
            timingFunction="ease-in-out"
            direction="alternate"
            size="50px"
            primaryColor="blue"
            secondaryColor="#7E7E7E"
            numberOfRotationsInAnimation={2}
          />
        </div>
      )}
    </>
  );
}

export default InboxWorker;
