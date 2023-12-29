import './projet.css';
import gamejam from './../logo/gamejam_square.png'
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
const items = [
  {
    id: 1,
    title: "GameJam",
    img: gamejam,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Atelier",
    img: { gamejam },
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    title: "GameDev",
    img: { gamejam },
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    title: "Collaboration",
    img: { gamejam },
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    title: "Concours",
    img: { gamejam },
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }
];

const Single = ({ item, index }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref,})
  const y = useTransform(scrollYProgress, [0,1] , [-300, 300] );
  return (
    <section ref={ref} >
      
      <div className={`projet-card ${index === 0 ? 'first-card' : ''}`}>
      <img src={item.img} alt='' className='projet-card-image'></img>
      <motion.div className='projet-card-text' style={{y}}>
      <div className='projet-card-title' >{item.title}</div>
      <div className='projet-card-description'>{item.desc}</div>
      </motion.div>
      </div>
      
    </section>
  )
}

function Projet() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })
  return (

    <div className="projet-container" ref={ref}>
      <div className='projet-progress-container'>
      <div className="projet-title">Projet</div>
      
      <motion.div style={{scaleX}} className='project-progress-bar'></motion.div>
      </div>
      <div className='projet-card-container'>
      {items.map((item, index) =>
        <Single item={item} key={items.id} index={index} />
      )}
      </div>
    </div>
  );
}

export default Projet;