import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin} from 'react-icons/fa';
import { motion } from 'framer-motion';
const SocialMedia = () => (
  <div className="app__social">
    <motion.div
    whileHover= {{scale:1.3}}
    >
    <a href="https://linkedin.com/in/mitch-malvin-2b86a5220" target="_blank" rel="noreferrer">
    <FaLinkedin />
    </a>
    
    </motion.div>
    <motion.div
    whileHover= {{scale:1.3}}
    >
    <a href="https://github.com/mitchmalvin1" target="_blank" rel="noreferrer">
    <BsGithub />
    </a>
    
    </motion.div>
    <motion.div
    whileHover= {{scale:1.3}}
    >
    <a href="https://www.instagram.com/mitchmalvin" target="_blank" rel="noreferrer">
    <BsInstagram />
    </a>
    
    </motion.div>
   
  </div>
);

export default SocialMedia;