import { useSelector } from "react-redux"
import ProductCards from "./ProductCards";
// import CardsItem from './CardsItem';

export default function OurBest() {
  // const products = useSelector(state => state.products.products);

  
  return (
    <div className="bg-ourbest bg-cover bg-center bg-no-repeat pt-20 pb-28 md:pt-5 text-center">
      <h2 className="text-2xl mb-10">Our Best</h2>

      <ProductCards isBest/>
    </div>
  )
}
