import { useRouter } from "next/dist/client/router";
import Header from "../../components/Header";
import Layout from './../../components/Layout';
import About from './../../utils/About';
import { useRecoilValue } from "recoil";
import { productsState } from "../../atoms/productsState";

export default function comp() { 
  const products = useRecoilValue(productsState)
  const {query} = useRouter();
  const currentProduct = products.find(item => item.id === +query.id);

  return (
    <Layout headTitle="Our Coffee">
      <Header
        headerTitle="Our Coffee"
        img="/images/ourCoffeeBg.png"
      />
      <About 
        titleText="About it"
        img={currentProduct?.img}
      >
        <div className="max-w-[430px] w-full space-y-5 px-3">
          <div>
            <span className="font-bold">Country: </span>
            {currentProduct?.country}
          </div>
          <div>
            <span className="font-bold">Description: </span>
            {currentProduct?.description}
          </div>
          <div>
            <span className="font-bold">Price: </span>
            {currentProduct?.price}$
          </div>
        </div>
      </About>
    </Layout>
  )
}
