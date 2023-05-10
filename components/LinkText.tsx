import React from 'react'


const pickData = [
    {
      title: "Mordern Farmhouse",
    },
    {
      title: "Electic Decor",
    },
    {
      title: "PolkaBoho Decor",
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
    <div className='w-[94%] m-auto grid grid-cols-6 gap-4 max-md:grid-cols-3 mb-10 max-w-7xl max-md:gap-8'>
     {pickData.map((item): any => {
          return (
            <div className="">
              <h1 className="font-semibold mt-8 h-20 pb-9 px-[54px] text-center shadow-gray-800 border-b-2 border-[#3E3E3E] hover:border-b-2 hover:border-[#EB6D20] hover:text-[#EB6D20] hover:h-16 max-lg:px-[35px] max-md:h-14 max-md:hover:h-12">
                {item.title}
              </h1>
            </div>
          );
        })}
    </div>
  )
}

export default LinkText
