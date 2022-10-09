import React, { useState, useContext } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {MdDarkMode} from 'react-icons/md'
import {FaSun} from 'react-icons/fa'
import { motion } from 'framer-motion';
import { ThemeContext } from "../../App";
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import Switch from "react-switch";


import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const themeCtx = useContext(ThemeContext)

  function handleToggle() {
    themeCtx.toggleTheme();
    console.log('clicked', themeCtx.theme);
}

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 >Mitch</h1>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
           
          </li>
        ))}
       
      </ul> 
      <Switch 
        offColor="#7ae2eb"
        onColor="#030303"
        // offHandleColor="#d7d23f"
        checkedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 15,
          color: "orange",
          paddingRight: 2
        }}
      >
         <MdDarkMode/>
      </div> 
      }
      uncheckedIcon = {
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 15,
          color: "#ffffff",
          paddingRight: 2
        }}
      >
         <FaSun/>
      </div> 
      }
        className="app__navbar-switch" onChange={handleToggle} checked={themeCtx.theme === 'dark'}/>
      
    

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;