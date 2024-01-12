import './projet.css';
import gamejam from './../logo/gamejam_square.png'
import cube from './../logo/CUBE_logoDiscord.png'
import atelier from './../logo/Unreal_Engine-Logo.wine.png'
import gamedev from './../logo/Poly Games Jeu VR_AR.jpg'
import concours from './../logo/2023_CUBI_Banner-1.jpg'
import React, { useRef, useState  } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


const items = [
  {
    id: 1,
    title: "GameJam",
    img: gamejam,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Concours",
    img: concours,
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
     title: "Formation",
    img: atelier,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
 
  },
  {
    id: 5,
    title: "Collaboration",
    img: cube,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   }
];


const Single = ({ item, index }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref,})
  const y = useTransform(scrollYProgress, [0,1] , [-300, 300] );
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // const marginLeft = index % 2 === 0 ? '50%' : 'auto';
  return (
    <section ref={ref} >
      
      <div className={`projet-card ${index === 0 ? 'first-card' : ''}`} >
      <div className='projet-card-border'>
      <img src={item.img} alt='' className='projet-card-image'></img>
      <div className='projet-card-text' style={{y}}>
      <div className='projet-card-title' >{item.title}</div>
      <motion.div className='projet-card-description' 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}>{item.desc}
      </motion.div>
      </div>
      <button onClick={toggleExpand} className='projet-expand-button'>
      {expanded ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}
      </button>
      </div>
      </div>
      
    </section>
  )

  }

function Projet() {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "850%"]);
  // const rotateY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  // const [backgroundColor, setBackgroundColor] = useState('transparent');
  // const [titleColor, setTitleColor] = useState('white');
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPercentage = scrollYProgress.get();
  //     // Define your colors
  //     const colors = ['#ffffff', '#C1D3FE', '#b8e0d2', '#FFC09F', '#ECF5DF', '#AFD4CA'];
  //     // Calculate the index based on scroll percentage
  //     const colorIndex = Math.floor(scrollPercentage * (colors.length - 1));
  //     // Set the background color
  //     setBackgroundColor(colors[colorIndex]);

  //     const titleColors = ['#000000', '#FEECC1', '#E0B8C6', '#9FDEFF', '#e8dff5', '#D4AFB9'];
  //     // Calculate the index based on scroll percentage
  //     const titleColorIndex = Math.floor(scrollPercentage * (titleColors.length - 1));
  //     // Set the text color
  //     setTitleColor(titleColors[titleColorIndex]);
  //   };
  
  //   // Attach the scroll event listener
  //   window.addEventListener('scroll', handleScroll);
  
  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrollYProgress]);
  const scrollIntoView = (index) => {
    const targetCard = document.querySelector(`.projet-card:nth-child(${index})`);
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (

    <div className="projet-container" ref={ref} >
      <div className='projet-padding'></div>
      <motion.div className='projet-bg-title' style={{ y: parallaxY }}>Projet</motion.div>
      <div className='projet-card-container'>
      {/* {items.map((item, index) =>
        <Single item={item} key={items.id} index={index} scrollIntoView={scrollIntoView} />
      )} */}
      <div className='projet-card-line1'>
        <div className='projet-card-1'>
          <img src={atelier} alt='' className='projet-card-image'></img>
        </div>
        <div className='projet-card-2'>
          <img src={gamejam} alt='' className='projet-card-image'></img>
        </div>
        </div>
        <div className='projet-card-line2'>
        <div className='projet-card-3'>
        <img src={cube} alt='' className='projet-card-image'></img>
        </div>
        <div className='projet-card-4'>
        <img src={gamedev} alt='' className='projet-card-image'></img>
        </div>
        </div>
        <div className='projet-card-5'>
        <img src={concours} alt='' className='projet-card-image'></img>
        </div>
      </div>
    </div>
  );
}

export default Projet;