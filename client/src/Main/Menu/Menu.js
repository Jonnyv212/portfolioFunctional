  import React from 'react';
  import "./Menu.css";
  
  
  //Navigation bar at the top of the page. Swaps between mobileMenu and desktopMenu.
 const menu = () => {
    return (
      <div className="menu">
        <div className="mobileMenu">
          <button className="dropbtn">
            &#9776;
            <div className="dropdown-content">
              <a href="http://bit.ly/2M6hWsH" target="blank">
                Resume
              </a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </button>
        </div>

        <div className="desktopMenu">
          <div className="menuName">Jonathan Vega</div>
          <ul>
            <li className="desktopDropdown">
              <a className="desktopDropbtn">Resume</a>
              <div className="desktopDropdown-content">
                <a href="http://bit.ly/2M6hWsH" target="blank">
                  Preview
                </a>
              </div>
            </li>

            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

export default menu;