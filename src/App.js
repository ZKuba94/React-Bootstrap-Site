import './App.css';
import Navbar1 from "./Components/Navbar1";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe"
import Numbers from "./Components/Numbers";
import Skills from "./Components/Skills"
import Resume from "./Components/Resume"
import Portfolio from "./Components/Portfolio"
import Testimonials from "./Components/Testimonials"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div className="App" id="app">
            <header id="header">
                <Navbar1/>
                <Hero/>
            </header>
            <main>
                <AboutMe/>
                <Numbers/>
                <Skills/>
                <Resume/>
                <Portfolio/>
                <Testimonials/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
