import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from './img/coding.gif';
import react from './img/react.png';
import nodejs from './img/nodejs.png';
import mongodb from './img/mongodb.png';
import mysql from './img/mysql-logo.png';
import firebase from './img/firebase.png';
import chatbot from './img/chatbot.jpg';
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
        <code className="text-center h3">About Me</code>
        <div className="col-sm-4 mx-auto info-box">
          <div className="Label">
            <p className='h4'>
              Name
            </p>
          </div>
          <div className='Value'>
            <code>Khant Si Thu</code>
          </div>
          <div className="Label">
            <p className='h4'>
              D.O.B
            </p>
          </div>
          <div className='Value'>
            <code>11 - Mar - 1999</code>
          </div>
          <div className="Label">
            <p className='h4'>
              Gender
            </p>
          </div>
          <div className='Value'>
            <code>Male</code>
          </div>
          <div className="Label">
            <p className='h4'>
              Residence
            </p>
          </div>
          <div className='Value'>
            <code>Yangon</code>
          </div>
        </div>
      </div>
      <div className="Main-body Main" id="skillset">
        <div className="col-sm-6 skillset-wrapper-left my-2 px-2">
          <p className='text-white'>
            <span className="h4">Databases</span><br/>
            <code><b>No-SQL</b>: Firebase, Mongodb <br/><b>SQL</b>: MySQL</code>
          </p>
          <img className="skill-icon" src={mongodb} alt="mongodb" />
          <img className="skill-icon" src={mysql} alt="mysql" />
          <img className="skill-icon" src={firebase} alt="firebase" />
        </div>
        <div className="col-sm-6 offset-sm-6 my-2 px-2">
          <p className='text-white'>
            <span className="h4">Language and Frameworks</span><br/>
            <code><b>Language</b>: NodeJS, PHP <br/><b>Backend</b>: ExpressJS<br/><b>Frontend</b>: ReactJS, ReactNative, Social Media Chatbots<br/><b>Frameworks</b>: SailsJS, NextJS, EJS</code>
          </p>
          <img className="skill-icon" src={nodejs} alt="nodejs" />
          <img className="skill-icon" src={react} alt="react" />
          <img className="skill-icon" src={chatbot} alt="chatbot" />
        </div>
      </div>
      <div className="Main-body Main-white text-dark" id="project">
        <p className="text-center">
          Projects coming soon..
        </p>
      </div>
      <div className="Main-body Main" id="contactme">
        <p className='text-white text-center'>
          <span className='h4'>Email</span> <br/>
          <a href='mailto:aaron.kst99@gmail.com' className='text-decoration-none'><code>aaron.kst99@gmail.com</code></a>
        </p>
        <p className='text-white text-center'>
        <span className='h4'>Phone</span> <br/> 
          <code>(+95) 9 976 328 625</code> <br/>
          <code>(+95) 9 250 154 050</code>
        </p>
      </div>
    </div>
  );
}

export default Header;