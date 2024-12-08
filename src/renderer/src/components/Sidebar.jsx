import React from 'react'
import { BadgePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const manage = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-kanban"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/></svg>

const Sidebar = () => {

  return (
        <nav className='hidden lg:flex lg:h-full bg-white shadow-md shadow-gray-50 w-full lg:col-span-2 p-5 col-span-8 justify-between items-center lg:flex-col lg:justify-start border-2 border-slate-100 '>
            <h1 className='text-2xl font-bold text-gray-700 p-5'>Dashboard</h1>
            <hr />
            <div className="flex lg:flex-col gap-5 mt-4 ">
                <Link className='w-full bg-gray-100 rounded-md lg:text-xl font-semibold ring-2 ring-gray-200 p-3 text-left text-gray-800 hover:ring-slate-900 hover:text-black focus:ring-slate-900 focus:text-black transition-all ease-in-out duration-300 flex  justify-between items-center gap-5' to={'/'}>Add Record <BadgePlus /> </Link>
                <Link className='w-full bg-gray-100 rounded-md lg:text-xl font-semibold ring-2 ring-gray-200 p-3 text-left text-gray-800 hover:ring-slate-900 hover:text-black focus:ring-slate-900 focus:text-black transition-all ease-in-out duration-300 flex  justify-between items-center gap-5'  to={'/records'} >Manage and View Records {manage} </Link>
            </div>
        </nav>
  )
}

export default Sidebar