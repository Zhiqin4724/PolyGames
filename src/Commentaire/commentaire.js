import './commentaire.css';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ubisoft from './../logo/ubisoft.png'
import doublestalion from './../logo/pfNpTEu7_400x400.png'
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

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qiuxspc', 'template_dw8yh5v', formRef.current, 'KkghyDwreAbkKxkXl')
      .then((result) => {
          console.log(result);
      }, (error) => {
        console.log(error);
      });
  };
    return (

      <div className="container-commentaire" >
        <motion.div className='commentaire-text-container' variants={variants} initial="initial" whileInView="animate">
          <motion.div className='commentaire-title' variants={variants}>
              LOREM IPSUM
          </motion.div>
          <motion.div className='commentaire-text' variants={variants}>
          Pour toute question, suggestion ou collaboration, n'hésitez pas à nous contacter. Utilisez le formulaire ci-dessous et nous vous répondrons dès que possible.
          Nous sommes impatients de vous entendre !

          L'équipe de PolyGames
          </motion.div>
          <motion.div className="commanditaire-title" >Nos Commanditaires</motion.div>
          <motion.div className='commanditaire-list' >
            <img src={ubisoft} alt='' className='commanditaire-image'></img>
            <img src={doublestalion} alt='' className='commanditaire-image-doublestalion'></img>
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