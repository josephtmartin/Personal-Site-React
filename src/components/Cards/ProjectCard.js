// import React from 'react';

// export default function ProjectCard({ project }) {
//   return (
//     <div className="container-fluid">
//       <div className="row proj-row">
//         <div className="col-md-5">
//           <img className="card-img-top" src={project.screenshot} alt="Card"></img>
//         </div>
//         <div className="col-md-7">
//           <h2 className="proj-title">{project.title}</h2>
//           <h5 className="description">{project.description}</h5>
//           <p>
//           <b>Technologies Used:</b>
//             {project.technologiesUsed}
//           </p>
//           <a href={project.url} className="btn btn-outline-light mt-auto m-2" target="_blank">Live Demo</a>
//           <a href={project.githubUrl} className="btn btn-outline-light mt-auto m-2" target="_blank">Github Project</a>
//         </div>
//     </div>
//   </div>
//   );
// }

// reactstrap components
// import {
//   Card,
//   CardImg,
//   CardImgOverlay,
//   CardTitle,
//   CardText,
// } from 'reactstrap';

// export default function Example({ project }) {
//   return (
//     <>
//       <Card className=' bg-dark text-white border-0 m-2'>
//         <CardImg
//           style={{ opacity: 0.5 }}
//           alt='...'
//           src={project.screenshot}
//         ></CardImg>
//         <CardImgOverlay className=' d-flex align-items-center'>
//           <div>
//             <CardTitle className=' h2 text-white mb-2'>{project.title}</CardTitle>
//             <CardText style={{ fontSize: 20 }} className= 'font-weight-bold'>
//               {project.description}
//             </CardText>
//             <CardText className=' text-sm font-weight-bold'>{project.technologiesUsed}</CardText>
//           </div>
//         </CardImgOverlay>
//       </Card>
//     </>
//   );
// }

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
