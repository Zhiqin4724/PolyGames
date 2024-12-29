import './Past-Game-Jams.css';
import { motion } from 'framer-motion';
import gameJam from'./../logo/game_jam.jpg'; 
import gameJam25 from'./../logo/CreativeJam_Affiche_25e.png'; 
import gris from'./../logo/gris.png'; 


const gameJamData = [
    {
      id: 1,
      image: gameJam, // Path to the image for this card
      title: 'Édition Septembre 2024',
      theme: 'Thème: Caméra Fixe et Disparition',
    },
    {
      id: 2,
      image: gameJam25,
      title: 'Édition Janvier 2025',
      theme: 'Thème: À venir',
    },
    {
        id: 3,
        image: gris,
        title: 'Édition À venir',
        theme: 'Thème: À venir',
      },
  ];
  

function PastGameJams() {
  return (
    <div className="container-past_game_jam">
        <div className='past_game_jam_title'>Créative Jam</div>
        <div className='past_game_jam_card_container'>
        {gameJamData.map((card) => (
        <div key={card.id} className="past_game_jam_card">
          <div className="past_game_jam_card_image_container">
            <img src={card.image} alt="Game-jam" className="past_game_jam_card_image" />
          </div>
          <div className="past_game_jam_card_moment_container">
            <div className="past_game_jam_card_moment">
              {card.title}
            </div>
          </div>
          <div className="past_game_jam_card_Theme">
            {card.theme}
          </div>
        </div>
      ))}
        </div>
      {/* <img src={gameJam} alt='Game-jam' className='game_jam-image'></img> 
      <a href='https://www.eventbrite.ca/e/billets-creative-jam-24e-edition-774633980087'>
      <button className='Game_jam_join_button' >S'inscrire</button>
      </a> */}
    </div>
  );
}

export default PastGameJams;
