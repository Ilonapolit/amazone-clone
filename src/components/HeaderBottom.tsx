import React from 'react';

interface HeaderBottomProps {
  title?: string;
}

const HeaderBottom: React.FC<HeaderBottomProps> = (props) => {
return (
  <div className='w-full px-4 h-[36px] bg-amazon_light
   text-whiteText flex items-center'>
    Hello
  </div>
)
}

export default HeaderBottom; 


