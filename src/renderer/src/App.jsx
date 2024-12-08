import React, { useEffect, useState } from "react";
import Baptism from './components/Baptism'
import Personal from './components/Personal'
import Parents from './components/Parents'
import GodParents from './components/GodParents'
import Communion from './components/Communion'
import Marriage from './components/Marriage'
import Confirmation from './components/Confirmation'
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Records from "./pages/Records";
import Each from "./pages/Each";
import { ChevronLeft, ChevronLeftCircle, ChevronRight, RefreshCcw, RotateCw } from "lucide-react";

const App = () => {
  const nav=useNavigate()

  const [data,setData]=useState({
    baptism:{
      date:"",
      place:"",
      minister:"",
      name:"",
      signature:"",
      remark:"", 
    },
    personal:{
      dob:"",
      sex:"",
      name:"",
      surname:""
    },
    parents:{
      fname:"",
      fnation:"",
      fdomicile:"",
      foccupation:"",
      mname:""
    },
    godparents:{
      gfname:"",
      gfsurname:"",
      gfdomicile:"",
      gmname:"",
      gmsurname:"",
      gmdomicile:""
    },
    communion:{
      date:"",
      place:"",
      ministers:""
    },
    marriage:{
      date:"",
      place:"",
      witness1:"",
      witness2:"",
      minister:""
    },
    confirmation:{
      place:"",
      bishop:"",
      date:""
    }
})

const loadRecords = async () => {
  const data = await window.db.readAll();
  setResponseData(data)
  console.log(data);
  
  
};
const handleChange=(e)=>{
  e.preventDefault()
  const {name,value}=e.target
  const [section,key]=name.split(".");
  
  setData((prevData) => ({
    ...prevData,
    [section]: {
      ...prevData[section],
      [key]: value,
    },
  }));   
}

const submitData=async(e)=>{
  e.preventDefault()
  console.log(data);
  
  const hasEmptyValues = Object.values(data).some(section => 
      Object.values(section).some(value => value.trim() === '')
    );
  
    if (hasEmptyValues) {
      alert('Please fill in all fields before submitting');
      return;
    }
    else{
      await window.db.create(data);
      loadRecords();
      setData({
        baptism: {
          date: "",
          place: "",
          minister: "",
          name: "",
          signature: "",
          remark: "",
        },
        personal: {
          dob: "",
          sex: "",
          name: "",
          surname: "",
        },
        parents: {
          fname: "",
          fnation: "",
          fdomicile: "",
          foccupation: "",
          mname: "",
        },
        godparents: {
          gfname: "",
          gtsurname: "",
          gfdomicile: "",
          gmname: "",
          gmsurname: "",
          gmdomicile: "",
        },
        communion: {
          date: "",
          place: "",
          ministers: "",
        },
        marriage: {
          date: "",
          place: "",
          witness1: "",
          witness2: "",
          minister: "",
        },
        confirmation: {
          place: "",
          bishop: "",
          date: "",
        },
      });
    }
  

  
 }




  return (
    <>
      <div className="w-full   text-gray-800   grid grid-cols-8  ">
        
        
        <Sidebar />
        <div className="w-full flex   col-span-8 lg:col-span-6 flex-col lg:p-0  pb-20 pt-15 gap-20 items-center justify-center  lg:items-start lg:justify-start overflow-y-auto scrollbar-none ">
        <h1 className="bg-gray-900 text-white text-2xl md:text-2xl lg:text-3xl font-bold  col-span-8 p-5 w-full flex justify-between items-center h-fit  ">
        
        <div className="flex items-center gap-5">
            <button className="rounded-md  transition-all ease-in-out duration-300 bg-slate-700 text-white hover:bg-slate-800" onClick={()=>{nav(-1)}}><ChevronLeft size={30}/></button>
            <button className="bg-slate-700 text-white hover:bg-slate-800 rounded-md  transition-all ease-in-out duration-300" onClick={()=>{nav(1)}}><ChevronRight size={30}/></button>
            
          </div>
          Sacramental Records Management 
          <button className="bg-slate-700 text-white hover:bg-slate-800 rounded-md  transition-all ease-in-out duration-300 p-2" onClick={()=>{window.location.reload()}}><RotateCw size={30} /></button>
          
        </h1>
        <div className="w-full col-span-8 flex  gap-5 px-10 items-center lg:hidden ">
        <button className="text-xl font-bold bg-gray-100 p-2 rounded-md ring-1 ring-slate-700 hover:bg-white hover:ring-slate-900 hover:ring-2 transition-all ease-in-out duration-300" onClick={()=>nav('/')}>Add Records</button>
          <button className="text-xl font-bold bg-gray-100 p-2 rounded-md ring-1 ring-slate-700 hover:bg-white hover:ring-slate-900 hover:ring-2 transition-all ease-in-out duration-300" onClick={()=>nav('/records')}>Manage and view records</button>
        </div>
        <div className="w-full px-20">

            <Routes>
              <Route path="/" element={<Baptism data={data.baptism} func={handleChange}/>
              }/>
              <Route 
                path="/personals" 
                element={<Personal data={data.personal} func={handleChange}/>
              }
              />
              <Route 
                path="/parents" 
                element={<Parents data={data.parents} func={handleChange}/>
              }
              />
              <Route 
                path="/godparents"
                element={<GodParents data={data.godparents} func={handleChange}/>}
              />
              <Route
                path="/communion"
                element={<Communion data={data.communion} func={handleChange}/>}
              />
              <Route
                path="/marriage"
                element={<Marriage data={data.marriage} func={handleChange}/>}
              />
              <Route
                path="/confirmation"
                element={<Confirmation data={data.confirmation} func={handleChange}
                submition={submitData}
                />}
              />
              <Route
                path="/records"
                element={<Records/>}
              />
              <Route
              path="/each"
              element={<Each loadRecords={loadRecords}/>}
              />
              
            </Routes>
        </div>
          
  
        </div>
      </div>
    </>
  );
};

export default App;
