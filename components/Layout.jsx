import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer';

export default function Layout({headTitle, children}) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Head>
        <title>{headTitle || "Coffee Shop"}</title>
        <link rel="icon" href="/beans.ico"/>
        <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&amp;display=swap" rel="stylesheet"/>
      </Head>

      <Navbar />

      <div className="flex-1">
        {children}

      </div>  
      <Footer />
    </div>
  )
}
