import './projet.css';
import gamejam from './../logo/gamejam_square.png'
import cube from './../logo/CUBE_logoDiscord.png'
import atelier from './../logo/Poly Games Atelier Unity A2018.jpg'
import gamedev from './../logo/Poly Games Jeu VR_AR.jpg'
import concours from './../logo/2023_CUBI_Banner-1.jpg'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


const items = [
  {
    id: 1,
    title: "GameJam",
    img: gamejam,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Formation",
    img: atelier,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    title: "GameDev",
    img: gamedev,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    title: "Collaboration",
    img: cube,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    title: "Concours",
    img: concours,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }
];


const Single = ({ item, index }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref,})
  const y = useTransform(scrollYProgress, [0,1] , [-300, 300] );

  const marginLeft = index % 2 === 0 ? '50%' : 'auto';
  return (
    <section ref={ref} >
      
      <div className={`projet-card ${index === 0 ? 'first-card' : ''}`} style={{ marginLeft }}>
      <img src={item.img} alt='' className='projet-card-image'></img>
      <div className='projet-card-text' style={{y}}>
      <div className='projet-card-title' >{item.title}</div>
      <div className='projet-card-description'>{item.desc}</div>
      </div>
      </div>
      
    </section>
  )
}



function Projet() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "650%"]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
 

  return (

    <div className="projet-container" ref={ref}>
      <div className='projet-padding'></div>
      <motion.div className='projet-bg-title' style={{ y: parallaxY, rotateY }}>Projet</motion.div>
      <div className='projet-card-container'>
      {items.map((item, index) =>
        <Single item={item} key={items.id} index={index} />
      )}
      </div>
    </div>
  );
}

export default Projet;