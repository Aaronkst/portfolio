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
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
    <Navbar className="bg-dark border-white" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" >Aaron's <ReactRotatingText onDeletingEnd={changeColor} color={colors[color]} cursor={false} items={['Portfolio', 'Showcase', 'Profile', 'Space']} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link className="text-info underline" href="#skillset">My Skillset &darr;</Nav.Link>
            <Nav.Link className="text-info underline" href="#project">Sample Projects &darr;</Nav.Link>
            <Nav.Link className="text-info underline" href="#contactme">Contact Me &darr;</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
      <div className="row fullscreen" id="home">
        <div className="col-sm-6 py-3 my-auto">
          <img src={logo} className="img-fluid" alt="logo" />
        </div>
        <div className="col-sm-6 py-3 my-auto text-white text-end">
          <p>
            Hi, I'm Aaron, basically I'm a fullstack developer versed in Node JS and Javascript. 
            You can read about more details below but if you already know me, 
            we can cut to the chase and start working together!
          </p>
          <hr />
          <Button variant="link" className="text-muted my-button text-decoration-none mx-3" size="sm" href="#skillset">Learn More &darr;</Button>
          <Button variant="warning" className="bg-gradient my-button" size="lg" href="mailto:aaron.kst99@gmail.com" target="_blank" rel="noreferrer">Let's chat <FontAwesomeIcon icon={faChevronRight} size="sm" /></Button>
        </div>
      </div>
      <div id="skillset" className="row py-5 content-slug">
        <p className='text-warning text-center display-4'>My skillset</p>
        <div className="col-sm-8 offset-sm-2 bg-dark rounded my-2 p-4 shadow">
          <p className='text-white'>
            <p className="h4">Databases</p>
            <code><b>No-SQL</b>: Firebase, Mongodb <br/><b>SQL</b>: MySQL<br/></code>
            <br />
            <hr />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={mongodb} alt="mongodb" />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={mysql} alt="mysql" />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={firebase} alt="firebase" />
          </p>
        </div>
        <div className="col-sm-8 offset-sm-2 bg-dark rounded my-2 p-4 shadow">
          <p className='text-white'>
            <p className="h4">Language and Frameworks</p>
            <code>
              <b>Language</b>: NodeJS <br/>
              <b>Backend</b>: API Engineering, Server Management<br/>
              <b>Backend Frameworks</b>: Express JS, Sails JS, Fastify, EJS Templating<br/>
              <b>Frontend</b>: ReactJS, Social Media Chatbots<br/>
              <b>Frontend Frameworks</b>: NextJS (SSR), Redux, React-Router, Sass<br/>
            </code>
            <br />
            <hr />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={nodejs} alt="nodejs" />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={react} alt="react" />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={chatbot} alt="chatbot" />
          </p>
        </div>
        <div className="col-sm-8 offset-sm-2 bg-dark rounded my-2 p-4 shadow">
          <p className='text-white'>
            <p className="h4">Familiar Environments</p>
            <code>
              <b>Ecommerce</b>: Customer Site, Backoffice, Thirdparty API Connectivity<br/>
              <b>Chatbot</b>: Conversation Flow, CMS, Thirdparty API Connectivity<br/>
              <b>Digital Payment</b>: Transaction Engine, CMS and Backoffice, Customer App<br/>
            </code>
            <br />
            <hr />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={nodejs} alt="nodejs" />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={react} alt="react" />
            <img width={70} className="bg-white rounded-circle mx-2 p-2" src={chatbot} alt="chatbot" />
          </p>
        </div>
      </div>
      <div id="project" className="row py-5 content-slug">
        <p className='text-warning text-center display-4'>Sample Projects</p>
        <div className="row mt-3">
          <div className="col">
          <Card style={{ width: '20rem', minHeight: '35rem' }} className="mx-auto bg-dark my-2 shadow">
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
          <Card style={{ width: '20rem', minHeight: '35rem' }} className="mx-auto bg-dark my-2 shadow">
            <Card.Header className="text-warning">My Page</Card.Header>
            <Card.Img variant="top" src={coding} />
            <Card.Body className="text-white">
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                <small>Yes, this very portfolio is made with <a href="https://reactjs.org/" target="blank" referrer="no-referrer">create-react-app</a>. Check the Github repository for more details!</small>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="secondary" size="sm" className="my-button" target="_blank" rel="noreferrer" href="https://github.com/Aaronkst/portfolio">Github <FontAwesomeIcon icon={faChevronRight} size="sm" /></Button>
            </Card.Footer>
          </Card>
          </div>
          <div className="col">
          <Card style={{ width: '20rem', minHeight: '35rem' }} className="mx-auto bg-dark my-2 shadow">
            <Card.Header className="text-warning">My Project</Card.Header>
            <Card.Img variant="top" src={atLogo} />
            <Card.Body className="text-white">
              <Card.Title>Landing Page</Card.Title>
              <Card.Text>
                <small>A Digital Marketing and IT Solutions service. Give it a visit as well and enquire my business if it suits better for your requirements.</small>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="warning" size="sm" className="my-button" target="_blank" rel="noreferrer" href="https://www.addtech.site">Visit Site <FontAwesomeIcon icon={faChevronRight} size="sm" /></Button>
            </Card.Footer>
          </Card>
          </div>
        </div>
      </div>
      <div className="row py-5" id="contactme">
        <div className="col-sm-8 mb-5">
          <p className='text-warning display-4'>Contact Me</p>
          <p className='text-white h6'>Don't be a stranger, Lets work together!</p>
        </div>
        <div className="col-sm-4">
          <div className="col">
            <p className=' text-warning'>
              <FontAwesomeIcon icon={faEnvelope} /> aaron.kst99@gmail.com | <a href='mailto:aaron.kst99@gmail.com' target="_blank" rel="noreferrer" className='text-decoration-none underline text-info'><small>Send me a mail now <FontAwesomeIcon icon={faChevronRight} size="sm" /></small></a>         
            </p>
          </div>
          <div className="col">
            <p className=' text-warning'>
            <FontAwesomeIcon icon={faGithub} /> Aaronkst | <a href='https://github.com/Aaronkst' target="_blank" rel="noreferrer" className='text-decoration-none underline text-info'><small>Visit Profile <FontAwesomeIcon icon={faChevronRight} size="sm" /></small></a>
            </p>
          </div>
          <div className="col">
            <p className=' text-warning'>
              <FontAwesomeIcon icon={faMobile} /> <b>+95</b> <span className="text-info">9 976 328 625</span>
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
