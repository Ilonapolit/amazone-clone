import React, { useState } from 'react'
import {logo} from "./assets/index.ts"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchIcon from '@mui/icons-material/Search';
import { allItems } from '../../constants/index.ts';

const Header = () => {
    const [showAll,setShowALL]=useState(false)


  return (
    <>
    <div className='w-full bg-black text-white px-4 py-3 flex items-center gap-4'>
   <div className='headerHover'>
    <img className='w-24 mt-2' src={logo} alt="logo"/>
   </div>
   <div className='headerHover'>
        <LocationOnIcon/>
        <p className='text-sm text-lightText font-light flex flex-col'>Deliver to
        <span className='text-sm font-bold -mt-1
         text-whiteText'>Tbilisi</span></p>

     {/* Search.................... */}

    </div>
    <div className='h-10 rounded-md flex flex-grow relative'>

    <span onClick={()=> setShowALL(!showAll)} className='w-14 h-full bg-gray-200
    hover:bg-gray-300 cursor-pointer font-titleFont flex items-center
    justify-center'>All 
    <span><ArrowDropDownIcon/></span>
    </span>

    {
       showAll  && (
        <div>
            <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll
            overflow-x-hidden bg-white border-[1px] border-amazon_light
            text-black p-2 flex-col gap-1 z-50'>
               <li className='text-sm tracking-wide font-titleFont border-b-[1px]'>All Departments</li> 
               {
                  allItems.map((item)=>(
                     <li key={item.id}>{item.title}</li>
                  ))
               }   
            </ul>
        </div>
       )
    }
    <input className='h-full text-base text-black flex-grow outline-none border-none px-2'
  type='text'/>
     <span className='w-12 h-full flex items-center justify-center 
     bg-[#f3a847] text-black cursor-pointer rounded-tr-md'>
        <SearchIcon/>
     </span>
</div>


{/* Sign in ....................................... */}

<div className='flex flex-col items-start justify-center headerHover'>
   <p>Hello, sign in</p>
   <p>Accounts & Lists <span><ArrowDropDownIcon/></span></p>
</div>
    </div>
   





    </>
   
  )
}

export default Header
