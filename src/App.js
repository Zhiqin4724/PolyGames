import './App.css';
import NavBar from './nav-bar/Nav-Bar.js';
import Apropos from './a-propos/A-Propos.js';
import Contact from './Contact/contact.js';
import Equipe from './Equipe/equipe.js';
import About from './About/about.js';
import Commandite from './Commandite/commandite.js';
import { motion } from 'framer-motion';

function App() {
  return (
    <>
    <div className="container">
    <section id='Homepage'></section>
    <NavBar ></NavBar>
    <section id="APropros"></section>
    <Apropos ></Apropos>
    <About></About>
    <section id="Equipe"></section>
    <Equipe ></Equipe>
    <section id="Commandite"></section>
    <Commandite ></Commandite>
    <section id="Contact"></section>
    <Contact ></Contact>
    </div></>
  );
}
export default App;
