import React from "react";
import DataTable from "react-data-table-component";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";
import { RiMailDownloadFill } from "react-icons/ri";
import LoadingSpin from "react-loading-spin";





function InboxWorker() {

  const fetchNotification = async () => {
    const res = await fetch(
      "https://65fd9c189fc4425c65325ced.mockapi.io/khdemli/feed_back"
    );
    return res.json();
  };
 

//   const DeleteaNotification = asy.nc(id)=>{
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

  const {data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["notificationw"],
    queryFn: fetchNotification,
  });
    const customStyles = {
      headRow: {
        styles: {},
      },
      headCells: {
        headCells: {
          style: {},
        },
      },
      cells: {
        style: {},
      },
      rows: {
        style: {
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        },
      },
    };
   const columns = [
    {
      name: "name",
      selector: (row) => row.name,
      sortable: true,
      style: {
        fontWeight: "bold",
        fontFamily: ["Mulish", "sans-serif"],
      },
    },
    {
      name: "Content",
      selector: (row) => row.Content,
      sortable: true,
      style: {
       fontSize: "12px",
        fontFamily: ["Mulish", "sans-serif"],
      },
    },
    {
      name: "Time",
      selector: (row) => row.Time,
      style: {
        fontSize: "10px",
        color: "#7E7E7E",
        fontFamily: ["Mulish", "sans-serif"],
      },
    },
    // {
    //   cell: (row) => (
    //     // <button onClick={() => DeleteaNotification(row.id)}>
    //     //   <MdDelete />
    //     // </button>
    //   ),
    //   allowOverflow: true,
    //   button: true,
    //   width: "56px",
    // },
  ];
  const  dataTable = data?.map((item)=>{
    return {
      name : item.name,
      Content : item.Comment,
      Time : item.City
    } 
  })
   const [search, setSearch] = useState(dataTable);
   const handleFilter = (e) => {
    const newData = dataTable.filter((row) => {
      return row.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setSearch(newData);

  };
    const [selectedRows ,setSelectedRows]= useState([])
    const DeleteSelectedRow = () =>  {  
      const updatedData = dataTable.filter((row) => {
      // compair accourding to the instances      
     return !selectedRows.some((selectedRow) => JSON.stringify(selectedRow) === JSON.stringify(row));
      })   
      setSearch(updatedData)
      setSelectedRows([])
    }
  return (
    <>
      {isSuccess && (
        <div className="border w-3/5">
          <div className="flex justify-between items-center px-2 pt-2">
            <div className="mb-3 relative  ">
              <input
                type="text"
                placeholder="Search "
                className="bg-[#F5F6FA] rounded-full p-[5px] pl-10 w-[300px] placeholder:"
                onChange={handleFilter}
              />
              <IoSearchSharp className="absolute top-[9px] left-[16px] text-grayColor " />
            </div>
            <div className="flex items-center justify-around">
              <button onClick={DeleteSelectedRow} >
                <MdDelete className="mx-2 text-2xl text-red-500 hover:scale-110 hover:transition-all" />
              </button>
              <RiMailDownloadFill className="text-2xl mx-2 " />
            </div>
          </div>
          <DataTable
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
          ></DataTable>
        </div>
      )}
      {isError && (
        <div className="flex w-full items-center ">
          <BiSolidError className="text-red-400 text-xl mx-4" />
          <p className="text-red-400 text-lg">Opps , Error fetching data </p>
        </div>
      )}
      {isLoading && (
        <div className="flex w-full flex-col-reverse mt-20 items-center">
          <div className="text-blueColor text-2xl mx-2"> Loading data ... </div>
          <LoadingSpin
            className="mx-2 mt-2"
            duration="2s"
            width="20px"
            timingFunction="ease-in-out"
            direction="alternate"
            size="100px"
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
