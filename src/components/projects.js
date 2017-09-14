import React, {Component} from 'react';
import ProjectItem from './project_item';

const Projects = (props) => {
    const projectItems = props.projects.map((project) => {
      return <ProjectItem
        onProjectSelect={props.onProjectSelect}
        key={project.id}
        project={project}
        showDetail={props.showDetail}
      />
    });

    return(
      <div>
        <div className="content-container group">
          <h2 className="page-name">Projects</h2>
          <div className="projects-container">
            {projectItems}
          </div>
        </div>
      </div>
    );
}

export default Projects;
