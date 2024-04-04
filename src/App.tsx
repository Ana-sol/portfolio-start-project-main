import './App.css';
import {Header} from "./assets/layout/header/Header";
import {Skills} from "./assets/layout/sections/skills/Skills";
import {Main} from "./assets/layout/sections/main/Main";
import {Works} from "./assets/layout/sections/works/Works";
import {Testimony} from "./assets/layout/sections/testimony/Testimony";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
        </div>
    );
}

export default App;

