import './projet.css';
import gamejam from './../logo/gamejam_square.png'
import cube from './../logo/CUBE_logoDiscord.png'
import atelier from './../logo/unity.png'
import gamedev from './../logo/codeimage.png'
import concours from './../logo/2023_CUBI_Banner.jpg'
import lavalVirtual from './../logo/LV-CAMPUS-2.png'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';




function Projet() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "550%"]);
  
  return (

    <div className="projet-container" ref={ref} >
      <div className='projet-padding'></div>
      <motion.div className='projet-bg-title' style={{ y: parallaxY }}>Projet</motion.div>
      <div className='projet-card-container'>
      <div className='projet-card-line1'>
        <div className='projet-card-1'>
        <div className='projet-card-title'>Découvrez les secrets du développement de jeux.</div>
          <div className='projet-card-text'>Visite Industrielle</div>
          <img src={atelier} alt='' className='projet-card-image'></img>
        </div>
        <div className='projet-card-2'>
        <div className='projet-card-title'>Préparez-vous à créer des jeux!</div>
          <div className='projet-card-text'>Game Jams créatives</div>
          <img src={gamejam} alt='' className='projet-card-image'></img>
        </div>
        </div>
        <div className='projet-card-line2'>
        <div className='projet-card-3'>
        <div className='projet-card-title'>Club d'artiste de l'ecole de NAD UQAC.</div>
          <div className='projet-card-text'>Collaboration avec Cube</div>
          <a href='https://clubcube.notion.site/Accueil-991d6a9b579449f8a7c32ad0a117ae3f' className='projet-card-link'>En savoir Plus</a>
        <img src={cube} alt='' className='projet-card-image'></img>
        </div>
        <div className='projet-card-4'>
          <div className='projet-card-textalign'>
        <div className='projet-card-text'>Formation de Unreal Engine et Unity.</div>
        <div className='projet-card-title'>Développement de Jeu !</div>
        <img src={gamedev} alt='' className='projet-card-image'></img>
        </div>
        </div>
        </div>
        <div className='projet-card-5'>
        <div className='projet-card-text'>Dévoilez votre talent de créateur de jeux dans les concours excitant.</div>
        <div className='projet-card-title'>Concours pour Créateurs de Jeux</div>
        <div className='projet-card-text-1'>Concours Ubisoft</div>
        <div className='projet-card-text-2'>Concours Laval Virtual</div>
          <a href='https://montreal.ubisoft.com/en/our-commitments/education/game-lab-competition/' className='projet-card-link-1' >En savoir plus</a>
          <a href='https://laval-virtual.com/en/' className='projet-card-link-2'>En savoir plus</a>
        <img src={concours} alt='' className='projet-card-image'></img>
        <img src={lavalVirtual} alt='' className='projet-card-image-1'></img>
        </div>
      </div>
    </div>
  );
}

export default Projet;