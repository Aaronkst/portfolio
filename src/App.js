import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Card } from 'react-bootstrap';
import logo from './img/coding.gif';
import react from './img/react.png';
import nodejs from './img/nodejs.png';
import mongodb from './img/mongodb.png';
import mysql from './img/mysql-logo.png';
import firebase from './img/firebase.png';
import chatbot from './img/chatbot.jpg';
import atLogo from './img/a-t.png';
import coding from './img/favicon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ReactRotatingText from "react-rotating-text";
import './App.css';

function App() {

  const colors = ['cyan', 'limegreen', 'hotpink', 'orange'];

  const [ section, setSection ] = useState('#home');
  const [ buttonText, setText ] = useState('About Me');
  const [ color, setColor ] = useState(0);

  const changeColor = () => {
    if(color !== 3) setColor(color+1);
    else setColor(0);
  }
  
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
      <Navbar sticky="top" className="TopNavBar" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" onClick={() => {declareSection('#contactme')}}>Aaron<ReactRotatingText onDeletingEnd={changeColor} color={colors[color]} cursor={false} items={['.Portfolio', '.Showcase', '.Profile', '.Space']} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link className="text-warning" href="#aboutme" onClick={() => {declareSection('#home')}}>About Me</Nav.Link>
              <Nav.Link className="text-white" href="#skillset" onClick={() => {declareSection('#aboutme')}}>My Skillset</Nav.Link>
              <Nav.Link className="text-warning" href="#project" onClick={() => {declareSection('#skillset')}}>Sample Projects</Nav.Link>
              <Nav.Link className="text-white" href="#contactme" onClick={() => {declareSection('#project')}}>Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="Main" id="home">
        <header className="Main-header">
          <img src={logo} className="Main-logo" alt="logo" />
          <code className="h3"><span># Eat,</span> <span>Sleep,</span> <span>Code,</span> <span>Repeat</span></code>
        </header>
      </div>
      <div className="Main-white Main-body" id="aboutme">
        <p className="text-center display-4 text-warning">About Me</p>
        <div className="col-sm-4 mx-auto info-box shadow">
          <p className='text-center'>Hi! I'm <strong className='text-primary'>Khant Si Thu</strong> and you can call me <strong className='strong text-primary'>Aaron</strong>. I'm a Pisces born on <strong className='strong text-primary'>11th March 1999</strong> and I live in <strong className='strong text-primary'>Yangon</strong>. My hobby is obviously (duh~) coding and developing from <strong className='strong text-primary'>complex webapps</strong> with huge scalability and database to <strong className='strong text-primary'>simple one page sites</strong> (Just like this very one)! You will be able to browse through my sample works below. Hope you enjoy your stay</p>
        </div>
      </div>
      <div className="Main-body Main" id="skillset">
        <p className='text-warning text-center display-4'>My skillset</p>
        <div className="col-sm-4 my-2 offset-sm-4 px-4">
          <p className='text-white'>
            <span className="h6">Databases</span><br/>
            <code><b>No-SQL</b>: Firebase, Mongodb <br/><b>SQL</b>: MySQL</code>
          </p>
          <p className='text-center'>
          <img className="skill-icon" src={mongodb} alt="mongodb" />
          <img className="skill-icon" src={mysql} alt="mysql" />
          <img className="skill-icon" src={firebase} alt="firebase" />
          </p>
        </div>
        <div className="col-sm-4 my-2 offset-sm-4 px-4">
          <p className='text-white'>
            <span className="h6">Language and Frameworks</span><br/>
            <code><b>Language</b>: NodeJS, PHP <br/><b>Backend</b>: ExpressJS<br/><b>Frontend</b>: ReactJS, ReactNative, Social Media Chatbots<br/><b>Frameworks</b>: SailsJS, NextJS, EJS, Redux</code>
          </p>
          <p className='text-center'>
          <img className="skill-icon" src={nodejs} alt="nodejs" />
          <img className="skill-icon" src={react} alt="react" />
          <img className="skill-icon" src={chatbot} alt="chatbot" />
          </p>
        </div>
      </div>
      <div className="Main-body Main-white text-dark container-fluid" id="project">
        <p className='text-warning text-center display-4'>Sample Projects</p>
          <div className="row mt-3">
            <Card style={{ maxWidth: '20rem' }} className="mx-auto my-2 shadow">
              <Card.Img variant="top" src={chatbot} />
              <Card.Body>
                <Card.Title>Viber Bot</Card.Title>
                <Card.Text>
                <small>A simple chatbot with minimal features made to showcase my expertise in that area. Give it a try.</small>
                </Card.Text>
                <Button variant="warning" target="_blank" href="viber://pa?chatURI=aaroncb&context=portfolio&text=Hello">Chat Now &#8594;</Button>
                <Button variant="secondary" className="mx-2" target="_blank" rel="noreferrer" href="https://github.com/Aaronkst/viberchatbot">Github &#8594;</Button>
              </Card.Body>
            </Card>
            <Card style={{ maxWidth: '20rem' }} className="mx-auto my-2 shadow">
              <Card.Img variant="top" src={coding} />
              <Card.Body>
                <Card.Title>Portfolio</Card.Title>
                <Card.Text>
                  <small>Yes, this very portfolio is made with create-react-app. Check the Github repository for more details!</small>
                </Card.Text>
                <Button variant="secondary" target="_blank" rel="noreferrer" href="https://github.com/Aaronkst/portfolio">Github &#8594;</Button>
              </Card.Body>
            </Card>
            <Card style={{ maxWidth: '20rem' }} className="mx-auto my-2 shadow">
              <Card.Img variant="top" src={atLogo} />
              <Card.Body>
                <Card.Title>My Site</Card.Title>
                <Card.Text>
                  <small>A Digital Marketing and IT Solutions service.</small>
                </Card.Text>
                <Button variant="warning" target="_blank" rel="noreferrer" href="https://a-t.netlify.app">Visit Site &#8594;</Button>
              </Card.Body>
            </Card>
          </div>
      </div>
      <div className="Main-body Main container-fluid" id="contactme">

        <p className='text-warning text-center display-4'>Contact Me</p>
        <p className='text-white text-center h6'>Don't be a stranger, Lets work together! Reach me out at</p>
        <br/>
        <div className="row mt-5">
          <div className="col-sm-4">
            <p className='text-center text-warning'>
              <FontAwesomeIcon icon={faEnvelope} /> aaron.kst99@gmail.com |<a href='mailto:aaron.kst99@gmail.com' target="_blank" rel="noreferrer" className='text-decoration-none'><small className="text-info"> Send me a mail now &#8594; </small></a>         
            </p>
          </div>
          <div className="col-sm-4">
            <p className='text-center text-warning'>
              <FontAwesomeIcon icon={faMobile} /> (+95) 9 976 328 625 | 9 250 154 050
            </p>
          </div>
          <div className="col-sm-4">
            <p className='text-center text-warning'>
            <FontAwesomeIcon icon={faGithub} /> Aaronkst |<a href='https://github.com/Aaronkst' target="_blank" rel="noreferrer" className='text-decoration-none'><small className="text-info"> Visit Profile &#8594; </small></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
