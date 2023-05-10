// import React from 'react'
import firstimg from '../images/center.png'
import Image from 'next/image';
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';

const ImagePart = () => {
  return (
    <div className='w-[94%] m-auto relative max-w-7xl'>
     <Image src={firstimg} alt="first img" className='py-6'/>
     <div className='absolute top-[40%] left-[5%]'>
        <h1 className='text-left text-[#FFFFFF] text-3xl font-medium font-sans max-md:text-2xl'>Whats New!</h1>
        <p className='text-white pt-3 font-sans text-lg max-md:text-lg max-sm:text-base'>Just millions of people selling the things they love.</p>
     </div>
     <div className='absolute text-xl top-[40%] right-16 space-y-4 max-lg:right-9 max-xl:right-9 max-md:right-4'>
        <GrFormNext className=' bg-gray-800 h-12 w-12 rounded-full font-thin p-1 hover:bg-gray-300 max-md:h-10 max-md:w-10 max-sm:hidden'/>  
        <GrFormPrevious className='bg-gray-800 h-12 w-12 rounded-full font-thin p-1 hover:bg-gray-300 max-md:h-10 max-md:w-10 max-sm:hidden' />
     </div>
    </div>
  )
}

export default ImagePart
