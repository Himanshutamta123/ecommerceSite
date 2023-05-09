import React from 'react'
import Image from "next/image";


const pickData = [
    {
      title: "Mordern Farmhouse",
    },
    {
      title: "Electic Decor",
    },
    {
      title: "Polka Boho Decor",
    },
    {
      title: "Minimalist Style",
    },
    {
      title: "Anniversary Gift",
    },
    {
      title: "Wedding Gift",
    },
  ];
const LinkText = () => {
  return (
    <div className='w-[70%] m-auto flex space-x-4 mb-10 max-lg:w-[98%] max-2xl:w-[80%] max-xl:w-[90%]'>
     {pickData.map((item): any => {
          return (
            <div className=" w-[16%]">
              <h1 className="font-semibold mt-8 pb-9 px-[63px] shadow-gray-800 border-b-2 border-[#3E3E3E] hover:border-b-2 hover:border-[#EB6D20] hover:text-[#EB6D20] hover:pb-7 max-lg:px-[35px] max-2xl:px-[50px]">
                {item.title}
              </h1>
            </div>
          );
        })}
    </div>
  )
}

export default LinkText
