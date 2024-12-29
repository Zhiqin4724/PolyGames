import "./contact.css";
import facebook from "./../logo/facebook 1.png";
import email from "./../logo/mail 1.png";
import instagram from "./../logo/instagram (1) 1.png";
import polytechnique from "./../logo/image 2.png";
import polygames from "./../logo/pg_logo_manette.png";
import discord from "./../logo/discord.png";
import copyright from "./../logo/letter-c (1) 1.png";
function Contact() {
  return (
    <div className="container-contact">
      <div className="contact-title-container">
        <div id="title-contact">contact</div>
      </div>
      <div className="logo-container">
        <div class="logo-contact polytechnique">
          <a href="https://www.polymtl.ca/">
            <img
              src={polytechnique}
              alt="polytechnique"
              className="logo-polytechnique"
            ></img>
          </a>
        </div>
        <div class="logo-contact">
          <a
            href="https://www.facebook.com/polymtlgames"
            className="contact-link"
          >
            {" "}
            <img src={facebook} alt="facebook" className="logo"></img>
          </a>
          <a href="polytechniquegames@gmail.com" className="contact-link">
            {" "}
            <img src={email} alt="email" className="logo"></img>
          </a>
          <a
            href="https://www.instagram.com/_poly.games_/"
            className="contact-link"
          >
            {" "}
            <img src={instagram} alt="instagram" className="logo"></img>
          </a>
          <a href="https://discord.gg/4TY6pvVNCS" className="contact-link">
            {" "}
            <img src={discord} alt="discord" className="logo"></img>
          </a>
        </div>
        <div class="logo-contact polygames">
          <img src={polygames} alt="polygames" id="logo-poly"></img>
        </div>
      </div>
      <div className="contact-copyrights">
        <div className="contact-copyrights-text">
          Tous les droits sont reserves
        </div>
        <div className="contact-copyrights-logo">
          <img src={copyright} alt="copyright"></img>
          <div class="contact-copyrights-polygames">PolyGames</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
