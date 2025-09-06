import "./game_jam.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import gameJam from "./../logo/CreativeJam_-_QR.webp";
import logo from "./../logo/Logo2.png";
import gris from "./../logo/gris.png";
import location from "./../logo/location.png";
import calendar from "./../logo/calendar.png";

// Le composant QACard pour une seule carte de Q&A
const QACard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`qa-card ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="qa-question">
        <span className="qa-icon">{isOpen ? "−" : "+"}</span>
        {question}
      </div>
      <div className="qa-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

// --- Votre composant Countdown et le reste du code GameJams ---
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

// --- Rendu du composant GameJams ---
function GameJams() {
  // Vos 5 questions-réponses
  const faqData = [
    {
      question: "Est-ce que les personnes sans expérience peuvent participer ?",
      answer:
        "Oui ! Participer au Creative Jam est le meilleur moyen d’apprendre à développer un jeu !",
    },
    {
      question: "Quelle est la taille minimale et maximale des équipes ?",
      answer:
        "Les équipes doivent être composées de 6 à 8 membres. Un 9ème membre peut être ajouté, mais il doit être un sound designer.",
    },
    {
      question:
        "Je veux participer mais je suis seul, est-ce que je peux m’inscrire ?",
      answer:
        "C’est tout à fait correct ! Inscris-toi seul ou en équipe. Nous veillerons à jumeler les participants qui sont seuls pour qu’ils puissent rejoindre des équipes.",
    },
    {
      question:
        "Est-ce qu’il y a des restrictions particulières pour le choix de l’engin de jeu ?",
      answer:
        "Vous êtes libres d’utiliser les outils que vous voulez. Les ordinateurs qui vous seront fournis auront Unity et Unreal Engine d'installé dessus, mais vous pouvez aussi utiliser votre propre ordinateur.",
    },
    {
      question:
        "46h c’est long, est-ce que je dois rester sur place tout le long ?",
      answer:
        "Non, il n’y a pas d'obligation de rester, mais c’est recommandé. Un espace sera dédié pour installer des sacs de couchage.",
    },
  ];

  return (
    <div className="container-game_jam">
      {/* <div className="game_jam-background">
        <img src={logo} alt="Background Logo" />
      </div> */}
      <div className="container-game__jam-image">
        <div className="game__jam-overflow">
          <img src={gameJam} alt="Gris" className="game_jam-gris"></img>
          <img src={gameJam} alt="Game-jam" className="game_jam-image"></img>
        </div>
      </div>
      <div className="game__jam-information-container">
        <div className="game__jam-information-list">
          <div className="game__jam-information-titre">
            Créative Jam 26ème édition
          </div>
          <div className="game__jam-information-date">
            <div className="game__jam-information-date-title">Date</div>

            <div className="game__jam-information-date-time">
              <img src={calendar} alt="Calendar icon" className="info-icon" />
              19 au 21 Septembre
            </div>
          </div>
          <div className="game__jam-information-lieu-container">
            <div className="game__jam-lieu-title">Endroit</div>
            <div className="game__jam-lieu-address">
              <img src={location} alt="Location icon" className="info-icon" />
              1501 Rue de Bleury, Montréal, QC H3A 0H3
            </div>
          </div>
          <div className="game__jam-information-apropos-container">
            <div className="game__jam-apropos-title">À propos</div>
            <div className="game__jam-apropos-description">
              <p>
                Le Creative Jam est un événement de 46 heures dédié à la
                création de jeux vidéo. Organisé une ou deux fois par an en
                collaboration avec le NAD UQAC, cet événement rassemble les
                étudiants pour concevoir et développer un jeu sur un thème qui
                change à chaque édition.
              </p>
              <p>
                C'est une occasion unique d'apprendre en équipe, de rencontrer
                d'autres passionnés et de mettre ses compétences à l'épreuve. À
                la fin de l'événement, les jeux sont évalués par un jury composé
                d'employés de compagnies de jeux vidéo, ce qui offre une
                excellente visibilité et des retours précieux pour les
                participants.
              </p>
            </div>
          </div>
          <div className="game__jam-information-QA">
            <h2 className="qa-title">Questions fréquentes</h2>
            {faqData.map((item, index) => (
              <QACard
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
        <div className="game__jam-right-container">
          <div className="game__jam-right-Timer">
            {" "}
            <Countdown />
          </div>
          <div className="game__jam-right-button-container">
            <a
              href="https://www.zeffy.com/en-CA/ticketing/creative-jam-25e-edition"
              className="game__jam-right-button-buy-ticket"
            >
              acheter billets
            </a>
            <a
              href="https://docs.google.com/spreadsheets/d/1SAXYwmGu45oCtutPgVdx-GY3UFUOfsV4IkylpKLipO0/edit?gid=670964336#gid=670964336"
              className="game__jam-right-button-join-team"
            >
              Liste d'equipe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameJams;