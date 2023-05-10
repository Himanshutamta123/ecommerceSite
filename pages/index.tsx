import Footer from '../components/Footer'
import HandPick from '../components/HandPick'
import ImagePart from '../components/ImagePart'
import LinkText from '../components/LinkText'
import PicturePart from '../components/PicturePart'
import ProductCard from '../components/ProductCard'
import Seller from '../components/Seller'
import Subscribe from '../components/Subscribe'
import TopHeader from '../components/TopHeader'

export default function Home() {
  return (
    <div className='text-center m-auto'>
      <div className='bg-[#FFF9F3]'><TopHeader /></div>
      <div className='imagepart'><ImagePart /></div>
      <PicturePart />
      <div><ProductCard /></div>
      <div><Seller /></div>
      <div><HandPick /></div>
      <LinkText/>
      <PicturePart />
      <HandPick />
      <Subscribe />
      <Footer />
    </div>
  )
}
