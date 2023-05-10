import React from "react";
import Image from "next/image";
import rectangle from "../images/Rectangle25.png";
import rectangle27 from "../images/Rectangle27.png";
import rectangle29 from "../images/Rectangle29.png";
import rectangle31 from "../images/Rectangle31.png";
import rectangle33 from "../images/Rectangle33.png";
import rectangle35 from "../images/Rectangle35.png";
import rectangle37 from "../images/Rectangle37.png";
import rectangle39 from "../images/Rectangle39.png";
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
    <div className="m-auto w-[94%] my-14 relative max-w-7xl">
        <GrFormPrevious className='bg-gray-300 h-12 w-12 rounded-full font-thin p-1 -left-24 top-32 absolute max-2xl:hidden max-2xl:-left-16'/>
      <h2 className="text-left font-semibold text-xl">
        Find things you'll love. Support independent sellers.
      </h2>
      <p className="text-left text-sm font-semibold text-[#9A9A9A] pt-2 mb-8">
        Only on polka.
      </p>
      <div className="grid grid-cols-8 gap-11 max-md:grid-cols-4 max-lg:gap-2 max-xl:gap-5 max-md:gap-14  max-sm:grid-cols-2 ">
      {sellerData.map((item): any => {
          console.log(item);
          return (
              <div className="">
            <div className="drop-shadow-lg shadow-gray-800 bg-white rounded-lg max-sm:w-32">
              <Image src={item.img} alt="rectangle" className="p-2 "/>
            </div>
            <h2 className="mt-8 text-center font-semibold text-[#3E3E3E] max-sm:mt-2">
              {item.title}
            </h2>
          </div>
        );
    })}
      </div>
    <GrFormNext className='bg-gray-300 h-12 w-12 rounded-full font-thin p-1 absolute top-32 -right-24 max-2xl:hidden max-2xl:-right-16 '/>
    </div>
    </>
  );
};

export default Seller;
