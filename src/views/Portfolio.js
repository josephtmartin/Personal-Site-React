import React, { Component } from 'react';
// import { getMostPopular, filterMostPopular } from '../helpers/data/showData';
import ProjectCard from '../components/Cards/ProjectCard';

export default class Portfolio extends Component {
  state = {
    projects: [],
  }

  // componentDidMount() {
  //   this.loadShows();
  // }

  // loadShows = () => {
  //   getMostPopular().then((response) => {
  //     this.setState({
  //       shows: response,
  //     });
  //   });
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (this.state.network === 'All Shows') {
  //     this.loadShows();
  //   } else {
  //     filterMostPopular(this.state.network).then((response) => {
  //       this.setState({ shows: response });
  //     });
  //   }
  // };

  render() {
    // const { shows } = this.state;
    // const renderProjects = () => (
    //   shows.map((show) => <ProjectCard key={show.id} show={show} />)
    // );
    return (
      <div>
        <h1 className='d-flex justify-content-center mt-3'>Portfolio</h1>
        {/* <div className='d-flex flex-wrap justify-content-center container'>{renderProjects()}</div> */}
      </div>
    );
  }
}
