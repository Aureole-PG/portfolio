import React from 'react'
import Nav from './components/Nav'
import Card from './components/Cards';
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
        <Container className="min-height" align="center" justify="center"  >
            <ResponsiveContainer>
                <h1>Projets</h1>
                <Grid>
                    {[1,2,3].map((e, i)=>(
                        <Card
                            key={i}
                            imgUrl="https://via.placeholder.com/150"
                            name="nombre"
                        />
                        // <Container>
                        //     <Card key={i}>
                        //         <Img src="https://via.placeholder.com/150"/>
                        //         <FocusContent>
                        //             <Container block  padding="0 10px 0 10px">
                        //                 <h4>nombre</h4>
                        //                 <p>
                        //                     Lorem ipsum dolor, sit amet ciciatis excepturi earum sit id aliquid ad modi inventore aspernatur veritatis, rerum doloribus.</p> 
                        //             </Container>
                        //         </FocusContent>
                        //     </Card>
                            
                            
                        // </Container>
                    ))}
                </Grid>
            </ResponsiveContainer>
                 
        </Container>
        </>
    )
}
