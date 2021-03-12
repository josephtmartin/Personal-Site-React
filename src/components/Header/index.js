import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <>
        <header className='header-container'>
          <div>
            <h1>Joseph Martin</h1>
          </div>
          <h5>
            <a href='mailto: goldglovejo13@gmail.com'>
              <img className='email-icon' src='https://i.postimg.cc/tCq5q7Gf/email-computer-icons-symbol-mail-icon.jpg' alt='email icon' />
            </a>{' '}
            ||{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/josephtmartin'
            >
              <img className='header-icon' src='https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg' alt='Github icon' />
            </a>{' '}
            ||{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/joetmartin/'
            >
              <img className='header-icon' src='https://i.postimg.cc/y87wz7LY/social-linkedin-circle-512.png' alt='LinkedIn icon' />
            </a>
          </h5>
        </header>
      </>
    );
  }
}
