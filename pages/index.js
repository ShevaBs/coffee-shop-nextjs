import Header from '../components/Header';
import Layout from './../components/Layout';
import AboutUs from './../components/AboutUs';
import OurBest from './../components/OurBest';
import { useRouter } from 'next/dist/client/router';

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <Header 
        img={"/images/MainBg.png"}
        headerTitle="Everything You Love About Coffee">
        <img 
          className="sm:hidden w-[200px] h-[29px] md:my-2"
          src="/icons/BeansLogo.svg" alt="bean-logo" />
        <div className="md:hidden text-center lg:mt-2 mt-8 mb-4 ">
          <p>We makes every day full of energy and taste</p>
          <p>Want to try our beans?</p>
        </div>
        <button 
          onClick={() => router.push('/ourcoffee')}
          className="border border-white px-11 py-1 rounded-sm hover:bg-white hover:text-black">
          More
        </button>
      </Header>

      <AboutUs />
        
      <OurBest />

    </Layout>
  )
}
