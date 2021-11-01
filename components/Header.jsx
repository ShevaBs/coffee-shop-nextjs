export default function Header({children, headerTitle, img}) {
  return (
    <header className="max-h-[846px] w-full relative">
      <img
        className="md:min-h-[107px] object-cover w-full" 
        src={img} alt="main-bg" />

      <div className="absolute md:pt-[50px] top-0 h-full w-full text-white flex flex-col items-center justify-center drop-shadow">
        <h2 className="sm:mb-4 sm:hidden md:text-base text-2xl  mb-2">{headerTitle}</h2>
        {children}
      </div>

    </header>
  )
}
