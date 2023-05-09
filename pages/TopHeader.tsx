import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";


const TopHeader = () => {
  const[shownav, setShownav] = useState(false)
  const handleNavbar = (): any =>{
    setShownav(!shownav);
  }
  return (
    <div className="m-auto w-[70%] max-lg:w-[100%] max-lg:p-2 max-2xl:w-[80%] max-xl:w-[90%]">
      <div className="flex py-5 space-x-6 max-lg:content-between">
        <h1 className="text-[#EB6D20] font-bold text-xl mr-[10%] ">E-commerce</h1>
        <div className="flex space-x-1 w-[75%] max-lg:flex max-lg:flex-col max-lg:text-right">
        <div className="flex w-[73%] bg-white rounded-3xl py-1 text-sm max-lg:text-right max-lg:order-2 max-lg:w-[100%] max-lg:mt-4">
          <select
            name="cars"
            id="cars"
            className="px-6 bg-[#F5F6F8] rounded-2xl ml-1"
          >
            <option value="volvo">All categories</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <input
            type="text"
            className="w-[70%] m-1 text-sm max-lg:w-[72%]"
            placeholder="Search anything "
          />
          <AiOutlineSearch className="m-2 text-lg" />
        </div>
          <div className="flex space-x-5 max-lg:order-1 max-lg:place-self-end ">
        <button className="bg-[#EB6D20] text-xs px-8 rounded-3xl font-bold text-white py-2 mx-2 ">
          Help
        </button>
        <div className="flex space-x-2 mt-2 ">
          <BsPerson className="text-2xl" />
          <p>Account</p>
        </div>
        <div className="flex space-x-2 mt-2">
          <BiShoppingBag className="text-2xl" />
          <p>Shoping</p>
        </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[9%] left-8 bg-white px-7 py-2 rounded-full hidden max-lg:block"><HiOutlineMenuAlt2 className="text-2xl" onClick={handleNavbar}/></div>
      <div className={`max-lg:absolute max-lg:top-[18%] max-lg:z-10 max-lg:transition-all max-lg:duration-300 max-lg:ease-in max-lg:w-0 max-lg:bg-[#FFF9F3] max-lg:overflow-hidden max-lg:h-[50%] ${shownav && "max-lg:w-[50%] max-lg:z-10"}`}>
        <ul className="flex text-sm space-x-16 pt-2 font-medium max-lg:flex-col max-lg:space-x-0">
          <li className="hover:text-[#EB6D20] cursor-pointer border-b-2 border-[#FFF9F3] pb-3 hover:border-b-2 hover:border-[#EB6D20] max-lg:my-2">
            Jewelry & Accessories
          </li>
          <li className="hover:text-[#EB6D20] cursor-pointer pb-3 border-b-2 border-[#FFF9F3] hover:border-b-2 hover:border-[#EB6D20] max-lg:my-2 ">
            Clothing & Shoes
          </li>
          <li className="hover:text-[#EB6D20] cursor-pointer pb-3 border-b-2 border-[#FFF9F3] hover:border-b-2 hover:border-[#EB6D20] max-lg:my-2  ">
            Home & Living
          </li>
          <li className="hover:text-[#EB6D20] cursor-pointer pb-3 border-b-2 border-[#FFF9F3] hover:border-b-2 hover:border-[#EB6D20] max-lg:my-2  ">
            Wedding & party
          </li>
          <li className="hover:text-[#EB6D20] cursor-pointer pb-3 border-b-2 border-[#FFF9F3] hover:border-b-2 hover:border-[#EB6D20] max-lg:my-2  ">
            Toys & Entertainment
          </li>
          <li className="hover:text-[#EB6D20] cursor-pointer pb-3 border-b-2 border-[#FFF9F3] hover:border-b-2 hover:border-[#EB6D20] max-lg:my-2  ">
            Art & Collectibles
          </li>
          <li className="hover:text-[#EB6D20] cursor-pointer pb-3 border-b-2 border-[#FFF9F3] hover:border-b-2 hover:border-[#EB6D20] max-lg:my-2  ">
            Carft Supplies & Tools
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
