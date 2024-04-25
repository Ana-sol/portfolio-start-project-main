import './App.css';
import {Header} from "./assets/layout/header/Header";
import {Skills} from "./assets/layout/sections/skills/Skills";
import {Main} from "./assets/layout/sections/main/Main";
import {Works} from "./assets/layout/sections/works/Works";
import {Testimony} from "./assets/layout/sections/testimony/Testimony";
import {Contact} from "./assets/layout/sections/contacts/Contacts";
import {Slogan} from "./assets/layout/sections/slogan/Slogan";
import {Footer} from "./assets/layout/footer/Footer";
import {Particle} from "./components/particle/Particle";



function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

