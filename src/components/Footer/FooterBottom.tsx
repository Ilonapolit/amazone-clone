import React from 'react';
import { footerBottomItem } from '../../constants';

interface FooterBottomItem {
  id: number;
  title: string;
  descr: string;
}

const FooterBottom: React.FC = () => {
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div max-w-5xl mx-auto>
        <div className= "w-full grid grid-cols-7 gap-3 place-content-center text-gray-400">
          {footerBottomItem.map((item: FooterBottomItem) => (
            <div className='group cursor-pointer' key={item.id}>

              <h3 className='w-24 font-semibold text-[12px] group-hover:underLine
  text-[#DDD] Leading-3 mb-[2px]'>{item.title}</h3>
              <p className='w-24 tracking-tight  text-[12px] text-[#999] group-hover: underLine leading-3'>{item.descr}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;

