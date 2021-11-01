import Head from 'next/dist/shared/lib/head';
import Header from '../../components/Header';
import Layout from './../../components/Layout';
import AboutBeans from './../../components/AboutBeans';
import ProductCards from '../../components/ProductCards';


export default function index() {

  return (
    <Layout headTitle="Our Coffee">
      
      <Header 
        headerTitle="Our Coffee"
        img="/images/ourCoffeeBg.png"
      />

      <AboutBeans />

      <ProductCards divider filter/>

    </Layout>
  )
}
