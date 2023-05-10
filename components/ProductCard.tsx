// import React from 'react'
import Image from 'next/image';
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'

const productData = [
    {
        title: "A community doing good",
        para: "Commerce is a global online marketplace, where people.",
        img: product1
    },
    {
        title: "Support independent creators",
        para: "Just millions of people selling the things they love.",
        img: product2
    },
    {
        title: "Peace of mind",
        para: "Privacy is the highest priority of our dedicated team.",
        img: product3
    }
]
const ProductCard = () => {
  return (
    <div className="w-[94%] m-auto my-4 flex space-x-8 max-w-7xl max-sm:flex-col max-sm:gap-5 max-sm:space-x-0">
        {productData.map((item) : any => {
            console.log(item)
            return(
      <div className='flex bg-[#eeebeb] p-5 rounded-md hover:bg-[#D6D6D6] max-lg:flex-col max-lg:items-center '>
        <div className='text-left space-y-2 mt-5 max-lg:order-2 max-lg:text-center'>
        <h3 className=' w-[60%] font-medium leading-5 text-lg max-xl:w-[100%]'>{item.title}</h3>
        <p className='w-[90%] leading-4 text-sm font-normal max-xl:w-[100%] max-sm:leading-5'>{item.para}</p>
        </div>
        <Image src={item.img} alt='product1' height={130} width={130} className='max-lg:order-1 max-xl:w-32 max-xl:h-32 max-2xl:w-36  max-2xl:h-36' />
      </div>
            )
        }) }
    </div>
  )
}

export default ProductCard
