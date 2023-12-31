import './portfolio.css';
import React, { useState } from 'react';
import atelier from './../logo/Poly Games Atelier Unity A2018.jpg'
import gamedev from './../logo/Poly Games Jeu VR_AR.jpg'
import visite from './../logo/Poly Games Unity.jpg'
import prix from './../logo/Neon_Racer.png'
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
function Portfolio() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleAnimationComplete = () => {
    setHasAnimated(true);
  };
  return (
    <>
    <div className='portfolio-container'>
        <div className='portfolio-titre'>Lorem Ipsum</div>
        <div className='portfolio-list'>
            <motion.div className='portfolio-card-1' variants={variants}
          initial="initial"
          animate={hasAnimated ? "animate" : "initial"}
          whileInView={hasAnimated ? undefined : "animate"}
          onAnimationComplete={handleAnimationComplete}>
                <div className='portfolio-image-container'>
                <img src={atelier} alt='' className='portfolio-image'></img>
                </div>
                <div className='portfolio-titre-image'>Atelier</div>
                <div className='portfolio-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </motion.div>
            <motion.div className='portfolio-card-2' variants={variants}
          initial="initial"
          animate={hasAnimated ? "animate" : "initial"}
          whileInView={hasAnimated ? undefined : "animate"}
          onAnimationComplete={handleAnimationComplete}>
            <div className='portfolio-image-container'>
                <img src={prix} alt='' className='portfolio-image'></img>
                </div>
                <div className='portfolio-titre-image'>Prix</div>
                <div className='portfolio-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </motion.div>
        </div>
        <div className='portfolio-list'>
            <motion.div className='portfolio-card-1' variants={variants}
          initial="initial"
          animate={hasAnimated ? "animate" : "initial"}
          whileInView={hasAnimated ? undefined : "animate"}
          onAnimationComplete={handleAnimationComplete}>
            <div className='portfolio-image-container'>
                <img src={visite} alt='visite' className='portfolio-image'></img>
                </div>
                <div className='portfolio-titre-image'>Visite Industriel</div>
                <div className='portfolio-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </motion.div>
            <motion.div className='portfolio-card-2' variants={variants}
          initial="initial"
          animate={hasAnimated ? "animate" : "initial"}
          whileInView={hasAnimated ? undefined : "animate"}
          onAnimationComplete={handleAnimationComplete}>
            <div className='portfolio-image-container'>
                <img src={gamedev} alt='' className='portfolio-image'></img>
            </div>
            <div className='portfolio-titre-image'>Jeu de fin d'annee</div>
            <div className='portfolio-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </motion.div>
        </div>
    </div></>
  );
}
export default Portfolio;
