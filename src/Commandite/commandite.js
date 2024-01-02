import './commandite.css';
import ubisoft from './../logo/ubisoft.png'
import doublestalion from './../logo/pfNpTEu7_400x400.png'
import { motion } from 'framer-motion';

const variants = {
  initial: {
    y: 200,
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
function Commandite() {
    return (

      <div className="container-commandite">
        <motion.div className="commanditaire-title" variants={variants} initial="initial" whileInView="animate">Nos Commanditaires</motion.div>
        <motion.div className='commanditaire-list' variants={variants} initial="initial" whileInView="animate">
            <img src={ubisoft} alt='' className='commanditaire-image'></img>
            <img src={doublestalion} alt='' className='commanditaire-image'></img>
        </motion.div>
      </div>
    );
  }

  export default Commandite;