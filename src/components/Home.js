import React from 'react';

import photoKrizFerre from '../images/kriz-ferre-bw.png';

const Home = () => {

  return (
    <div className="home">
      <header>
        <h1 className="title">H O M E T E S T</h1>
      </header>

      <div className="content">
        <img src={photoKrizFerre} alt="Kriz Ferre" />

        <div className="text">
          <p>When looking at awesome and beautiful websites, <span className="inspire"><em>inspiration</em></span> struck me to be a front-end web developer.</p>
          <p>I'm currently studying Front End Web Development Techdegree with 
            <a href="https://teamtreehouse.com/" target="_blank" rel="noopener noreferrer">
              <span className="treehouse"> Team Treehouse. </span>
            </a>
            With the help of the program, I am able to build my 
            <a href="/projects">
              <span className="portfolio"> portfolio </span> 
            </a>
            to apply the skills I've learned.
            Next, I plan to take up Full Stack Javascript Techdegree.
          </p>
          <p>I'm located in Mandaluyong, Philippines. 
            For opportunities that you may offer, please feel free to 
            <a href="/contact">
              <span className="contact-link"> contact </span> 
            </a>
            me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;