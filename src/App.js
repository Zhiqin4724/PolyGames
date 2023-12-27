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
    <section id="APropros"><Apropos ></Apropos></section>
    <About></About>
    <section id="Equipe"><Equipe ></Equipe></section>
    <section id="Commandite"><Commandite ></Commandite></section>
    <section id="Contact"><Contact ></Contact></section>
    </div></>
  );
}
export default App;
