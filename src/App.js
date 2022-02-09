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
import { faEnvelope, faMobile, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ReactRotatingText from "react-rotating-text";
import './App.css';

function App() {

  const colors = ['cyan', 'limegreen', 'hotpink', 'orange'];
  const [ color, setColor ] = useState(0);

  const changeColor = () => {
    if(color !== 3) setColor(color+1);
    else setColor(0);
  }

  return (
    <>
    <Navbar sticky="top" className="bg-dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" >Aaron's <ReactRotatingText onDeletingEnd={changeColor} color={colors[color]} cursor={false} items={['Portfolio', 'Showcase', 'Profile', 'Space']} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link className="text-warning underline" href="#skillset">My Skillset</Nav.Link>
            <Nav.Link className="text-warning underline" href="#project">Sample Projects</Nav.Link>
            <Nav.Link className="text-warning underline" href="#contactme">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
      <div className="row fullscreen" id="home">
        <div className="col-sm-8 py-3 my-auto">
          <img src={logo} className="img-fluid img-thumbnail" alt="logo" />
        </div>
        <div className="col-sm-4 py-3 my-auto text-white text-end">
          <p className="text-start">
            Hi, I'm <span className="text-warning">Aaron</span>, basically I'm a fullstack developer versed in Node JS and Javascript. 
            You can read about more details below but if you already know me, 
            we can cut to the chase and start working together!
          </p>
          <hr />
          <Button variant="link" className="text-muted my-button text-decoration-none mx-3" size="sm" href="#skillset">More about me &darr;</Button>
          <Button variant="warning" className="bg-gradient my-button" size="lg" href="mailto:aaron.kst99@gmail.com" target="_blank" rel="noreferrer">Let's chat <FontAwesomeIcon icon={faChevronRight} size="sm" /></Button>
        </div>
      </div>
      <div id="skillset" className="row py-5 mb-3 content-slug rounded">
        <p className='text-warning text-center display-4'>My skillset</p>
        <div className="col-sm-8 offset-sm-2 bg-dark rounded my-2 p-4 shadow">
          <p className='text-white'>
            <p className="h4 text-warning">Databases</p>
            <p><b>No-SQL</b>: Firebase, Mongodb <br/><b>SQL</b>: MySQL<br/></p>
            <br />
            <hr />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={mongodb} alt="mongodb" />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={mysql} alt="mysql" />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={firebase} alt="firebase" />
          </p>
        </div>
        <div className="col-sm-8 offset-sm-2 bg-dark rounded my-2 p-4 shadow">
          <p className='text-white'>
            <p className="h4 text-warning">Language and Frameworks</p>
            <p>
              <b>Language</b>: NodeJS <br/>
              <b>Backend</b>: API Engineering, Server Management<br/>
              <b>Backend Frameworks</b>: Express JS, Sails JS, Fastify, EJS Templating<br/>
              <b>Frontend</b>: ReactJS, Social Media Chatbots<br/>
              <b>Frontend Frameworks</b>: NextJS (SSR), Redux, React-Router, Sass<br/>
            </p>
            <br />
            <hr />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={nodejs} alt="nodejs" />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={react} alt="react" />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={chatbot} alt="chatbot" />
          </p>
        </div>
        <div className="col-sm-8 offset-sm-2 bg-dark rounded my-2 p-4 shadow">
          <p className='text-white'>
            <p className="h4 text-warning">Familiar Environments</p>
            <p>
              <b>Ecommerce</b>: Customer Site, Backoffice, Thirdparty API Connectivity<br/>
              <b>Chatbot</b>: Conversation Flow, CMS, Thirdparty API Connectivity<br/>
              <b>Digital Payment</b>: Transaction Engine, CMS and Backoffice, Customer App<br/>
            </p>
            <br />
            <hr />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={nodejs} alt="nodejs" />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={react} alt="react" />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={chatbot} alt="chatbot" />
          </p>
        </div>
      </div>
      <div id="project" className="row py-5 mb-3 content-slug rounded">
        <p className='text-warning text-center display-4'>Sample Projects</p>
        <div className='x-scroll mt-3'>
        <div className="row flex-nowrap flex-sm-wrap pb-3">
          <div className="col">
            <Card style={{ width: '18rem', minHeight: '35rem' }} className="mx-auto bg-dark my-2 shadow">
              <Card.Header className="text-warning">My Project</Card.Header>
              <Card.Img variant="top" src={atLogo} />
              <Card.Body className="text-white">
                <Card.Title>addTech | Landing Page</Card.Title>
                <Card.Text>
                  <small>A Digital Marketing and IT Solutions service. Give it a visit as well and enquire my business if it suits better for your requirements.</small>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="warning" size="sm" className="my-button" target="_blank" rel="noreferrer" href="https://www.addtech.site">Visit Site <FontAwesomeIcon icon={faChevronRight} size="sm" /></Button>
              </Card.Footer>
            </Card>
          </div>
          <div className="col">
          <Card style={{ width: '18rem', minHeight: '35rem' }} className="mx-auto bg-dark my-2 shadow">
            <Card.Header className="text-warning">Viber Bot</Card.Header>
            <Card.Img variant="top" src={chatbot} />
            <Card.Body className="text-white">
              <Card.Title>My Viber Bot</Card.Title>
              <Card.Text>
              <small>A simple chatbot with minimal features made to showcase my expertise in that area. Give it a try.</small>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="warning" size="sm" className="my-button" target="_blank" href="viber://pa?chatURI=aaroncb&context=portfolio&text=Hello">Chat Now <FontAwesomeIcon icon={faChevronRight} size="sm" /></Button>
              <Button variant="secondary" size="sm" className="mx-2 my-button" target="_blank" rel="noreferrer" href="https://github.com/Aaronkst/viberchatbot">Github <FontAwesomeIcon icon={faChevronRight} size="sm" /></Button>
            </Card.Footer>
          </Card>
          </div>
          <div className="col">
          <Card style={{ width: '18rem', minHeight: '35rem' }} className="mx-auto bg-dark my-2 shadow">
            <Card.Header className="text-warning">My Page</Card.Header>
            <Card.Img variant="top" src={coding} />
            <Card.Body className="text-white">
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                <small>Yes! This very portfolio is made with <a href="https://reactjs.org/" target="blank" referrer="no-referrer">create-react-app</a>. Check the Github repository for more details!</small>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="secondary" size="sm" className="my-button" target="_blank" rel="noreferrer" href="https://github.com/Aaronkst/portfolio">Github <FontAwesomeIcon icon={faChevronRight} size="sm" /></Button>
            </Card.Footer>
          </Card>
          </div>
        </div>
        </div>
      </div>
      <div className="row pt-5" id="contactme">
        <div className="col-sm-8 mb-3">
          <p className='text-warning display-4'>Contact Me</p>
          <p className='text-white h6'>Don't be a stranger, Lets work together!</p>
          <p className=' text-warning'>
              <FontAwesomeIcon icon={faMobile} size="sm" className="text-white" /> <b>(95)</b> <span className="text-white">9976328625</span>
          </p>
        </div>
        <div className="col-sm-4">
          <div className="col">
            <p className=' text-warning'>
              <FontAwesomeIcon icon={faEnvelope} size="sm" className="text-white" /> aaron.kst99@gmail.com | <a href='mailto:aaron.kst99@gmail.com' target="_blank" rel="noreferrer" className='text-decoration-none underline text-info'><small>Send me a mail now <FontAwesomeIcon icon={faChevronRight} size="sm" /></small></a>         
            </p>
          </div>
          <div className="col">
            <p className=' text-warning'>
            <FontAwesomeIcon icon={faGithub} size="sm" className="text-white" /> Aaronkst | <a href='https://github.com/Aaronkst' target="_blank" rel="noreferrer" className='text-decoration-none underline text-info'><small>Visit Profile <FontAwesomeIcon icon={faChevronRight} size="sm" /></small></a>
            </p>
          </div>
          <div className="col">
            <p className=' text-warning'>
            <FontAwesomeIcon icon={faLinkedin} size="sm" className="text-white" /> Aaron Chen | <a href='https://www.linkedin.com/in/aaron-kst' target="_blank" rel="noreferrer" className='text-decoration-none underline text-info'><small>Visit Profile <FontAwesomeIcon icon={faChevronRight} size="sm" /></small></a>
            </p>
          </div>
        </div>
        <hr />
        <p className="text-muted"><small>Khant Si Thu @ Aaron</small></p>
      </div>
    </Container>
    </>
  );
}

export default App;
