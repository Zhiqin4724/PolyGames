import './A-Propos.css';
import {motion} from 'framer-motion'

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
    x: "250%",
  },
  animate:{
    x: "-300%",
    transition:{
      duration: 10,
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
            Welcome to PolyGames
        </motion.div>
        <motion.div id="sub-title" variants={textvariants}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
        </motion.div>
        </motion.div>
        <motion.div className='apropros-bg-text' variants={textslide} initial="initial" animate="animate">
          Game Club Creation
        </motion.div>
      </div>
    );
  }

  export default Apropos;