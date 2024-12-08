import { Trash } from 'lucide-react';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Each({loadRecords}){
    const data=useLocation().state;
    const nav=useNavigate()
    const styles={
      container:'h-screen w-full top-0 left-0 backdrop-blur-md flex items-center justify-center absolute p-20',
      p:'',
      h2:''
    }
    const handleDelete = async (id) => {
      await window.db.delete(id);
      nav(-1)
      loadRecords();
    };
    return <>
  
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <div className="border-b pb-4 mb-4">
            <h1 className='text-3xl font-bold text-gray-800'>ID:{data?.id||'-'}</h1>
          <h1 className="text-3xl font-bold text-gray-800">Personal Information</h1>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h2 className="text-sm text-gray-600">Name</h2>
              <p className="text-lg font-medium">{data?.personal?.name || '-'}</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-600">Surname</h2>
              <p className="text-lg font-medium">{data?.personal?.surname || '-'}</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-600">Date of Birth</h2>
              <p className="text-lg font-medium">{data?.personal?.dob || '-'}</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-600">Sex</h2>
              <p className="text-lg font-medium">{data?.personal?.sex || '-'}</p>
            </div>
          </div>
        </div>
  
        <div className="border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Baptism Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm text-gray-600">Date</h3>
              <p className="text-lg font-medium">{data?.baptism?.date || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Place</h3>
              <p className="text-lg font-medium">{data?.baptism?.place || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Minister</h3>
              <p className="text-lg font-medium">{data?.baptism?.minister || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Signature</h3>
              <p className="text-lg font-medium">{data?.baptism?.signature || '-'}</p>
            </div>
          </div>
        </div>
  
        <div className="border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Parents Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm text-gray-600">Father's Name</h3>
              <p className="text-lg font-medium">{data?.parents?.fname || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Father's Nationality</h3>
              <p className="text-lg font-medium">{data?.parents?.fnation || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Father's Domicile</h3>
              <p className="text-lg font-medium">{data?.parents?.fdomicile || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Father's Occupation</h3>
              <p className="text-lg font-medium">{data?.parents?.foccupation || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Mother's Name</h3>
              <p className="text-lg font-medium">{data?.parents?.mname || '-'}</p>
            </div>
          </div>
        </div>
  
        <div className="border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Godparents</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm text-gray-600">Godfather's Name</h3>
              <p className="text-lg font-medium">{data?.godparents?.gfname || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Godfather's Surname</h3>
              <p className="text-lg font-medium">{data?.godparents?.gfsurname || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Godfather's Domicile</h3>
              <p className="text-lg font-medium">{data?.godparents?.gfdomicile || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Godmother's Name</h3>
              <p className="text-lg font-medium">{data?.godparents?.gmname || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Godmother's Surname</h3>
              <p className="text-lg font-medium">{data?.godparents?.gmsurname || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Godmother's Domicile</h3>
              <p className="text-lg font-medium">{data?.godparents?.gmdomicile || '-'}</p>
            </div>
          </div>
        </div>
  
        <div className="border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Communion</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm text-gray-600">Date</h3>
              <p className="text-lg font-medium">{data?.communion?.date || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Place</h3>
              <p className="text-lg font-medium">{data?.communion?.place || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Ministers</h3>
              <p className="text-lg font-medium">{data?.communion?.ministers || '-'}</p>
            </div>
          </div>
        </div>
  
        <div className="border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Marriage</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm text-gray-600">Date</h3>
              <p className="text-lg font-medium">{data?.marriage?.date || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Place</h3>
              <p className="text-lg font-medium">{data?.marriage?.place || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Witness 1</h3>
              <p className="text-lg font-medium">{data?.marriage?.witness1 || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Witness 2</h3>
              <p className="text-lg font-medium">{data?.marriage?.witness2 || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Minister</h3>
              <p className="text-lg font-medium">{data?.marriage?.minister || '-'}</p>
            </div>
          </div>
        </div>
  
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirmation</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm text-gray-600">Date</h3>
              <p className="text-lg font-medium">{data?.confirmation?.date || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Place</h3>
              <p className="text-lg font-medium">{data?.confirmation?.place || '-'}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Bishop</h3>
              <p className="text-lg font-medium">{data?.confirmation?.bishop || '-'}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center">
          <button className='flex gap-20 items-center justify-center bg-red-600 hover:bg-red-800 text-white p-4 rounded-md mt-6' onClick={()=>{handleDelete(data?.id)}}>Delete Record <Trash size={20}/></button>
        </div>
      </div>
    
  </>  
  }

export default Each