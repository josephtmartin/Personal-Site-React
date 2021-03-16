import React, { Component } from 'react';
import ProfilePic from '../images/Profile-Pic.jpg';
import bootstrap from '../images/bootstrap.png';
import css from '../images/css3.png';
import figma from '../images/figma.png';
import firebase from '../images/firebase.png';
import git from '../images/git.png';
import github from '../images/github.png';
import html from '../images/html5.png';
import jquery from '../images/jquery.png';
import js from '../images/js.png';
import lucidchart from '../images/lucidchart.png';
import netlify from '../images/netlify.png';
import npm from '../images/npm.png';
import reactpng from '../images/react.png';
import sass from '../images/sass.png';
import vscode from '../images/vscode.png';
import csharp from '../images/csharp.png';
import dotnet from '../images/dotnet.png';
import tsql from '../images/tsql.png';
import splatter from '../images/splatter.png';

export default class Bio extends Component {
  render() {
    return (
      <>
        <div className='bio'>
          <img
            className='bio-pic'
            src={ProfilePic}
            alt='Joseph Martin'
          />
          <div className='bio-details'>
            <p>
            I am a lover of music, food, and all things tech. I've always had a drive to learn more about technology and have enjoyed digging deep into how things worked together,
            especially web apps. I heard about NSS through a family friend and after some research knew it was the perfect place for me to grow my knowledge and build a foundation
            in web development. I love the challenges web development brings. I enjoy solving complex problems while collaborating with others to design the best solution possible.
            </p>
          </div>
        </div>
        <div className='tech'>
          <h2 className='proficiencies'>Technologies</h2>
        </div>
        <ul>
            <p><img className='tech-pic' src={reactpng} alt='...'/>React</p>
            <p><img className='tech-pic' src={js} alt='...'/>Javascript ES6</p>
            <p><img className='tech-pic' src={html} alt='...'/>HTML5</p>
            <p><img className='tech-pic' src={css} alt='...'/>CSS</p>
            <p><img className='tech-pic' src={sass} alt='...'/>SASS</p>
            <p><img className='tech-pic' src={github} alt='...'/>Github</p>
            <p><img className='tech-pic' src={git} alt='...'/>Git</p>
            <p><img className='tech-pic' src={firebase} alt='...'/>Firebase</p>
            <p><img className='tech-pic' src={jquery} alt='...'/>jQuery</p>
            <p><img className='tech-pic' src={npm} alt='...'/>NPM</p>
            <p><img className='tech-pic' src={bootstrap} alt='...'/>Bootstrap</p>
            <p><img className='tech-pic' src={vscode} alt='...'/>VSCode</p>
            <p><img className='tech-pic' src={figma} alt='...'/>Figma</p>
            <p><img className='tech-pic' src={lucidchart} alt='...'/>LucidChart</p>
            <p><img className='tech-pic' src={netlify} alt='...'/>Netlify</p>
          </ul>
          <ul>
            <p><img className='tech-pic' src={csharp} alt='...'/>C#</p>
            <p><img className='tech-pic' src={dotnet} alt='...'/>.NET</p>
            <p><img className='tech-pic' src={tsql} alt='...'/>T-SQL</p>
          </ul>
        <img className='footer-pic' src={splatter} alt='...'/>
      </>
    );
  }
}
