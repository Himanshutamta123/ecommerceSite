import React from "react";
import Image from "next/image";
import rectangle from "./images/Rectangle25.png";
import rectangle27 from "./images/Rectangle27.png";
import rectangle29 from "./images/Rectangle29.png";
import rectangle31 from "./images/Rectangle31.png";
import rectangle33 from "./images/Rectangle33.png";
import rectangle35 from "./images/Rectangle35.png";
import rectangle37 from "./images/Rectangle37.png";
import rectangle39 from "./images/Rectangle39.png";
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';

const sellerData = [
  {
    img: rectangle,
    title: "Craft Kits",
  },
  {
    img: rectangle27,
    title: "Throw Pillows",
  },
  {
    img: rectangle29,
    title: "Natural Glass",
  },
  {
    img: rectangle31,
    title: "Self-care",
  },
  {
    img: rectangle33,
    title: "Gift Ideas",
  },
  {
    img: rectangle35,
    title: "Wall Decor",
  },
  {
    img: rectangle37,
    title: "Wedding",
  },
  {
    img: rectangle39,
    title: "Life Style",
  },
];
const Seller = () => {
    return (
        <>
    <div className="m-auto w-[70%] my-14 relative max-xl:w-[98%] max-2xl:w-[80%] ">
        <GrFormPrevious className='bg-gray-300 h-12 w-12 rounded-full font-thin p-1 -ml-24 mt-32 absolute max-lg:hidden'/>
      <h2 className="text-left font-semibold text-xl">
        Find things you'll love. Support independent sellers.
      </h2>
      <p className="text-left text-sm font-semibold text-[#9A9A9A] pt-2 mb-8">
        Only on polka.
      </p>
      <div className="flex space-x-11 max-lg:space-x-5">
      {sellerData.map((item): any => {
          console.log(item);
          return (
              <div className="">
            <div className="drop-shadow-lg shadow-gray-800 w-[100%] bg-white rounded-lg">
              <Image src={item.img} alt="rectangle" className="p-2 "/>
            </div>
            <h2 className="mt-8 text-center font-semibold text-[#3E3E3E]">
              {item.title}
            </h2>
          </div>
        );
    })}
      </div>
    <GrFormNext className='bg-gray-300 h-12 w-12 rounded-full font-thin p-1 absolute top-32 -right-24 max-lg:hidden'/>
    </div>
    </>
  );
};

export default Seller;
