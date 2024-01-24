import './valeur.css';
import coding from './../logo/code (1).png'
import gaming from './../logo/game (2).png'
import collaboration from './../logo/teamwork (1).png'
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const variants = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

function Valeur() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="valeur-container">
      <div className='valeur-title-container'>
        <motion.div className='valeur-title' variants={variants} initial="initial" whileInView={"animate"}>
          Qui Sommes nous?
        </motion.div>
          <motion.div className='valeur-list-container' variants={variants} initial="initial" whileInView={ "animate"}>
            <div className='valeur-card'>
              <div className='valeur-image-container'>
                <img src={coding} alt='' className='valeur-image'></img>
              </div>
              <div className='valeur-card-title'>Formation Jeux Video</div>
              <div className='valeur-description'>Maîtrisez le développement de jeux vidéo avec notre formation concise. Plongez dans une formation pratique, libérant le pouvoir créatif pour concevoir des jeux captivants.</div>
            </div>
            <div className='valeur-card'>
              <div className='valeur-image-container'>
                <img src={gaming} alt='' className='valeur-image'></img>
              </div>
              <div className='valeur-card-title'>Connexion Industrie Jeux</div>
              <div className='valeur-description'> Découvrez les clés du succès, établissez des contacts et approfondissez vos connaissances pour prospérer dans le monde dynamique du développement de jeux. </div>
            </div>
            <div className='valeur-card'>
              <div className='valeur-image-container'>
                <img src={collaboration} alt='' className='valeur-image'></img>
              </div>
              <div className='valeur-card-title'>Créativité et Compétition</div>
              <div className='valeur-description'>Plongez dans l'univers où la créativité rencontre la compétition. On vous invite à explorer les dimensions innovantes du jeu, stimulant votre créativité tout en vous préparant à exceller dans un environnement compétitif. </div>
            </div>
          </motion.div>
      </div>
    </div>
  );
}

export default Valeur;
