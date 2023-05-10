import React from 'react'
import Image from 'next/image';
import group16 from '../images/Group16.png'
import group3 from '../images/Group3.png'
import group4 from '../images/Group4.png'
import group5 from '../images/Group5.png'

const PicturePart = () => {
  return (
    <div className='w-[94%] m-auto mt-6 grid md:grid-cols-4 grid-cols-3 max-w-7xl gap-3 max-sm:grid-cols-2'>
       <Image src={group16} alt='product1' className=''/>
       <Image src={group3} alt='product1' className=''/>
       <Image src={group4} alt='product1' className=''/>
       <Image src={group5} alt='product1' className=''/>
    </div>
  )
}

export default PicturePart
