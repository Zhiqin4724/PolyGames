import './commentaire.css';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate:{
    y:0,
    opacity:1 ,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

function Commentaire() {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qiuxspc', 'template_dw8yh5v', formRef.current, 'KkghyDwreAbkKxkXl')
      .then((result) => {
          setSuccess(true);
      }, (error) => {
          setError(true);
      });
  };
    return (

      <div className="container-commentaire" >
        <motion.div className='commentaire-text-container' variants={variants} initial="initial" whileInView="animate">
          <motion.div className='commentaire-title' variants={variants}>
              LOREM IPSUM
          </motion.div>
          <motion.div className='commentaire-text' variants={variants}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </motion.div>
        </motion.div>
        <motion.div className='commentaire-form-container' variants={variants} initial="initial" whileInView="animate">
          <motion.form className='commentaire-form' ref={formRef} onSubmit={sendEmail}>
            <motion.input type='text' name="user_name" required placeholder='Nom' className='commentaire-nom'></motion.input>
            <motion.input type='email' name="user_email" required placeholder='Courriel' className='commentaire-email'></motion.input>
            
            <motion.textarea name="message" id="inputcommentaire" className="commentaire-form-text" rows="8" required="required" placeholder='Commentaire'></motion.textarea>
            <button className='commentaire-button' value="Send">Envoyer</button>
          </motion.form>
        </motion.div>
      </div>
    );
  }

  export default Commentaire;