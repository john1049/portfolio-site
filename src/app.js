import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Sidebar from './components/sidebar';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import ProjectDetail from './components/project_detail';
import classNames from 'classnames';

const data = require("./project-data.json");

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: data,
      selectedProject: data.projects[0],
      detailVisible: false
    };
  }

  render(){
    return(
      <Router>
        <div>
          <Sidebar/>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects/" render={(props) => (<Projects projects={this.state.data.projects} showDetail={detailVisible => this.setState({detailVisible})} onProjectSelect={selectedProject => this.setState({selectedProject})}/>) }></Route>
          <Route path="/contact" component={Contact}></Route>
          <ProjectDetail project={this.state.selectedProject} isVisible={this.state.detailVisible} hideDetail={detailVisible => this.setState({detailVisible})}/>
        </div>
      </Router>
    )
  }
}

export default App;
