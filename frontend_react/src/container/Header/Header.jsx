import React,{useContext} from 'react'
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { ThemeContext } from '../../App';



const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const letterVariants = {
  hover: {
    scale: [1, 1.2, 1.2, 1],
    rotate: [0, 20, -20, 0],
    color: "#4437db",
    transition: {
      duration: 1,
    }
  },
  autoMove: {
    scale: [1, 1.2, 1.2, 1],
    rotate: [0, 20, -20, 0],
    color: ["#62629e","#4437db","#4437db","#62629e"]
  },
  hand: {
    scale: [1, 1.2, 1.2, 1],
    rotate: [0, 20, -20, 0],
  }
}

const firstName = ['M', 'i', 't', 'c', 'h']
const lastName = ['M', 'a', 'l', 'v', 'i', 'n']


const Header = () => {
  return (
    <div className='app__header '>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
           <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
        <div className="app__header-row">
          <motion.h1
            variants={letterVariants}
            animate="autoMove"
            className="app__header-letter"
            transition={{ 
              ease: "linear",
               duration: 1, 
               repeat: Infinity,
               repeatDelay:35,
               }}
           
          >
            H
          </motion.h1>

          <motion.h1
            variants={letterVariants}
            animate="autoMove"
            className="app__header-letter"
            transition={{ 
              delay:2,
              ease: "linear",
               duration: 1, 
               repeat: Infinity,
               repeatDelay:35,
               }}
          >
            i
          </motion.h1>
          <h1 className="app__header-letter">,&nbsp;</h1>
          <motion.h1
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          >
            👋
          </motion.h1>
        </div>
        <div className="app__header-row">
          <motion.h1
            variants={letterVariants}
            className="app__header-letter"
            animate="autoMove"
            transition={{ 
              delay:4,
              ease: "linear",
               duration: 1, 
               repeat: Infinity,
               repeatDelay:35,
               }}
          >
            I
          </motion.h1>
          <h1 className="app__header-letter">'</h1>
          <motion.h1
            variants={letterVariants}
            animate="autoMove"
            className="app__header-letter"
            transition={{ 
              delay:6,
              ease: "linear",
               duration: 1, 
               repeat: Infinity,
               repeatDelay:35,
               }}
          >
            m
          </motion.h1>
          <h1 className="app__header-letter">,&nbsp;</h1>
          {firstName.map((letter, index) => {
            const delayTime=8+(index*2);
            console.log(delayTime)
            return (
              <motion.h1
              variants={letterVariants}
              animate="autoMove"
              className="app__header-letter"
               transition={{ 
              delay: delayTime,
              ease: "linear",
               duration: 1, 
               repeat: Infinity,
               repeatDelay:35,
               }}
            >
              {letter}
            </motion.h1>
            )
          
          })}
          <h1>&nbsp;</h1>
          {lastName.map((letter, index) => {
            const delayTime=18+(index*2);
            console.log(delayTime)
            return (
              <motion.h1
              variants={letterVariants}

              animate="autoMove"
               transition={{ 
              delay: delayTime,
              ease: "linear",
               duration: 1, 
               repeat: Infinity,
               repeatDelay:35,
               }}
            >
              {letter}
            </motion.h1>
            )
    
          })}

        </div>




        <div className="app__header-badge">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className='tag-cmp app__flex'>
            <p className="p-text">Full Stack Developer</p>
            <p className="p-text">Mobile Developer</p>
          </motion.div>
        </div>

      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.img
          src={images.react}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 8, repeat: Infinity }}
          className="app__header-react-img"
        >

        </motion.img>
        <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />



      </motion.div>


      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}

        className="app__header-circles"
      >
        {[images.node, images.redux, images.sass].map((circle, index) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home', 'app__primarybg')