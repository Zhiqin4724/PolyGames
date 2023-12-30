import './portfolio.css';
import NavBar from './nav-bar/Nav-Bar.js';
import Apropos from './a-propos/A-Propos.js';
import Contact from './Contact/contact.js';
import Equipe from './Equipe/equipe.js';
import Commandite from './Commandite/commandite.js';
import Projet from './Projet/projet.js';
import Commentaire from './Commentaire/commentaire.js';

function Portfolio() {
  return (
    <>
    <div className='portfolio-container'>
        <div className='portfolio-list-1'>
            <div className='portfolio-card-1'>
                <img src='' alt='' className='portfolio-image'></img>
                <div className='portfolio-description'></div>
            </div>
            <div className='portfolio-card-2'>
            <img src='' alt='' className='portfolio-image'></img>
                <div className='portfolio-description'></div>
            </div>
        </div>
        <div className='portfolio-list-2'>
            <div className='portfolio-card-1'>
            <img src='' alt='' className='portfolio-image'></img>
                <div className='portfolio-description'></div>
            </div>
            <div className='portfolio-card-2'>
            <img src='' alt='' className='portfolio-image'></img>
                <div className='portfolio-description'></div>
            </div>
        </div>
    </div></>
  );
}
export default Portfolio;
