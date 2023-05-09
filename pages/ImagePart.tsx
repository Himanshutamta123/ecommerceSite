// import React from 'react'
import firstimg from './images/center.png'
import Image from 'next/image';
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';

const ImagePart = () => {
  return (
    <div className='w-[70%] m-auto relative max-lg:w-[98%] max-2xl:w-[80%] max-xl:w-[90%]'>
     <Image src={firstimg} alt="first img" className='py-6'/>
     <div className='absolute top-[40%] left-[5%]'>
        <h1 className='text-left text-[#FFFFFF] text-3xl font-medium font-sans'>Whats New!</h1>
        <p className='text-white pt-3 font-sans text-lg'>Just millions of people selling the things they love.</p>
     </div>
     <div className='absolute text-xl top-[40%] right-16 space-y-4 max-lg:right-9'>
        <GrFormNext className=' bg-gray-800 h-12 w-12 rounded-full font-thin p-1 hover:bg-gray-300'/>  
        <GrFormPrevious className='bg-gray-800 h-12 w-12 rounded-full font-thin p-1 hover:bg-gray-300' />
     </div>
    </div>
  )
}

export default ImagePart
