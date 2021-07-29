import React from 'react'
import Nav from './components/nav/Nav'
import Card from './components/cards/Cards';
import { Container, Grid, ResponsiveContainer } from './styles/containers'
import { GlobalStyle } from './styles/globalStyles'
import { About } from './Sections/about/About';
import { Skills } from './Sections/skills/Skills';
import { Projects } from './Sections/projects/Projects';

export default function App() {
    return (
        <>
        <GlobalStyle/>
        <Container height="100vh" align="center" justify="center" >
            <Container block>
                <h1>Hi My name Is Paul</h1>
                <h2>Front end developer</h2>
            </Container>
            <Nav/>
        </Container>
        <Container id="about" padding="70px 0 0 0" className="min-height">
            <About />
        </Container>
        <Container id="skills" padding="70px 0 0 0" className="min-height" align="center" justify="center"  >
            <Skills/>
        </Container>
        <Container id="projects" padding="70px 0 0 0" className="min-height" align="center" justify="center"  >
            <Projects/>
        </Container>
        
        <Container id="contact" className="min-height" align="center" justify="center"  >
            social
        </Container>
        </>
    )
}
