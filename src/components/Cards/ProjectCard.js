import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button,
} from 'reactstrap';

class ProjectCard extends Component {
  render() {
    const { project } = this.props;
    return (
      <>
        <Card className='project-card m-3'>
          <CardImg className='card-image' top width="100%" src={project.screenshot} alt="Card image cap" />
          <CardBody className='card-body'>
            <div className='card-text'>
              <CardTitle className='card-title' tag="h5">{project.title}</CardTitle>
              <CardText>{project.description}</CardText>
              <div className='btn-container'>
                <Button className='project-btn mr-2' href={project.url}><i className="fas fa-link card-icon"></i></Button>
                <Button className='project-btn' href={project.githubUrl}><i className="fab fa-github card-icon"></i></Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default ProjectCard;
