import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from './img/coding.gif';
import react from './img/react.png';
import nodejs from './img/nodejs.png';
import mongodb from './img/mongodb.png';
import mysql from './img/mysql-logo.png';
import firebase from './img/firebase.png';
import chatbot from './img/chatbot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {

  const [ section, setSection ] = useState('#home');
  const [ buttonText, setText ] = useState('About Me');
  
  const declareSection = (currentSection) => {
    // eslint-disable-next-line
    switch(currentSection) {
      case '#aboutme':
        setSection('#skillset');
        setText('Project');
        break;
      case '#skillset':
        setSection('#project');
        setText('Contact Me');
        break;
      case '#project':
        setSection('#contactme');
        setText('Back to Top');
        break; 
      case '#contactme':
        setSection('#home');
        setText('About Me');
        break;    
      case '#home':
        setSection('#aboutme');
        setText('Skillset');
        break; 
    }
  }

  return (
    <div>
      <Button variant="dark" className="NavButton" size="lg" href={section} onClick={() => {declareSection(section)}}>{buttonText}</Button>
      <div className="Main" id="home">
        <Navbar fixed="top" className="TopNavBar" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home" onClick={() => {declareSection('#contactme')}}>Aaron's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#aboutme" onClick={() => {declareSection('#home')}}>About Me</Nav.Link>
                <Nav.Link href="#skillset" onClick={() => {declareSection('#aboutme')}}>My Skillset</Nav.Link>
                <Nav.Link href="#project" onClick={() => {declareSection('#skillset')}}>My Projects</Nav.Link>
                <Nav.Link href="#contactme" onClick={() => {declareSection('#project')}}>Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <header className="Main-header">
          <img src={logo} className="Main-logo" alt="logo" />
          <p>
            <code># Eat, Sleep, Code, Repeat</code>
          </p>
        </header>
      </div>
      <div className="Main-white Main-body" id="aboutme">
        <p className="text-center h1 text-warning">About Me</p>
        <div className="col-sm-4 mx-auto info-box">
          <p className='text-center'>Hi! I'm <strong className='text-primary'>Khant Si Thu</strong> and you can call me <strong className='strong text-primary'>Aaron</strong>. I'm a Pices born on <strong className='strong text-primary'>11th March 1999</strong> and I live in <strong className='strong text-primary'>Yangon</strong>. My hobby is obviously (duh~) coding and developing from <strong className='strong text-primary'>complex webapps</strong> with huge scalability and database to <strong className='strong text-primary'>simple one page sites</strong> (Just like this very one)! You will be able to browse through my pervious works below. Hope you enjoy your stay</p>
        </div>
      </div>
      <div className="Main-body Main" id="skillset">
        <p className='text-warning text-center h1'>My skillset</p>
        <div className="col-sm-4 my-2 offset-sm-4 px-4">
          <p className='text-white'>
            <span className="h6">Databases</span><br/>
            <code><b>No-SQL</b>: Firebase, Mongodb <br/><b>SQL</b>: MySQL</code>
          </p>
          <img className="skill-icon" src={mongodb} alt="mongodb" />
          <img className="skill-icon" src={mysql} alt="mysql" />
          <img className="skill-icon" src={firebase} alt="firebase" />
        </div>
        <div className="col-sm-4 my-2 offset-sm-4 px-4">
          <p className='text-white'>
            <span className="h6">Language and Frameworks</span><br/>
            <code><b>Language</b>: NodeJS, PHP <br/><b>Backend</b>: ExpressJS<br/><b>Frontend</b>: ReactJS, ReactNative, Social Media Chatbots<br/><b>Frameworks</b>: SailsJS, NextJS, EJS</code>
          </p>
          <img className="skill-icon" src={nodejs} alt="nodejs" />
          <img className="skill-icon" src={react} alt="react" />
          <img className="skill-icon" src={chatbot} alt="chatbot" />
        </div>
      </div>
      <div className="Main-body Main-white text-dark" id="project">
        <p className='text-warning text-center h1'>My Projects</p>
        <p className="text-center">
          Projects coming soon..
        </p>
      </div>
      <div className="Main-body Main" id="contactme">

        <p className='text-warning text-center h1'>Contact Me</p>
        <p className='text-white text-center h5'>Don't be a stranger, Lets work together! Reach me out at</p>
        <br/>
        <p className='text-center'>
          <span className='text-white h6'>Email</span><br/><a href='mailto:aaron.kst99@gmail.com' className='text-decoration-none'><code><FontAwesomeIcon icon={faEnvelope} /> aaron.kst99@gmail.com</code></a>         
        </p>
        <p className='text-center'>
          <span className='text-white h6'>Phone</span><br/><code><FontAwesomeIcon icon={faMobile} /> (+95) 9 976 328 625 <br/><FontAwesomeIcon icon={faMobile} /> (+95) 9 250 154 050</code>
        </p>
      </div>
    </div>
  );
}

export default Header;