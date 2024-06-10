import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Template from './components/Template';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermCondition from './components/TermCondition';
import Policy from './components/Policy';
import FAQ from './components/FAQ';
import OurMission from './components/OurMission';
import OurVision from './components/OurVision';
import OnlyNav from './components/OnlyNav';
import Reviews from './Reviews';
import Bootsnav from './components/Bootsnav';

const MainCom = () => {
  return (
    <div className="App">
      <Navbar />
      <Template />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainCom />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/TermCondition" element={<TermCondition/>}/>
        <Route path="/Policy" element={<Policy/>}/>
        <Route path="/OnlyNav" element={<OnlyNav/>}/>
        <Route path="/OurMission" element={<OurMission/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/OurVision" element={<OurVision/>}/>
        <Route path="/Reviews" element={<Reviews/>}/>
        <Route path="/Bootsnav" element={<Bootsnav/>}/>
        {/* <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />y
        {/* </Route> */}
      </Routes>
    </BrowserRouter>


  );
}

export default App;
