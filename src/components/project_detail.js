import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const ProjectDetail = (props) => {

    const projectNum = props.match.params.id;

    return(
      <div>
        <div className="project-detail-container">
          <NavLink to="/projects" ><div className="back-button"><i className="icon fa fa-chevron-right"></i></div></NavLink>
            <h2 className="page-name">{props.data.projects[projectNum].name}</h2>
            <div className="projects-container">
              This is project info
            </div>
          </div>
        <NavLink to="/projects" ><div className="projects-overlay"></div></NavLink>
      </div>
    );
  }

export default ProjectDetail;
