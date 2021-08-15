import React from 'react';
import Nav from './components/nav/Nav';
import { Container } from './styles/containers'
import { GlobalStyle } from './styles/globalStyles'
import { About } from './Sections/about/About';
import { Skills } from './Sections/skills/Skills';
import { Projects } from './Sections/projects/Projects';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {Contact} from './Sections/contact/Contact';
export default function App() {
    return (
        <>
        <GlobalStyle/>
        <Container height="100vh" align="center" justify="center" >
            <Container block>
                <h1>Hello, My name Is Paul</h1>
                <h2>Front end developer</h2>
                <Container padding="20px 0" justify="space-evenly" align="center">
                    <AiFillLinkedin size={40} style={{cursor: 'pointer'}} onClick={()=>window.open('https://www.linkedin.com/in/paul-ganan-pilco/','_blank')}/>
                    <AiFillGithub size={40} style={{cursor: 'pointer'}} onClick={()=>window.open('https://github.com/Aureole-PG','_blank')}/>
                </Container>
            </Container>
            <Nav/>
        </Container>
        <Container id="about" padding="70px 0 0 0" justify="center" className="min-height">
            <About />
        </Container>
        <Container id="skills" padding="70px 0 0 0" className="min-height" align="center" justify="center"  >
            <Skills/>
        </Container>
        <Container id="projects" padding="70px 0 0 0" className="min-height" align="center" justify="center"  >
            <Projects/>
        </Container>
        <Container id="contact" className="min-height" align="center" justify="center"  >
            <Contact/>
        </Container>
        </>
    )
}
