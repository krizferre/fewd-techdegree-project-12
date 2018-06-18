import React from 'react';

import Project from './Project';

const ProjectContainer = (props) => {
  const results = props.data;
  let projects;
  
  if (results.length > 0) {
    projects = results.map(project => 
      <Project title={project.title}
                      desc={project.description}
                      img={project.img_src}
                      key={project.id}
                      skills={project.skills}
                      grade={project.grade}
                      link={project.link}
                      github={project.github}
      />
    );
  } else {
    projects = <li><h3><em>No projects yet</em></h3></li>;
  }

  return (
    <ul className="container">
      {projects}
    </ul>
  );
}

export default ProjectContainer;