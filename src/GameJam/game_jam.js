import './game_jam.css';
import { motion } from 'framer-motion';
import gameJam from'./../logo/game_jam.jpg'; 

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
      <img src={gameJam} alt='Game-jam' className='game_jam-image'></img> 
      <a href='https://www.eventbrite.ca/e/billets-creative-jam-24e-edition-774633980087'>
      <button className='Game_jam_join_button' >S'inscrire</button>
      </a>
    </div>
  );
}

export default GameJams;
