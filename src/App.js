import './App.css';
import NavBar from './nav-bar/Nav-Bar.js';
import Apropos from './a-propos/A-Propos.js';
import Contact from './Contact/contact.js';
import Commandite from './Commandite/commandite.js';
import Projet from './Projet/projet.js';
import Commentaire from './Commentaire/commentaire.js';
import Valeur from './Valeur/valeur.js';
import Loading from './loading/loading.js';
// import { Application } from '@splinetool/runtime';



function App() {
  return (
    <>
    <div className="container">
    
    <section id='Homepage'><NavBar ></NavBar></section>
    {/* <Loading></Loading> */}
    <section id="APropros"><Apropos ></Apropos></section>
    <section id="valeur"><Valeur></Valeur></section>
    {/* <section id="Equipe"><Equipe ></Equipe></section> */}
    
    {/* <section id="portfolio"><Portfolio></Portfolio></section> */}
    <section id='projet'><Projet></Projet></section>
    <section id="Commandite"><Commandite ></Commandite></section>
    <section id='Commentaire'><Commentaire></Commentaire></section>
    <section id="Contact"><Contact ></Contact></section>
    </div></>
  );
}
export default App;
