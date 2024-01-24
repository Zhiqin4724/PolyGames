import './equipe.css';
import { motion } from 'framer-motion';

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

function Equipe() {
  return (
    <div className="container-equipe">
      <div className='equipe-title-container'>
        <motion.div className='equipe-title' variants={variants} initial="initial" whileInView="animate">Jeux vidéo</motion.div>
        <motion.div className='equipe-title-2' variants={variants} initial="initial" whileInView="animate">Contraintes, créativité, succès</motion.div>
      </div>
    </div>
  );
}

export default Equipe;
