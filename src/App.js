import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Template from './components/Template';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from 'react-router-dom';

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
        {/* <Route path="/Home" element={<Home/>}/> */}
        {/* <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>


  );
}

export default App;
