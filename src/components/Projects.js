import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { Route, NavLink, Redirect } from 'react-router-dom';

import ProjectContainer from './projects/ProjectContainer';
// import { FEWDProjects, FSJSProjects } from '../data/projects';
import { FEWDProjects } from '../data/projects';

const Projects = ({match}) => {
  // const fewdProjects = FEWDProjects.reverse();
  const fewdProjects = FEWDProjects;

  return (
    <div className="projects">
      {/* <header>
        <h1 className="title">P R O J E C T S</h1> */}
        {/* <nav>
          <ul>
            <li><NavLink to={`${match.url}/fewd`} activeClassName="proj-nav-link-active">Front End Web Development</NavLink></li>
            <li><NavLink to={`${match.url}/fsjs`} activeClassName="proj-nav-link-active">Full Stack JavaScript</NavLink></li>
          </ul>
        </nav> */}
      {/* </header> */}

      <Route exact path={`${match.path}`} render={ () => <Redirect to={`${match.path}/fewd`} /> } />
      <Route path={`${match.path}/fewd`} render={ () => <ProjectContainer data={fewdProjects} /> } />
      {/* <Route path={`${match.path}/fsjs`} render={ () => <ProjectContainer data={FSJSProjects} /> } /> */}
    </div>
  );
}

export default Projects;