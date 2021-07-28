import React from 'react'
import Nav from './components/nav/Nav'
import Card from './components/cards/Cards';
import { Container, Grid, ResponsiveContainer } from './styles/containers'
import { GlobalStyle } from './styles/globalStyles'
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';

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
        <Container id="about" className="min-height">
            <About />
        </Container>
        <Container id="skills" className="min-height" align="center" justify="center"  >
            <Skills/>
        </Container>
        <Container id="projects" className="min-height" align="center" justify="center"  >
            <ResponsiveContainer>
                <h1>Projets</h1>
                <Grid>
                    {[1,2,3].map((e, i)=>(
                        <Card
                            key={i}
                            imgUrl="https://via.placeholder.com/150"
                            name="nombre"
                        />
                    ))}
                </Grid>
            </ResponsiveContainer>
                 
        </Container>
        
        <Container id="social" className="min-height" align="center" justify="center"  >
                    social
        </Container>
        </>
    )
}
