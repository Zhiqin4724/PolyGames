import "./game_jam.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import gameJam from "./../logo/CreativeJam_-_QR.webp";
import gris from "./../logo/gris.png";

const variants = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Countdown = () => {
  const deadline = new Date("September 19, 2025 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference < 0) {
        setIsFinished(true);
        return {};
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (Object.keys(newTimeLeft).length === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  if (isFinished) {
    return <div className="countdown-message">Le jeu a commencé!</div>;
  }

  // Helper to format time with leading zero
  const formatTime = (time) => String(time).padStart(2, "0");

  return (
    <div className="countdown-container">
      {Object.keys(timeLeft).length > 0 ? (
        <>
          <div className="countdown-item">
            <span className="countdown-digit">{formatTime(timeLeft.days)}</span>
            <span className="countdown-label">Jours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-digit">
              {formatTime(timeLeft.hours)}
            </span>
            <span className="countdown-label">Heures</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-digit">
              {formatTime(timeLeft.minutes)}
            </span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-digit">
              {formatTime(timeLeft.seconds)}
            </span>
            <span className="countdown-label">Secondes</span>
          </div>
        </>
      ) : (
        <span className="text-xl">Le compte à rebours est terminé!</span>
      )}
    </div>
  );
};

function GameJams() {
  return (
    <div className="container-game_jam">
      <div className="container-game__jam-image">
        <div className="game__jam-overflow">
          <img src={gameJam} alt="Gris" className="game_jam-gris"></img>
          <img src={gameJam} alt="Game-jam" className="game_jam-image"></img>
        </div>
      </div>
      <div className="game__jam-information-container">
        <div className="game__jam-information-list">
          <div className="game__jam-information-titre">
            Creative Jam 46eme edition
          </div>
          <div className="game__jam-information-date">
            <div className="game__jam-information-date-title">Date</div>
            <div className="game__jam-information-date-time">
              19 au 21 Septembre
            </div>
          </div>
          <div className="game__jam-information-lieu">Endroit</div>
          <div className="game__jam-information-apropros">A propros</div>
          <div className="game__jam-information-QA">QA</div>
        </div>
        <div className="game__jam-right-container">
          <div className="game__jam-right-Timer">
            {" "}
            <Countdown />
          </div>
          <div className="game__jam-right-button-container">
            <a
              href="https://www.example.com/tickets"
              className="game__jam-right-button-buy-ticket"
            >
              acheter billets
            </a>
            <a
              href="https://www.example.com/teams"
              className="game__jam-right-button-join-team"
            >
              Liste d'equipe
            </a>
          </div>
        </div>
      </div>
      {/* <a href='https://www.zeffy.com/en-CA/ticketing/creative-jam-25e-edition'>
      <button className='Game_jam_join_button' >S'inscrire</button>
      </a> */}
    </div>
  );
}

export default GameJams;
