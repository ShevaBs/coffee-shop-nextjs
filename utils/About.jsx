import Title from "./Title";

export default function About({img, titleText, children}) {
  return (
    <div className="flex md:gap-10 gap-20 flex-wrap justify-center py-16">
      {
        img && (
          <div className="w-[272px] h-[355px] shadow-img">
            <img 
              className="object-cover w-full h-full" 
              src={img} alt="about-img" />
          </div>
        )
      }
      
      <div>
        <Title text={titleText}/>
        {children}
      </div>
                
    </div>
  )
}