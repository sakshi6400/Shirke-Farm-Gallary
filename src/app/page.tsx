import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Gallery from "./components/gallery";

export default function Home() {
  return (
    <>
    
    <Navbar/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Gallery/>
    <Contact/>
    <Footer/>

    </>
  );
}