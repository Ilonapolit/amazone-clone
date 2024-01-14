import React from 'react';

interface SideNavContentProps {
  title: string;
  one: string;
  two: string;
  three: string;
}

const SideNavContent: React.FC<SideNavContentProps> = ({ title, one, two, three }) => {
  return (
    <div>
      <h3 className='text-lg font-titleFont font-semibold mb-1 px-6'>
        {title}
      </h3>
      <ul>
        <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>
          {one}
        </li>
      </ul>
      <ul>
        <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>
          {two}
        </li>
      </ul>
      <ul>
        <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>
          {three}
        </li>
      </ul>
    </div>
  );
}

export default SideNavContent;

