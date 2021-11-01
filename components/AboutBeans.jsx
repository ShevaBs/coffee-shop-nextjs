import About from './../utils/About';

export default function AboutBeans() {
  return (
    <div className="flex justify-center py-16">
      <About 
        titleText="About our beans"
        img="/images/ourCoffeeWoman.png"
      >
        <div className="max-w-sm w-full text-center">
          <p className="mb-3">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
          <p>
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. 
          </p>
          <p>
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
          </p>
        </div>
      </About>
    </div>
  )
}
