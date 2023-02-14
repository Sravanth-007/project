import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useStateContext } from '../context';
import { CustomButton } from './';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input type="password" placeholder="Enter Password" id="password" className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />
        
        
       {/* <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
        <img src={search} alt="search" className="w-[15px] h-[15px] object-contain"/>
        </div>*/}
<div id="mybtn">
         <CustomButton
          btnType="button"
          title={address ? 'Create' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if(address) document.getElementById("mybtn").addEventListener("click",myFunction)
            else connect()
            function myFunction(){
              let password=document.getElementById("password").value;
              if(password==="sai")
              {
                navigate('create-campaign')
               
            document.getElementById("password").value = ''
              }
              
            }
           
          }}
        
          />
          </div>
        
        
      </div>

      <div className="sm:flex hidden flex-row justify-end gap-4">
       {/* <CustomButton 
          btnType="button"
          title={address ? 'Create a campaign' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if(address) navigate('create-campaign')
            else connect()
          }}
        />*/}

        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={"data:image/png;base64,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"} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>

      {/* Small screen navigation */}
     
        <div className="sm:hidden flex justify-between items-center relative">
        <Link to="https://sravanth-007.github.io/Edumoon2.o/#/">
        <div className="w-[60px] h-[60px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={"data:image/png;base64,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"} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
          </Link>

          <img 
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
            <ul className="mb-4">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
                  onClick={() => {
                    setIsActive(link.name);
                    setToggleDrawer(false);
                    navigate(link.link);
                  }}
                >
                  <img 
                    src={link.imgUrl}
                    alt={link.name}
                    className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                  />
                  <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>


           {/* <div className="flex mx-4">
            <CustomButton 
              btnType="button"
              title={address ? 'Create a campaign' : 'Connect'}
              styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
              handleClick={() => {
                if(address) navigate('create-campaign')
                else connect();
              }}
            />
            </div>




            <div className="flex mx-4">
            <CustomButton 
              btnType="button"
              title={address ? 'Create a campaign' : 'Connect'}
              styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
              handleClick={() => {
                if(address) navigate('create-campaign')
                else connect();
              }}
            />
            </div>*/}
          </div>
        </div>
    </div>
  )
}

export default Navbar