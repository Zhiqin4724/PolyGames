import './loading.css'
import manette from './../logo/pg_logo_manette.png'
import { motion } from 'framer-motion';
function Loading() {
    return (
      <>
    <div className="loading-container">
    <motion.div className="loading-img" animate={{ y: [-30, 0, -30] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}}>
        <img src={manette} alt='manette' className='loading-manette'></img>
    </motion.div>
    <div className='Loading-text-container'>
    <div className="Loading-text">
        LOADING
        
    </div>
    <div className='dot-container'>
    <div class="col-3">
          <div class="stage">
            <div class="dot-pulse"></div>
          </div>
      </div>
      </div>
      </div>
</div>
      </>
    );
  }
  export default Loading;