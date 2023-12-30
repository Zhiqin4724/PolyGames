import './commandite.css';
import ubisoft from './../logo/ubisoft.png'
import doublestalion from './../logo/pfNpTEu7_400x400.png'
import eidos from './../logo/eidos-montreal-logo.jpg'
import unity from './../logo/unity.png'

function Commandite() {
    return (

      <div className="container-commandite">
        <div className="commanditaire-title">Nos Commanditaires</div>
        <div className='commanditaire-list'>
            <img src={ubisoft} alt='' className='commanditaire-image'></img>
            <img src={doublestalion} alt='' className='commanditaire-image'></img>
            <img src={eidos} alt='' className='commanditaire-image'></img>
            <img src={unity} alt='' className='commanditaire-image'></img>
        </div>
      </div>
    );
  }

  export default Commandite;