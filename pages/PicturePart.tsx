import React from 'react'
import Image from 'next/image';
import group16 from './images/Group16.png'
import group3 from './images/Group3.png'
import group4 from './images/Group4.png'
import group5 from './images/Group5.png'

const PicturePart = () => {
  return (
    <div className='w-[70%] m-auto mt-6 flex space-x-4 max-lg:w-[98%] max-2xl:w-[80%] max-xl:w-[90%]'>
       <Image src={group16} alt='product1' className='w-[24%]'/>
       <Image src={group3} alt='product1' className='w-[24%]'/>
       <Image src={group4} alt='product1' className='w-[24%]'/>
       <Image src={group5} alt='product1' className='w-[24%]'/>
    </div>
  )
}

export default PicturePart
