import "./App.css"
import {NavBar} from "./components/NavgationBar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";

function App() {
    return (
        <>
            <NavBar/>
            <Banner/>
            <Skills/>
            <Projects/>
        </>
    );
}

export default App;
