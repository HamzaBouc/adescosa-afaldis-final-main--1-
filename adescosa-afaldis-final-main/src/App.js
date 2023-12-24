import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Industry from "./components/Industry";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Product from "./components/Product";
import Section1 from "./components/Section1";
import Urgence from "./components/Urgence";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Presentation />
      <Section1 />
      
      <Product />
      <Industry />
      <Contact />
      <Urgence />
      <Footer />
    </>
  );
}

export default App;
