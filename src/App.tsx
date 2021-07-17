import React from 'react'
import Nav from './components/Nav'
import { Card } from './styles/cards'
import { Container, Grid, ResponsiveContainer } from './styles/containers'
import { GlobalStyle } from './styles/globalStyles'

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
        <Container className="min-height">
            <Container height="100vh" width="100vw" align="center" justify="center" >
                About
            </Container>
        </Container>
        <Container className="min-height" width="100vw" block >
            {/* <ResponsiveContainer> */}
                <Grid>
                    {[1,2,3,4,5,6,7,8,9].map((e, i)=>(
                        <Card key={i}>
                            {e}asd
                        </Card>    
                    ))}
                </Grid>
            {/* </ResponsiveContainer> */}
                 
        </Container>
        </>
    )
}
