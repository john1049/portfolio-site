import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const ProjectItem = ({project}) => {
    return(
        <div>
          <NavLink to={"projects/"+project.id}><div className="project"><div className="overlay"><p>{project.name}</p></div></div></NavLink>
        </div>
    );
  }

export default ProjectItem;
