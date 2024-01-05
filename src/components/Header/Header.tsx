import React from 'react'
import {logo} from "./assets/index.ts"
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
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
    </div>
    </div>
   
    </>
   
  )
}

export default Header
