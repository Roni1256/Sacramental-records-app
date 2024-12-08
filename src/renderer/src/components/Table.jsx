import { ArrowUpRight, Delete, DeleteIcon, Trash } from "lucide-react";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import {useNavigate} from 'react-router-dom'


const Table = ({ data}) => {
  const nav=useNavigate()
 
  const [searchTerm, setSearchTerm] = useState("");
  

  const filteredData = data?.filter(
    (item) =>
      item.personal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.personal.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );
  const deleteAll=async()=>{
    if(confirm("Are you sure to delete all the records?")){
      await window.db.deleteAll();
      alert("Deleted all the records!")
    }
    else{
      console.log("cancel");
      return 
    }
  }

  return (
    <>
      <div className=" ring-1 dark:ring-white ring-slate-700 bg-gray-50 rounded-lg p-1 max-w-full overflow-auto">
        <div className="flex items-center justify-center p-4 border-b-2 bg-white gap-5">
          <input
            type="text"
            className="w-full sm:w-2/3 md:w-1/2 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="text-white bg-red-500 hover:bg-red-700 rounded-md p-2 flex items-center gap-5" onClick={deleteAll} >Delete all record<Trash size={20}/></button>
        </div>
        <div className="h-full max-h-[400px] overflow-y-auto w-full">
          <table className="min-w-full divide-y divide-gray-200 dark:text-slate-800">
            <thead className="sticky top-0 bg-white">
              <tr>
              <th
                  scope="col"
                  className="px-3 sm:px-6 py-3 text-start text-xs sm:text-sm font-bold uppercase hidden sm:table-cell"
                >
                  ID Number
                </th>
                <th
                  scope="col"
                  className="px-3 sm:px-6 py-3 text-start text-xs sm:text-sm font-bold uppercase"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 sm:px-6 py-3 text-start text-xs sm:text-sm font-bold uppercase"
                >
                  Surname
                </th>
                <th
                  scope="col"
                  className="px-3 sm:px-6 py-3 text-start text-xs sm:text-sm font-bold uppercase"
                >
                  Father's Name
                </th>
                <th
                  scope="col"
                  className="px-3 sm:px-6 py-3 text-start text-xs sm:text-sm font-bold uppercase hidden sm:table-cell"
                >
                  Date of Birth
                </th>
                <th
                  scope="col"
                  className="px-3 sm:px-6 py-3 text-start text-xs sm:text-sm font-bold uppercase"
                >
                  Sex
                </th>

                <th
                  scope="col"
                  className="px-3 sm:px-6 py-3 text-start text-xs sm:text-sm font-bold uppercase"
                >
                  Action
                </th>
                
              </tr>
            </thead>
            {data.length > 0 ? (
              <tbody className="divide-y divide-gray-200">
                {filteredData &&
                  filteredData.map((item) => (
                    
                    <tr key={item._id} className="dark:text-slate-800">
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm hidden sm:table-cell ">
                        {item.id}
                      </td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm font-medium">
                        {item.personal.name}
                      </td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm">
                        {item.personal.surname}
                      </td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm">
                        {item.parents.fname}
                      </td>

                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm hidden sm:table-cell">
                        {item.personal.dob}
                      </td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-center">
                        {item.personal.sex==='m'?"Male":"Female"}
                      </td>
                      <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-center">
                        <button className="text-black hover:text-blue-600 flex items-center gap-3 ring-2 rounded-md ring-slate-900 hover:ring-blue-600" onClick={()=>{nav('/each',{state:item})}}><ArrowUpRight size={20}/></button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan="5" className="py-4">
                    <h1 className="text-lg sm:text-xl font-bold text-center">
                      No data found!
                    </h1>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;


