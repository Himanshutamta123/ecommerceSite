// import React from 'react'
import Image from "next/image";
import rectangle47 from "../images/Rectangle47.png";
import rectangle49 from "../images/Rectangle49.png";
import rectangle51 from "../images/Rectangle51.png";
import rectangle53 from "../images/Rectangle53.png";
import rectangle55 from "../images/Rectangle55.png";
import rectangle57 from "../images/Rectangle57.png";
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
    <div className="w-[94%] m-auto relative mb-4 max-w-7xl">
       <GrFormPrevious className='bg-gray-300 h-12 w-12 rounded-full font-thin p-1 -left-24 top-44 absolute  max-2xl:-left-16 max-2xl:hidden'/>
      <h2 className="text-left font-semibold text-xl mt-5">
        Discover unique hand-picked items
      </h2>
      <div className=" grid grid-cols-6 gap-3 max-md:grid-cols-4 max-sm:grid-cols-2">
        {pickData.map((item): any => {
          return (
              <div className=" mt-10 bg-white p-2 rounded-lg drop-shadow-lg max-sm:items-center ">
                <Image src={item.img} alt="fff" className=" " />
                <p className="text-sm font-semibold text-left py-3 text-[#3E3E3E] h-20">
                  {item.para}
                </p>
                <h3 className="font-bold text-left pb-1 text-[#3E3E3E]">
                  {item.mrp}
                </h3>
            </div>
          );
        })}
      </div>
      <GrFormNext className='bg-gray-300 h-12 w-12 rounded-full font-thin p-1 absolute top-44 -right-24 max-2xl:hidden max-2xl:-right-16'/>
    </div>
  );
};

export default HandPick;
