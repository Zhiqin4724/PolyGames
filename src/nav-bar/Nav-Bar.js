import './Nav-Bar.css';
import logo from './../logo/pg_logo_manette.png';
import hamburger from './../logo/hamburger.png'
function NavBar() {
    return (

      <div className="container-navbar">
        <div className="nav-container">
        <div className="navbar-logo-container">
            <div className="hamburger-menu">
                <img src={hamburger} alt='hamburger' className='hamburger-menu-logo'></img>
            </div>
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