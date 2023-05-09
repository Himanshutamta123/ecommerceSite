// import React from 'react'
import Image from "next/image";
import rectangle47 from "./images/Rectangle47.png";
import rectangle49 from "./images/Rectangle49.png";
import rectangle51 from "./images/Rectangle51.png";
import rectangle53 from "./images/Rectangle53.png";
import rectangle55 from "./images/Rectangle55.png";
import rectangle57 from "./images/Rectangle57.png";
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';


const pickData = [
  {
    img: rectangle47,
    para: " Distressed Tote Leather Bag Leather Bag",
    mrp: "216,27$",
    title: "Mordern Farmhouse",
  },
  {
    img: rectangle49,
    para: "Womens Cognac Leather Elastic Straps",
    mrp: "195,13$",
    title: "Electic Decor",
  },
  {
    img: rectangle51,
    para: " Distressed Tote Leather Bag Leather Bag",
    mrp: "910,76$",
    title: "Polka Boho Decor",
  },
  {
    img: rectangle53,
    para: "High Top Canvas Shoes Collection",
    mrp: "341,02$",
    title: "Minimalist Style",
  },
  {
    img: rectangle55,
    para: "Rose Gold Moissanite Vintage Wedding Ring Set",
    mrp: "3.344,13$",
    title: "Anniversary Gift",
  },
  {
    img: rectangle57,
    para: "Blue Topaz Bangle 24k Gold Plated Handmade",
    mrp: "789,09$",
    title: "Wedding Gift",
  },
];

const HandPick = () => {
  return (
    <div className="w-[70%] m-auto relative mb-4 max-lg:w-[98%] max-2xl:w-[80%] max-xl:w-[90%]">
       <GrFormPrevious className='bg-gray-300 h-12 w-12 rounded-full font-thin p-1 -ml-24 mt-44 absolute max-lg:hidden'/>
      <h2 className="text-left font-semibold text-xl mt-5">
        Discover unique hand-picked items
      </h2>
      <div className="space-x-4 flex ">
        {pickData.map((item): any => {
          return (
            // <div className=" w-[16%]">
              <div className=" mt-10 bg-white p-2 rounded-lg drop-shadow-lg w-[16%]">
                <Image src={item.img} alt="" />
                <p className="text-sm font-semibold text-left py-3 text-[#3E3E3E] h-20">
                  {item.para}
                </p>
                <h3 className="font-bold text-left pb-1 text-[#3E3E3E]">
                  {item.mrp}
                </h3>
              {/* </div> */}
            </div>
          );
        })}
      </div>
      <GrFormNext className='bg-gray-300 h-12 w-12 rounded-full font-thin p-1 absolute top-44 -right-24 max-lg:hidden'/>
    </div>
  );
};

export default HandPick;
