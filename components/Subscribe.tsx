import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';

const Subscribe = () => {
  return (
    <div className='bg-[#5959D9] m-auto w-[94%] mt-10 text-white p-12 rounded-lg max-lg:w-[98%] max-w-7xl max-sm:pl-5 max-sm:pt-9'>
      <h4 className='text-left '>Yes!</h4>
      <p className='text-left font-semibold pt-3'>Send me exclusive offers, unique gift idea,and personalized<br/> tips for shopping and selling on Commerce.</p>
      <div className='m-12 mb-0 bg-white w-[40%] flex ml-[30%] p-1 rounded-3xl justify-center max-lg:w-[60%] max-lg:ml-[20%] max-sm:m-5  max-sm:w-[100%] max-sm:flex-col max-sm:bg-[#5959D9]'>
      <input className='w-[80%] rounded-3xl text-sm px-3 text-[#EB8426] max-sm:py-3 max-sm:px-4 max-sm:w-[100%] max-sm:mb-5' placeholder='Drop your Email'/>
      <button className='bg-[#EB8426] flex px-5 py-1 rounded-3xl space-x-6 justify-center'>Subscribe<BsArrowRightShort className='text-2xl'/></button>
      </div>
      <p className='text-xs underline decoration-1 mt-4 max-sm:hidden'>First order only, You're ready?</p>
    </div>
  )
}

export default Subscribe
