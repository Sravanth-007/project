import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
     <Link to="https://sravanth-007.github.io/Edumoon2.o/#/">
        <Icon  imgUrl="data:image/png;base64,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" />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
<div>

    
      
      
        </div>
      </div>
    </div>
  )
}

export default Sidebar