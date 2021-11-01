
import Link from 'next/link';

export default function NavLinks({logo}) {
  return (
    <>
     <Link href="/">
        <div className="flex items-center cursor-pointer header-link">
          <img src={logo} alt="logo" />
          <h1 className="self-end">Coffee house</h1>
        </div>
      </Link>

      <Link href="/ourcoffee">
        <div className="header-link">Our coffee</div>
      </Link>

      <Link href="/pleasure">
        <div className="header-link">For Your Pleasure</div>
      </Link> 
    </>
  )
}
