import React, {Component} from 'react';
import logo from '../img/logo.svg';
import { NavLink } from 'react-router-dom';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
        <div className="img-wrapper">
          <NavLink to="/" exact><img src={logo} className="logo" alt="logo"/></NavLink>
        </div>
          <ul>
            <li><NavLink to="/" exact activeClassName="active"><i className="icon fa fa-home"></i><span>Home</span></NavLink></li>
            <li><NavLink to="/about" activeClassName="active"><i className="icon fa fa-user"></i><span>About</span></NavLink></li>
            <li><NavLink to="/projects" activeClassName="active"><i className="icon fa fa-code"></i><span>Projects</span></NavLink></li>
            <li><NavLink to="/contact" activeClassName="active"><i className="icon fa fa-envelope"></i><span>Contact</span></NavLink></li>
          </ul>
        </div>
    );
  }
}

export default Sidebar;
