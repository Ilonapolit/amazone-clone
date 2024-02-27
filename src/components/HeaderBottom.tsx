import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SideNavContent from './Header/SideNavContent'; 
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetProducts } from '../utils/GetProducts';



interface HeaderBottomProps {
  title?: string;
}

const HeaderBottom: React.FC<HeaderBottomProps> = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  async function getCategories() {
    try {
      const resp = await axios.get("http://localhost:3000/product-category");
      setCategories(resp.data);
      console.log('fhfhfhfhfh')
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);





  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-whiteText flex items-center relative'>
      <ul className='flex items-center gap-2 text-sm tracking-wide'>
        <li onClick={openSidebar} className='headerHover flex items-center gap-1'>
          <MenuIcon /> All
          <div className='flex items-between w-full'>
      {categories.map((category:any) => (
        <div  key={category.id} onClick={() => navigate(`/${category.name}`)}>
          {category.name}
        </div>
      ))}
    </div>
        </li>
    
      </ul>

      {/* Sidebar */}
      {sidebar && (
        <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_light bg-opacity-50 z-50'>
          <div className='w-[350px] h-full bg-white border border-black'>
            <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
              <h3>Hello, Sign In</h3>
            </div>

            {/* Usage of SideNavContent */}
            <SideNavContent
              title="Digital Content"
              one="Amazon Music"
              two="E-books"
              three="Amazon Appstore"
            />
           <SideNavContent
              title="Shop by Department"
              one="Electronics"
              two="Computers"
              three="Smart Home"
            />
                <SideNavContent
              title="Features"
              one="Gift Crads"
              two="Amazon Lives"
              three="Amazon Appstore"
            />
                <SideNavContent
              title="Help & Settings"
              one="Your Account"
              two="Customer Service"
              three="Contact Us"
            />
          </div>

          <span
            onClick={closeSidebar}
            className='cursor-pointer absolute top-0 left-[360px] w-10 h-10
            text-black flex items-center justify-center border bg-gray-200 hover:bg-red-600'
          >
            <CloseIcon />
          </span>
        </div>
      )}
      <GetProducts/>
    </div>
  );
};

export default HeaderBottom;