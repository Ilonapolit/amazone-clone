

import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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

  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-whiteText flex items-center'>
      <ul className='flex items-center gap-2 text-sm tracking-wide'>
        <li onClick={openSidebar} className='headerHover flex items-center gap-1'>
          <MenuIcon /> All
        </li>
        <li className='headerHover'>Today's deals</li>
        <li className='headerHover'>Customer Service</li>
        <li className='headerHover'>Registry</li>
      </ul>

      {/* Sidebar */}
      {sidebar && (
        <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_light bg-opacity-50'>
          <div className='w-[350px] h-full bg-white border border-black'>
            <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
              <h3>Hello, Sign In</h3>
              <ul>
                <li className='flex items-center justify-between cursor-pointer'>Amazon Music</li>
              </ul>
            </div>
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
    </div>
  );
};

export default HeaderBottom;
