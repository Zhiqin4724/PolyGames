import './Nav-Bar.css';
import logo from './../logo/pg_logo_manette.png';
import hamburger from './../logo/hamburger.png'
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';



function NavBar() {
    const [open, setOpen] = useState(false);
    const navbarBgControls = useAnimation();
    const variants = {
        open: {
            clipPath: " circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 40,
            }
        },
        closed: {
            clipPath: " circle(0 at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    }
    const linksItem = ["Homepage", "APropros", "Equipe", "Commandite", "Contact"]
    
    useEffect(() => {
        // Trigger the initial animation based on the initial state
        navbarBgControls.start(open ? "open" : "closed");
      }, [open, navbarBgControls]); 

    const handleToggle = async () => {
        setOpen((prev) => !prev);
        await navbarBgControls.start("closed");
        // Toggle the animation of navbar-bg
       await navbarBgControls.start(open ? "closed" : "open");
      };
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
            setScrolling(window.scrollY > scrollTop);
    
            // If the sidebar is open, don't apply scrolling animations
            if (open) {
                return;
            }
    
            // If scrolling down, slide the navbar up
            if (window.scrollY > scrollTop) {
                controls.start({ y: '-100%', transition: { duration: 0.3 } });
            } else {
                // If scrolling up, slide the navbar back down
                controls.start({ y: '0%', transition: { duration: 0.3 } });
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop, controls, open]);
    return (
            <motion.div  className={`container-navbar ${scrolling ? 'hidden' : ''}`}
            initial={{ y: 0 }}
            animate={controls}>
                <div className="nav-container">
                    <div className="navbar-logo-container">
                        <motion.div className='sidebar' animate={open ? "open" : "closed"}>
                            <motion.div className='navbar-bg' variants={variants} initial={false} animate={navbarBgControls}>
                                <div className='navbar-links'>
                                    {linksItem.map((item) => (
                                        <a href={`#${item}`} key={item}>
                                        {item}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                            <button className='hamburger-button' onClick={handleToggle}>
                                <img src={hamburger} alt="hamburger-menu" className='hamburger-menu-logo'></img>    
                            </button>
                        </motion.div>
                        <img src={logo} alt="logo-poly" className='navbar-polygames-logo'></img>
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
            </motion.div>
    );
}


export default NavBar;