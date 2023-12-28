import './equipe.css';
import cube from './../logo/CUBE_logoDiscord.png'
import gamejam from './../logo/gamejam_square.png'
import atelier from './../logo/creative-team.png'
import gamedev from './../logo/coding (1) 1.png'
import concours from './../logo/trophy.png'
import manette from './../logo/video-games 1.png'
function Equipe() {
    return (

      <div className="container-equipe">
        <div className='equipe-title-container'>
          <img></img>
          <div className='equipe-title'>Notre Equipe</div>
          <div className='equipe-title-2'>Ipsum Lorem</div>
          <img></img>
        </div>
        <div className='equipe-cards-container'>
          
            <div className='equipe-cards-1'>
              <img src={gamejam} alt='gamejam' className='equipe-gamejam-logo'></img>
            </div>
          
          
            <div className='equipe-cards-2'>
              <img src={atelier} alt='atelier' className='equipe-atelier-logo'></img>
            </div>
          
          
            <div className='equipe-cards-3'>
              <img src={gamedev} alt='gamedev' className='equipe-gamedev-logo'></img>
              <img src={manette} alt='manette' className='equipe-manette-logo'></img>
            </div>
          
          
            <div className='equipe-cards-4'>
              <img src={cube} alt='cube' className='equipe-cube-logo'></img>
            </div>
          
          
            <div className='equipe-cards-5'>
              <img src={concours} alt='concours' className='equipe-concours-logo'></img>
            </div>
          
        </div>
      </div>
    );
  }

  export default Equipe;