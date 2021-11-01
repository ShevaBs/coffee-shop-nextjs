import { useRouter } from "next/dist/client/router";
import  Link  from 'next/link';

export default function CardsItem({name, img, weight, price,id}) {
  const {pathname} = useRouter();
  const cardStyle = pathname === '/' ? "card" : "card-outlined"


  return (
    <Link href={`ourcoffee/${id}`}>
      <div
        className={`${cardStyle} py-6 px-5 rounded-lg hover:scale-105 transition-all max-w-[220px] w-full cursor-pointer`}>
        <div className="h-[130px] w-[150px] mx-auto">
          <img 
            className="object-contain w-full h-full " 
            src={img} alt="ourbest-img" />
        </div>
        <p className="my-3 text-sm text-center">{name} {weight} kg</p>
        <p className="text-right text-sm font-bold">{price} $</p>
      </div>
    </Link>
  )
}
