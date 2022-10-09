
import React,{useContext} from "react";
import { ThemeContext } from "../../App";
import "./ToggleSwitch.css";
  
const ToggleSwitch = ({ label }) => {


    const themeCtx = useContext(ThemeContext)
    
    function handleToggle() {
        themeCtx.toggleTheme();
        console.log('clicked', themeCtx.theme);
    }
  return (
    <div className="container" onClick={handleToggle}>
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;