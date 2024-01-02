import './equipe.css';
import React, { useState } from 'react';
import cube from './../logo/CUBE_logoDiscord.png'
import gamejam from './../logo/gamejam_square.png'
import atelier from './../logo/creative-team.png'
import gamedev from './../logo/coding (1) 1.png'
import concours from './../logo/trophy.png'
import manette from './../logo/video-games 1.png'
import { motion } from 'framer-motion';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate:{
    y:0,
    opacity:1 ,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

function Equipe() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleAnimationComplete = () => {
    setHasAnimated(true);
  };
    return (

      <div className="container-equipe">
        <div className='equipe-title-container'>
          <img></img>
          <motion.div className='equipe-title' variants={variants}
          initial="initial"
          animate={hasAnimated ? "animate" : "initial"}
          whileInView={hasAnimated ? undefined : "animate"}
          onAnimationComplete={handleAnimationComplete}>Notre Equipe</motion.div>
          <motion.div className='equipe-title-2' variants={variants}
          initial="initial"
          animate={hasAnimated ? "animate" : "initial"}
          whileInView={hasAnimated ? undefined : "animate"}
          onAnimationComplete={handleAnimationComplete}>Ipsum Lorem</motion.div>
          <img></img>
        </div>
        {/* <motion.div className='equipe-cards-container'>
          
            <motion.div className='equipe-cards-1' variants={variants}
          initial="initial"
          animate={hasAnimated ? "animate" : "initial"}
          whileInView={hasAnimated ? undefined : "animate"}
          onAnimationComplete={handleAnimationComplete}>
              <img src={gamejam} alt='gamejam' className='equipe-gamejam-logo'></img>
            </motion.div>
          
          
            <motion.div className='equipe-cards-2' variants={variants}
          initial="initial"
          animate={hasAnimated ? "animate" : "initial"}
          whileInView={hasAnimated ? undefined : "animate"}
          onAnimationComplete={handleAnimationComplete}>
              <img src={atelier} alt='atelier' className='equipe-atelier-logo'></img>
            </motion.div>
          
          
            <motion.div className='equipe-cards-3' variants={variants}
          initial="initial"
          animate={hasAnimated ? "animate" : "initial"}
          whileInView={hasAnimated ? undefined : "animate"}
          onAnimationComplete={handleAnimationComplete}>
              <img src={gamedev} alt='gamedev' className='equipe-gamedev-logo'></img>
              <img src={manette} alt='manette' className='equipe-manette-logo'></img>
            </motion.div>
          
          
            <motion.div className='equipe-cards-4' variants={variants}
          initial="initial"
          animate={hasAnimated ? "animate" : "initial"}
          whileInView={hasAnimated ? undefined : "animate"}
          onAnimationComplete={handleAnimationComplete}>
              <img src={cube} alt='cube' className='equipe-cube-logo'></img>
            </motion.div>
          
          
            <motion.div className='equipe-cards-5' variants={variants}
          initial="initial"
          animate={hasAnimated ? "animate" : "initial"}
          whileInView={hasAnimated ? undefined : "animate"}
          onAnimationComplete={handleAnimationComplete}>
              <img src={concours} alt='concours' className='equipe-concours-logo'></img>
            </motion.div>
          
        </motion.div> */}
      </div>
    );
  }

  export default Equipe;