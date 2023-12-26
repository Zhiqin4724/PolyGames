import './Nav-Bar.css';
import logo from './../logo/pg_logo_manette.png';

function NavBar() {
    return (

      <div className="container">
        <div className="nav-container">
        <div>
            <img src={logo} alt="poly-logo" className="icon"></img>
        </div>
        <div className='content'>
            <div className='info'>
                À Propos 
            </div>
            <div className='info'>
                Équipe 
            </div>
            <div className='info'>
                Commandite 
            </div>
            <div className='info'>
            Contact 
            </div>
        </div>
        </div>
      </div>
    );
  }

  export default NavBar;