import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const ProjectItem = ({project, onProjectSelect, showDetail}) => {


    return(
        <div>
          <a onClick={() => {onProjectSelect(project);showDetail(true)}}>
            <div className="project" onClick={window.scrollTo(0,0)}>
              <p className="project-name">{project.name}</p>
              <p className="see-project">See Project &nbsp;<i className="fa fa-long-arrow-right "></i></p>
              <img className="project-thumb" src={project.thumb} width="100%" height="100%" />
            </div>
          </a>
        </div>
    );
  }

export default ProjectItem;
