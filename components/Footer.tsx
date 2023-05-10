import Image from "next/image"
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import dribbble from '../images/dribbble.png'
import facebook from '../images/facebook.png'
import React, { useState } from "react"


const Footer = () => {

  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showList3, setShowList3] = useState(false);
  const [showList4, setShowList4] = useState(false);

  const handleList = (): any => {
    setShowList1(!showList1)
  }

  const handleList1 = (): any => {
    setShowList2(!showList2)
  }

  const handleList2 = (): any => {
    setShowList3(!showList3)
  }

  const handleList3 = (): any => {
    setShowList4(!showList4)
  }
  return (
    <div className="mt-10 m-auto">
      <div className="bg-[#F5F6F8] text-sm font-semibold py-2">Commerce, is powered by 100% renewable electricity</div>
      <div className="w-[94%] m-auto flex pt-8 pb-5 space-x-[20%] text-left max-w-7xl max-md:space-x-[6%] max-sm:flex-col max-sm:text-center max-sm:space-x-0">
        <div className="max-sm:order-2 ">
          <h1 className="text-[#EB6D20] font-bold text-2xl pb-7 pt-1 cursor-pointer max-sm:hidden">E-commerce</h1>
          <p className="text-sm max-sm:hidden">Cricklewood,London</p>
          <p className="text-sm max-sm:hidden">NW2 6qg, UK</p>
          <div className="grid gap-3 pt-6 grid-cols-4 max-md:grid-cols-2 max-md:gap-1 max-md:justify-start max-sm:flex max-sm:place-content-center max-sm:gap-4 max-sm:rounded-3xl max-sm:w-[100%] max-sm:py-3 max-sm:px-5 max-sm:bg-[#F5F6F8] max-sm:mt-4">
          <Image className="cursor-pointer" src={linkedin} alt="linkedin"/>
          <Image className="cursor-pointer" src={twitter} alt="twitter"/>
          <Image className="cursor-pointer" src={facebook} alt="facebook"/>
          <Image className="cursor-pointer" src={dribbble} alt="dribbble"/>
          </div>
        </div>
        <div className="flex w-[70%] space-x-[16%] max-md:space-x-[13%] max-sm:order-1 max-sm:flex-col max-sm:space-x-0 max-sm:w-[100%] max-sm:gap-5">
          <div>
            <h2 onClick={handleList} className={`font-bold text-[#3E3E3E] pb-4 max-sm:bg-[#EB6D20] max-sm:rounded-3xl max-sm:py-2 ${showList1 && "text-white max-sm:bg-[]"}`}>Shop</h2>
            <ul className={` ${!showList1 && "max-sm:hidden"}`}>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg'>Gift cards</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg'>Site map</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg'>Polka blog</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg'>Login</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg'>Sign in</li>
            </ul>
          </div>
          <div>
            <h2 onClick={handleList1} className={`font-bold text-[#3E3E3E] pb-4 max-sm:bg-[#EB6D20] max-sm:rounded-3xl max-sm:py-2 ${showList2 && "text-white"}`}>Sell</h2>
            <ul className={` ${!showList2 && "max-sm:hidden"}`}>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg'>Sell on Polka</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg'>Teams</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg'>Forums</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg'>Affiliates</li>
            </ul>
          </div>
          <div>
            <h2 onClick={handleList2} className={`font-bold text-[#3E3E3E] pb-4 max-sm:bg-[#EB6D20] max-sm:rounded-3xl max-sm:py-2 ${showList3 && "text-white"}`}>About</h2>
            <ul className={` ${!showList3 && "max-sm:hidden"}`}>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg'>Polka,inc.</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg '>Policies</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium  hover:text-[#EB6D20] hover:font-medium max-sm:text-lg '>Investors</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium  hover:text-[#EB6D20] hover:font-medium max-sm:text-lg '>Careers</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium  hover:text-[#EB6D20] hover:font-medium max-sm:text-lg '>Press</li>
            </ul>
          </div>  
          <div>
            <h2 onClick={handleList3} className={`font-bold text-[#3E3E3E] pb-4 max-sm:bg-[#EB6D20] max-sm:rounded-3xl max-sm:py-2 ${showList4 && "text-white bg-[#EB6D20]"}`} >Help</h2>
            <ul className={` ${!showList4 && "max-sm:hidden"}`}>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg'>Help Center</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg'>Trust ans Safety</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium max-sm:text-lg'>Privacy settings</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-[94%] m-auto space-x-[20%] pb-8 text-sm max-w-7xl max-md:space-x-[7%] max-sm:justify-center">
        <h1>2022 Commerce, Inc.</h1>
        <div className="flex space-x-5 max-sm:hidden">
          <p className="hover:text-[#EB6D20] cursor-pointer">Privacy Policy</p>
          <p className="hover:text-[#EB6D20] cursor-pointer">Terms of use</p>
          <p className="hover:text-[#EB6D20] cursor-pointer">Cookies</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
