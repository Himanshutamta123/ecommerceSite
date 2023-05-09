import Image from "next/image"
import twitter from './images/twitter.png'
import linkedin from './images/linkedin.png'
import dribbble from './images/dribbble.png'
import facebook from './images/facebook.png'


const Footer = () => {
  return (
    <div className="mt-10 m-auto">
      <div className="bg-[#F5F6F8] text-sm font-semibold py-2">Commerce, is powered by 100% renewable electricity</div>
      <div className="w-[70%] m-auto flex pt-8 pb-5 space-x-[20%] text-left max-lg:w-[98%] max-2xl:w-[80%] max-xl:w-[90%]">
        <div>
          <h1 className="text-[#EB6D20] font-bold text-2xl pb-7 pt-1 cursor-pointer">E-commerce</h1>
          <p className="text-sm">Cricklewood,London</p>
          <p className="text-sm">NW2 6qg, UK</p>
          <div className="flex space-x-3 pt-6  ">
          <Image className="cursor-pointer" src={linkedin} alt="linkedin"/>
          <Image className="cursor-pointer" src={twitter} alt="twitter"/>
          <Image className="cursor-pointer" src={facebook} alt="facebook"/>
          <Image className="cursor-pointer" src={dribbble} alt="dribbble"/>
          </div>
        </div>
        <div className="flex w-[70%] space-x-[16%]">
          <div>
            <h2 className="font-bold text-[#3E3E3E] pb-4 ">Shop</h2>
            <ul>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Gift cards</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Site map</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Polka blog</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Login</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Sign in</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-[#3E3E3E] pb-4">Sell</h2>
            <ul>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Sell on Polka</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Teams</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Forums</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Affiliates</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-[#3E3E3E] pb-4">About</h2>
            <ul>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Polka,inc.</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Policies</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Investors</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Careers</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Press</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-[#3E3E3E] pb-4" >Help</h2>
            <ul>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Help Center</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Trust ans Safety</li>
              <li className='py-1.5 text-sm cursor-pointer font-medium hover:text-[#EB6D20] hover:font-medium'>Privacy settings</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-[70%] m-auto space-x-[20%] pb-8 text-sm max-lg:w-[98%] max-2xl:w-[80%] max-xl:w-[90%]">
        <h1>2022 Commerce, Inc.</h1>
        <div className="flex space-x-5 ">
          <p className="hover:text-[#EB6D20] cursor-pointer">Privacy Policy</p>
          <p className="hover:text-[#EB6D20] cursor-pointer">Terms of use</p>
          <p className="hover:text-[#EB6D20] cursor-pointer">Cookies</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
