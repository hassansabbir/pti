
import React from 'react';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
      <div className="flex  justify-around items-center navbar lg:fixed bg-transparent  w-full top-0  bg-blue backdrop-filter backdrop-blur-2xl  border-b border-gray-200 z-20 font-[Poppins]">
        
  <div className=" ">
    
    <h1 className='lg:text-4xl text-2xl font-extrabold  font-[Poppins] me-1 '>pti.</h1>
  </div>

  <div className="  ">
    {/* search bar  */}
  <div className='max-w-xl '>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full lg:w-40 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer h-full   w-full outline-none text-sm text-gray-700 lg:pr-2"
        type="text"
        id="search"
        placeholder="Search AudioBook.." /> 
    </div>
</div>

    <ul className="menu menu-horizontal px-1">
      <li >
        <details>
          <summary className='lg:font-semibold  lg:text-xl text-lg border lg:ms-2 my-1'>Menu</summary>
          <ul className=" lg:text-lg text-sm  lg:p-4  ">
            <li className=' lg:p-2 p-1'>Home </li>
            <li className=' lg:p-2 p-1'>Details </li>
            <li className=' lg:p-2 p-1'>Category </li>
            <li className=' lg:p-2 p-1'>My Favorites </li>
            <li className=' lg:p-2 p-1'>Profile </li>
            <li className=' lg:p-2 p-1'>login/sign up </li>
          </ul>
        </details>
      </li>
     
    </ul>
  </div>

  <div className="  sr-only sm:not-sr-only">
  < CgProfile  className="text-5xl font-extrabold text-orange-600" />
  </div>
</div>
    
    );
};

export default Navbar;