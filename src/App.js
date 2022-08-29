import Header from './component/header/Header';
import About from './component/about/About';
import Nav from './component/nav/Nav';
import Experience from './component/experience/Experience';
import Portofolio from './component/portofolio/Portofolio';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portofolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
