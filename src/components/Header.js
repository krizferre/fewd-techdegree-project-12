import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header className="main-header">
      <svg className="logo" width="200" height="200" viewBox="-30 -30 400 400" preserveAspectRatio="xMidYMid meet">
        <g>
          <rect id="canvas_background" height="352" width="352" y="-1" x="-1"/>
          <g display="none" id="canvasGrid">
          <rect strokeWidth="0" y="0" x="0" height="100%" width="100%" id="svg_1"/>
          </g>
        </g>
        <g>
          <g className="f"><text textAnchor="start" fontFamily="Helvetica, Arial, sans-serif" fontSize="250" y="242.499982" x="150.648438" strokeWidth="0" stroke="#000" fill="#000000">F</text></g>
          <g className="k"><text textAnchor="start" fontFamily="Helvetica, Arial, sans-serif" fontSize="250" y="236.5" x="48.632813" strokeWidth="0" stroke="#000" fill="#000000">K</text></g>
          <g className="kriz"><text fontWeight="bold" textAnchor="start" fontFamily="Helvetica, Arial, sans-serif" fontSize="25" y="278.3335" x="69.833327" strokeWidth="0" stroke="#000" fill="#000000">K R I Z</text></g>
          <line className="line-left" stroke="#000" strokeLinecap="undefined" strokeLinejoin="undefined" y2="286.000315" x2="297.500005" y1="286.000315" x1="148.499994" strokeWidth="5" fill="none"/>
          <line className="line-right" stroke="#000" strokeLinecap="undefined" strokeLinejoin="undefined" y2="251.5" x2="197.500028" y1="251.5" x1="49.499999" strokeWidth="5" fill="none"/>
          <line className="line-center" stroke="#000" strokeLinecap="undefined" strokeLinejoin="undefined" y2="330.166668" x2="171.833327" y1="18.166667" x1="171.833327" strokeWidth="1.5" fill="none"/>
          <g className="ferre"><text fontWeight="bold" textAnchor="start" fontFamily="Helvetica, Arial, sans-serif" fontSize="25" y="278.322992" x="170.250179" strokeWidth="0" stroke="#000" fill="#000000">F E R R E</text></g>
        </g>
      </svg>
      <nav className="main-nav">
        <ul>
          <li><NavLink exact to={process.env.PUBLIC_URL + '/'} activeClassName="main-nav-link-active">H O M E</NavLink></li>
          <li><NavLink to={process.env.PUBLIC_URL + '/projects'} activeClassName="main-nav-link-active">P R O J E C T S</NavLink></li>
          <li><NavLink to={process.env.PUBLIC_URL + '/contact'} activeClassName="main-nav-link-active">C O N T A C T</NavLink></li>              
        </ul>
      </nav>
    </header>
  );
}

export default Header;