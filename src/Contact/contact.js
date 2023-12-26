import './contact.css';
import facebook from './../logo/facebook 1.png';
import email from './../logo/mail 1.png';
import instagram from './../logo/instagram (1) 1.png';
import polytechnique from './../logo/image 2.png'
import polygames from './../logo/pg_logo_manette.png'
function Contact() {
    return (

      <div className="container-contact">
        <div id="title">contact</div>
        <div className="logo-container">
            <div id="logo-polygames">
                <img src={polytechnique} alt="polytechnique"></img>
            </div>
            <div id="logo-contact">
                <img src={facebook} alt="facebook" className="logo"></img>
                <img src={email} alt="facebook" className="logo"></img>
                <img src={instagram} alt="facebook" className="logo"></img>
            </div>
            <div id="logo-polytechnique">
                <img src={polygames} alt="polygames" id="logo-poly"></img>
            </div>
        </div>
      </div>
    );
  }

  export default Contact;