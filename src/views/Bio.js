import React, { Component } from 'react';
// import { getMostPopular, filterMostPopular } from '../helpers/data/showData';
// import ProjectCard from '../components/Cards/ProjectCard';

export default class Bio extends Component {
  state = {
    technologies: [],
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
    return (
      <div>
        <h1 className='d-flex justify-content-center mt-3'>Bio</h1>
        {/* <div className='d-flex flex-wrap justify-content-center container'>{renderThings()}</div> */}
        <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
          przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym,
          pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker</p>
      </div>
    );
  }
}
