import BlackBeansLogo from '../utils/BlackBeansLogo';
import NavLinks from './../utils/NavLinks';

export default function Footer() {
  return (
    <footer className="text-black flex flex-col items-center pt-8">
      <div className="flex items-end gap-5">
        <NavLinks logo='/icons/black-coffee-logo.svg'/>
      </div>
      <BlackBeansLogo/>
    </footer>
  )
}
