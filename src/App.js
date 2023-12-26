import './App.css';
import NavBar from './nav-bar/Nav-Bar.js';
import Apropos from './a-propos/A-Propos.js';
import Contact from './Contact/contact.js';
import Equipe from './Equipe/equipe.js';
import About from './About/about.js';
import Commandite from './Commandite/commandite.js';

function App() {
  return (
    <>
    <div className="container">
    <NavBar></NavBar>
    <Apropos></Apropos>
    <About></About>
    <Equipe></Equipe>
    <Commandite></Commandite>
    <Contact></Contact>
    </div></>
  );
}

export default App;
