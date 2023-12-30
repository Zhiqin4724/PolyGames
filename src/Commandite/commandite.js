import './commandite.css';
import ubisoft from './../logo/ubisoft.png'
import doublestalion from './../logo/pfNpTEu7_400x400.png'
import eidos from './../logo/eidos-montreal-logo.jpg'
import unity from './../logo/unity.png'

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
function Commandite() {
    return (

      <div className="container-commandite">
        <div className="commanditaire-title">Nos Commanditaires</div>
        <div className='commanditaire-list'>
            <img src={ubisoft} alt='' className='commanditaire-image'></img>
            <img src={doublestalion} alt='' className='commanditaire-image'></img>
        </div>
      </div>
    );
  }

  export default Commandite;