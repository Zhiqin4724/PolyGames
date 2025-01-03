import './A-Propos.css';
import {motion} from 'framer-motion'
import TV from '../tv/tv';

const textvariants = {
  initial: {
  x: -500,
  opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}
const textslide = {
  initial: {
    x: "200%",
  },
  animate:{
    x: "-450%",
    transition:{
      duration: 7,
      repeat: Infinity,
      repeatType: "loop", 
      ease: "linear",
    }
  }
}
const textslide2 = {
  initial: {
    x: "200%",
  },
  animate:{
    x: "-450%",
    transition:{
      delay: 3.5,
      duration: 7,
      repeat: Infinity,
      repeatType: "loop", 
      ease: "linear",
    }
  }
}
function Apropos() {

  return (
      
      <div className="container-a-propos">
        <motion.div id="left-title" variants={textvariants} initial="initial" animate="animate">
        <motion.div id="title-a-propros" variants={textvariants}>
        Bienvenue sur Poly Games
        </motion.div>
        <motion.div id="sub-title" variants={textvariants}>
        Libérez votre développeur de jeux intérieur, apprenez, créez, partagez!
        </motion.div>
        </motion.div>
        {<TV></TV>}
        <motion.div className='apropros-bg-text' variants={textslide} initial="initial" animate="animate">
          Game Club Creation
        </motion.div>
        <motion.div className='apropros-bg-text' variants={textslide2} initial="initial" animate="animate">
          Game Club Creation
        </motion.div>
        {/* <a href="#GameJams" >
          <button className='button-game_jam'>Game Jams</button>
        </a> */}
        <div className='apropros-HideCanvas'></div>
      </div>
    );
  }

  export default Apropos;