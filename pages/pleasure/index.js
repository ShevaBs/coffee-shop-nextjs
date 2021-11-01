import Header from '../../components/Header';
import Layout from './../../components/Layout';
import About from './../../utils/About';
import ProductCards from './../../components/ProductCards';

export default function index() {
  return (
    <Layout headTitle="Four your pleasure">
      <Header headerTitle="Four your pleasure" img="/images/ourPleasureBg.png"/>

      <About img="/images/cup.png" titleText="About our goods">
        <div div className="max-w-sm w-full text-center">
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
      <ProductCards divider/>
    </Layout>
  )
}
