import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from './coding.gif';
import './Header.css';

function Header() {

  const [ section, setSection ] = useState('#aboutme');
  const [ buttonText, setText ] = useState('Next');
  
  const declareSection = (currentSection) => {
    switch(currentSection) {
      case '#aboutme':
        setSection('#skillset');
        setText('Next');
        break;
      case '#skillset':
        setSection('#project');
        setText('Next');
        break;
      case '#project':
        setSection('#contactme');
        setText('Back to Top');
        break; 
      case '#contactme':
        setSection('#home');
        setText('Next');
        break;    
      case '#home':
        setSection('#aboutme');
        setText('Next');
        break; 
    }
  }

  return (
    <div>
      <Button variant="outline-info" className="NavButton" size="lg" href={section} onClick={() => {declareSection(section)}}>{buttonText}</Button>
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
        <div className="col-sm-4 mx-auto">
          <div className="Label">
            <p className="text-dark">
              Name
            </p>
          </div>
          <div className='Value'>
            <code># Khant Si Thu</code>
          </div>
          <div className="Label">
            <p className="text-dark">
              D.O.B
            </p>
          </div>
          <div className='Value'>
            <code># 11 - Mar - 1999</code>
          </div>
          <div className="Label">
            <p className="text-dark">
              Gender
            </p>
          </div>
          <div className='Value'>
            <code># Male</code>
          </div>
          <div className="Label">
            <p className="text-dark">
              Residence
            </p>
          </div>
          <div className='Value'>
            <code># Yangon</code>
          </div>
        </div>
      </div>
      <div className="Main-body Main" id="skillset">
        
      </div>
      <div className="Main-body Main-white text-dark" id="project">
        <p className="text-center">
          Projects
        </p>
      </div>
      <div className="Main-body Main" id="contactme">
        <p className='text-white text-center'>
          Email: aaron.kst99@gmail.com
        </p>
        <p className='text-white text-center'>
          Phone: (+95) 9 976 328 625
        </p>
      </div>
    </div>
  );
}

export default Header;