import React, { Component } from 'react';
import getAllProjects from '../helpers/data/projectData';
import ProjectCard from '../components/Cards/ProjectCard';

export default class Portfolio extends Component {
  state = {
    projects: [],
  }

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {
    getAllProjects().then((response) => {
      this.setState({
        projects: response,
      });
    });
  }

  render() {
    const { projects } = this.state;
    const renderProjects = () => (
      projects.map((project) => <ProjectCard key={project.title} project={project} />)
    );
    return (
      <div className='main'>
        <h1 className='d-flex justify-content-center mt-3'>Portfolio</h1>
        <div>
          <div className='d-flex flex-wrap'>{renderProjects()}</div>
        </div>
      </div>
    );
  }
}
