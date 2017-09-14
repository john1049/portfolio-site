import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const ProjectDetail = ({project, hideDetail, isVisible}) => {

    return(
      <div>
        <div className={isVisible ? 'visible project-detail-container' : 'project-detail-container'}>
          <a onClick={() => hideDetail(false)}><i className="close icon fa fa-close"></i></a>
            <h2 className="page-name">{project.name}</h2>
            <a href="http://profchris.com/ssmpari/selector/" target="blank"><img className="project-image"  width="90%"/></a>
            <div className="project-info"></div>
          </div>
        <div className={isVisible ? 'projects-overlay overlay-visible' : 'projects-overlay'} onClick={() => hideDetail(false)}></div>
      </div>
      );
}
export default ProjectDetail;
