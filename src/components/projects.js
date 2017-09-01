import React, {Component} from 'react';
import ProjectItem from './project_item';

const Projects = () => {
    const data = require("../project-data.json");


    const projectItems = data.projects.map((project) => {
      return <ProjectItem
        key={project.id}
        project={project}
      />
    });

    return(
      <div>
        <div className="content-container">
          <h2 className="page-name">Projects</h2>
          <div className="projects-container">
            {projectItems}
          </div>
        </div>
      </div>
    );
}

export default Projects;
