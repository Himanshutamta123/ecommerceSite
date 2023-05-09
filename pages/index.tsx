import Footer from './Footer'
import HandPick from './HandPick'
import ImagePart from './ImagePart'
import LinkText from './LinkText'
import PicturePart from './PicturePart'
import ProductCard from './ProductCard'
import Seller from './Seller'
import Subscribe from './Subscribe'
import TopHeader from './TopHeader'

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
