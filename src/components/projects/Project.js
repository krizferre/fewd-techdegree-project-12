import React, { Component } from 'react';
import ReactModal from 'react-modal';

import demoImg from '../../images/baseline_play_circle_outline_black_18dp.png';
import githubImg from '../../images/GitHub-Mark-64px.png';

ReactModal.setAppElement('#root');
class Project extends Component {

  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    const gradeColor = (this.props.grade === 'Exceeds Expectations') 
      ? 'mediumspringgreen'
      : 'white';

    const skills = this.props.skills.map(skill => 
      <li key={skill}>{skill}</li>
    );

    return (
      <li className="project">
        <img src={this.props.img} alt="Project" />
        <div className="overlay">
          <h3 className="title">{this.props.title}</h3>
          <button type="button" onClick={this.handleOpenModal}>Details</button>
          <ReactModal 
            isOpen={this.state.showModal}
            contentLabel="Project Details Modal"
            onRequestClose={this.handleCloseModal}
            className="Modal"
            closeTimeoutMS={500}
          >
            <button onClick={this.handleCloseModal}>✖</button>
            <header>
              <h2 className="title">{this.props.title}</h2>
              <p className="grade">
                <span><strong>Treehouse Grade</strong></span>
                <span className="value" style={{color:gradeColor}}>{this.props.grade}</span>
              </p>
            </header>

            <p className="desc">{this.props.desc}</p>
            <ul className="skills">
              {skills}
            </ul>

            <div className="links">
              <a href={this.props.link} target="_blank">
                <img src={demoImg} alt="Demo" />
                <span>Demo</span>
              </a>
              <a href={this.props.github} target="_blank">
                <img src={githubImg} alt="GitHub" /> 
                <span>GitHub</span>
              </a>
            </div>

          </ReactModal>
        </div>
      </li>
    );
  }
}

export default Project;