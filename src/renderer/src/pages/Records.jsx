import React, { useEffect, useState } from 'react'
import Table from '../components/Table';
const Records = () => {
  const [responseData, setResponseData] = useState([]);

  const loadRecords = async () => {
    const data = await window.db.readAll();
    setResponseData(data)
    console.log(data);
    
    
  };
  useEffect(()=>{
    loadRecords()
  },[])
 
  return (
    <>
        <div className="p-10 col-span-6 h-full w-full relative">
            <h1 className='text-3xl font-bold text-slate-700 mb-5'>View and Manage records</h1>
            <Table data={responseData}/>
        </div>
    </>
  )
}

export default Records