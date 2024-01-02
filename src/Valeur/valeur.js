import './valeur.css';
import coding from './../logo/code (1).png'
import gaming from './../logo/game (2).png'
import collaboration from './../logo/teamwork (1).png'
import { motion } from 'framer-motion';

const variants = {
    initial: {
      y: 300,
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

function Valeur() {
  return (
    <>
    <div className="valeur-container" >
        <div className='valeur-title-container'>
        <motion.div className='valeur-title' variants={variants} initial="initial" whileInView="animate">
            Qui Sommes nous?
        </motion.div>
        <motion.div className='valeur-list-container' variants={variants} initial="initial" whileInView="animate">
            <div className='valeur-card'>
                <div className='valeur-image-container'>
                <img src={coding} alt='' className='valeur-image'></img>
                </div>
                
                <div className='valeur-card-title'>Formation Jeux Video</div>
                
                <div className='valeur-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. </div>
            </div>
            <div className='valeur-card'>
            <div className='valeur-image-container'>
                <img src={gaming} alt='' className='valeur-image'></img>
                </div>
                
                <div className='valeur-card-title'>Connexion Industrie Jeux</div>
                
                <div className='valeur-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. </div>
            </div>
            <div className='valeur-card'>
            <div className='valeur-image-container'>    
                <img src={collaboration} alt='' className='valeur-image'></img>
                </div>
                
                <div className='valeur-card-title'>Creativite et Competition</div>
               
                <div className='valeur-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. </div>
            </div>
        </motion.div>
        </div>
    </div></>
  );
}
export default Valeur;
