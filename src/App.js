import './App.css';
import Navbar1 from "./Navbar1";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe"
import Numbers from "./Components/Numbers";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div className="App">
            <header>
                <Navbar1/>
                <Hero/>
            </header>
            <main>
                <AboutMe/>
                <Numbers/>
            </main>
        </div>
    );
}

export default App;
