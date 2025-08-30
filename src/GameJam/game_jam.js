import './game_jam.css';
import { motion } from 'framer-motion';
import gameJam from'./../logo/CreativeJam_-_QR.webp'; 
import gris from'./../logo/gris.png'; 

const variants = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate:{
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

function GameJams() {
  return (
    <div className="container-game_jam">
      <div className="container-game__jam-image">
        <div className='game__jam-overflow'>
        <img src={gameJam} alt='Gris' className='game_jam-gris'></img> 
        <img src={gameJam} alt='Game-jam' className='game_jam-image'></img> 
        </div>
      </div>
      <div className='game__jam-information-container'>
        <div className='game__jam-information-list'>
          <div className='game__jam-information-titre'>Creative Jam 46eme edition</div>
          <div className='game__jam-information-date'>19 au 21 Septembre</div>
          <div className='game__jam-information-lieu'>Endroit</div>
          <div className='game__jam-information-apropros'>A propros</div>
          <div className='game__jam-information-QA'>QA</div>
        </div>
        <div className='game__jam-right-container'>
          <div className='game__jam-right-Timer'>timer</div>
          <div className='game__jam-right-button-container'>
            <div className='game__jam-right-button-container'>acheter billets</div>
            <div className='game__jam-right-button-container'>Liste d'equipe</div>
          </div>
        </div>
      </div>
      {/* <a href='https://www.zeffy.com/en-CA/ticketing/creative-jam-25e-edition'>
      <button className='Game_jam_join_button' >S'inscrire</button>
      </a> */}
    </div>
  );
}

export default GameJams;
