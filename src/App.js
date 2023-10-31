import "./App.css"
import {NavBar} from "./components/NavgationBar";
import {Banner} from "./components/Banner";
import {Experience} from "./components/./Experience";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";

function App() {
    return (
        <>
            <NavBar/>
            <Banner/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;
