import './contact.css';
import facebook from './../logo/facebook 1.png';
import email from './../logo/mail 1.png';
import instagram from './../logo/instagram (1) 1.png';
import polytechnique from './../logo/image 2.png'
import polygames from './../logo/pg_logo_manette.png'
import copyright from './../logo/letter-c (1) 1.png'
function Contact() {
    return (

      <div className="container-contact">
        <div className="contact-title-container">
        <br className="line-contact"></br>
        <div id="title-contact">contact</div>
        </div>
        <div className="logo-container">
            <div class="logo-contact">
                <img src={polytechnique} alt="polytechnique"></img>
            </div>
            <div class="logo-contact">
                <img src={facebook} alt="facebook" className="logo"></img>
                <img src={email} alt="facebook" className="logo"></img>
                <img src={instagram} alt="facebook" className="logo"></img>
            </div>
            <div class="logo-contact">
                <img src={polygames} alt="polygames" id="logo-poly"></img>
            </div>
        </div>
        <div className="contact-copyrights">
          <div className='contact-copyrights-text'>
            Tous les droits sont reserves
          </div>
          <div className="contact-copyrights-logo">
            <img src={copyright} alt='copyright' ></img> 
            <div class="contact-copyrights-polygames">PolyGames</div>
          </div>
        </div>
      </div>
    );
  }

  export default Contact;