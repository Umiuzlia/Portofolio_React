import Header from './component/header/Header';
import About from './component/about/About';
import Nav from './component/nav/Nav';
import Experience from './component/experience/Experience';
import Services from './component/services/Services';
import Portofolio from './component/portofolio/Portofolio';
import Testimonials from './component/testimonials/Testimonials';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portofolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
