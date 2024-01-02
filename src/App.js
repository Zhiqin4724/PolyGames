import './App.css';
import NavBar from './nav-bar/Nav-Bar.js';
import Apropos from './a-propos/A-Propos.js';
import Contact from './Contact/contact.js';
import Equipe from './Equipe/equipe.js';
import Commandite from './Commandite/commandite.js';
import Projet from './Projet/projet.js';
import Commentaire from './Commentaire/commentaire.js';
import Portfolio from './portfolio/portfolio.js';
import Valeur from './Valeur/valeur.js';

function App() {
  return (
    <>
    <div className="container">
    <section id='Homepage'><NavBar ></NavBar></section>
    <section id="APropros"><Apropos ></Apropos></section>
    <section id="valeur"><Valeur></Valeur></section>
    <section id="Equipe"><Equipe ></Equipe></section>
    
    <section id="portfolio"><Portfolio></Portfolio></section>
    <section id='projet'><Projet></Projet></section>
    <section id="Commandite"><Commandite ></Commandite></section>
    <section id='Commentaire'><Commentaire></Commentaire></section>
    <section id="Contact"><Contact ></Contact></section>
    </div></>
  );
}
export default App;
