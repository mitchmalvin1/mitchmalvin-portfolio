/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faUser, faLaptopFile, faLaptopCode, faComment} from '@fortawesome/free-solid-svg-icons'

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'projects', 'skills',  'contact'].map((item, index) => {
      let icon;
      if (item ==='home') {
        icon = (
        <div className="app__navigation-dot-container">
        <FontAwesomeIcon   className="app__navigation-dot initial" size="2x" icon={faHouseChimney} color={active === item? '#313BAC' : '#cbcbcb'}/>
        <h3 className="hovered">Home</h3>
        </div>

        
    )}
      else if (item ==='about') {
        icon =
        <div className="app__navigation-dot-container">
        <FontAwesomeIcon   className="app__navigation-dot initial" size="2x" icon={faUser} color={active === item? '#313BAC' : '#cbcbcb'}/>
        <h3 className="hovered">About</h3>
        </div>
        
      }
      else if (item ==='projects') {
        icon = 
        <div className="app__navigation-dot-container">
        <FontAwesomeIcon   className="app__navigation-dot initial" size="2x" icon={faLaptopFile} color={active ===item? '#313BAC' : '#cbcbcb'}/>
        <h3 className="hovered">Projects</h3>
        </div>
        
       
      }
      else if (item ==='skills') {
          icon = 
          <div className="app__navigation-dot-container">
          <FontAwesomeIcon   className="app__navigation-dot initial" size="2x" icon={faLaptopCode} color={active === item? '#313BAC' : '#cbcbcb'} />
        <h3 className="hovered">Skills</h3>
        </div>
         
      } 
      else if (item ==='contact') {
          icon = 
          <div className="app__navigation-dot-container">
          <FontAwesomeIcon   className="app__navigation-dot initial" size="2x" icon={faComment} color={active === item? '#313BAC' : '#cbcbcb'} />
        <h3 className="hovered">Contact</h3>
        </div>
          
        
      }
      return  (
           <a
        href={`#${item}`}
        key={item + index}
      >
      {icon}
      </a> 
      )
    }
      
      
    )}
  </div>
);

export default NavigationDots;