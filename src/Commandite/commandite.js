import './commandite.css';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    y: 200,
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

function Commandite() {
  return (
    <div className="container-commandite">
      <div className='equipe-title-container'>
            <motion.div className='commandite-title-1' variants={variants} initial="initial" whileInView="animate">
              Défis techniques
            </motion.div>
            <motion.div className='commandite-title-2' variants={variants} initial="initial" whileInView="animate">
              Idées brillantes
            </motion.div>
            <motion.div className='commandite-title-3' variants={variants} initial="initial" whileInView="animate">
              Jeux mémorables
            </motion.div>
      </div>
    </div>
  );
}

export default Commandite;
