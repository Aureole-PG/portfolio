import React from 'react'
import { Img } from '../../styles/aubout'
import { Container, Grid, ResponsiveContainer,Row, Col } from '../../styles/containers'
import { SubTitle, Title, Text } from '../../styles/text'
import {FaPython, FaReact} from 'react-icons/fa';
import {IoLogoJavascript, IoLogoNodejs} from 'react-icons/io';
import {VscDebugBreakpointLog, VscDebugBreakpointLogUnverified} from 'react-icons/vsc';
export const About: React.FC = () => {
    return (
        <ResponsiveContainer>
            <Container padding="70px 0 0 0">
                <Container block width="100%">
                    <Row>
                        <Col xs={12} md={6} >
                            <Container align="center" justify="center">
                                <Img src="https://via.placeholder.com/150"/>
                            </Container>
                        </Col>
                        <Col xs={12} md={6} >
                            <Container align="center" >
                                <Container block>
                                    <Title>Paul Ganan</Title>
                                    <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ut doloremque sed hic sint corrupti debitis ipsam perspiciatis, in nemo. Eum accusamus tempore sunt autem eveniet earum animi sed molestiae!
                                    </Text>
                                    
                                
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container block>
                <Title>Experience</Title>
                <Container padding="0 10px" block>
                    <Row>
                        <Col md={6}>
                            <Text textStyle="italic" margin="0 0 10px 0">Infinit-Plus - > 21/2019-21/2020</Text>
                            <Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsa numquam dolor saepe excepturi facilis similique ipsum
                                iusto, ad culpa aliquam quidem facere ipsam sapiente 
                                magni eius? Est alias animi doloribus?
                            </Text>
                            <SubTitle>Tecnologies</SubTitle>
                            <Container block padding="10px 0 50px 0">
                                <Grid width={"50px"}>
                                    <FaPython size={40}/>
                                    <IoLogoJavascript size={40}/>
                                    <FaReact size={40}/>
                                </Grid>
                            </Container>
                        </Col>
                        <Col md={6}>
                            <Text textStyle="italic" margin="0 0 10px 0">Freelance - > 21/2019-21/2020</Text>
                            <Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsa numquam dolor saepe excepturi facilis similique ipsum
                                iusto, ad culpa aliquam quidem facere ipsam sapiente 
                                magni eius? Est alias animi doloribus?
                            </Text>
                            <SubTitle>Tecnologies</SubTitle>
                            <Container block padding="10px 0 50px 0">
                                <Grid width={"50px"}>
                                    <IoLogoNodejs size={40}/>
                                    <IoLogoJavascript size={40}/>
                                    <FaReact size={40}/>
                                </Grid>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Title>Laguajes</Title>
                <Container padding="0 10px" block>
                    <Row>
                        <Col md={6}>
                            <Text textStyle="italic" margin="0 0 10px 0">Spanish</Text>
                            <Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsa numquam dolor saepe excepturi facilis similique ipsum
                                iusto, ad culpa aliquam quidem facere ipsam sapiente 
                                magni eius? Est alias animi doloribus?
                            </Text>
                            <SubTitle>Level</SubTitle>
                            <Container block padding="10px 0 50px 0">
                                <Grid width={"20px"}>
                                    <VscDebugBreakpointLog size={20}/>
                                    <VscDebugBreakpointLog size={20}/>
                                    <VscDebugBreakpointLog size={20}/>
                                    <VscDebugBreakpointLog size={20}/>
                                    <VscDebugBreakpointLog size={20}/>
                                </Grid>
                            </Container>
                        </Col>
                        <Col md={6}>
                            <Text textStyle="italic" margin="0 0 10px 0">English</Text>
                            <Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsa numquam dolor saepe excepturi facilis similique ipsum
                                iusto, ad culpa aliquam quidem facere ipsam sapiente 
                                magni eius? Est alias animi doloribus?
                            </Text>
                            <SubTitle>Level</SubTitle>
                            <Container block padding="10px 0 50px 0">
                                <Grid width={"20px"}>
                                    <VscDebugBreakpointLog size={20}/>
                                    <VscDebugBreakpointLog size={20}/>
                                    <VscDebugBreakpointLogUnverified size={20}/>
                                    <VscDebugBreakpointLogUnverified size={20}/>
                                    <VscDebugBreakpointLogUnverified size={20}/>
                                </Grid>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </ResponsiveContainer>
    )
}
