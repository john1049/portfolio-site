import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as Router, Route} from 'react-router-dom';
import TransitionGroup from 'react-transition-group';
import Home from './components/home';
import Sidebar from './components/sidebar';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import ProjectDetail from './components/project_detail';

const data = require("./project-data.json");

ReactDOM.render(
  <Router>
    <div>
      <Sidebar />
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/projects/" component={Projects}></Route>
      <Route path="/projects/:id" render={(props) => (<ProjectDetail {...props} data={data} />)}></Route>
      <Route path="/contact" component={Contact}></Route>
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
