import NavLinks from '../utils/NavLinks';

export default function Navbar() {
  return (
    <div className="bg-transparent py-8 absolute z-50 w-full">
      <div className="container md:px-4 md:gap-5 max-w-7xl m-auto flex items-end gap-10 text-white">
        <NavLinks logo='/icons/Logo.svg'/>
      </div>
    </div>
  )
}
