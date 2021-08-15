import React from 'react'
import { Img } from '../../styles/aubout'
import { Container, ResponsiveContainer,Row, Col } from '../../styles/containers'
import { Title, Text } from '../../styles/text'
import {FaPython, FaReact} from 'react-icons/fa';
import {IoLogoJavascript, IoLogoNodejs} from 'react-icons/io';
import {VscDebugBreakpointLog, VscDebugBreakpointLogUnverified} from 'react-icons/vsc';
import {SiGooglemaps} from 'react-icons/si';
import { SimpleCard } from '../../components/cards/SimpleCard';
export const About: React.FC = () => {
    return (
        <ResponsiveContainer>
            <Container padding="70px 0 0 0">
                <Container block width="100%">
                    <Row>
                        <Col xs={12} md={6} >
                            <Container align="center" padding="0 0 20px" justify="center">
                                <Img src="https://avatars.githubusercontent.com/u/29669464?s=400&u=a8b0c1b77dfd6dca5bc0154025abad7f5bcc3b57&v=4"/>
                            </Container>
                        </Col>
                        <Col xs={12} md={6} >
                            <Container align="center" >
                                <Container block>
                                    <Title>Paul Ganan</Title>
                                    <Text>
                                        I'm a web developer specialized in react.js I'm from Ecuador and graduated on Universidad Central Del Ecuador as computing Teacher
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
                        <SimpleCard
                            title="Infinit-Plus &#9658; 04/2019-09/2020"
                            description={
                                `
                                Its a development company where I worked in various projects like a Tickets System for a bank, Car management and Tax calculator
                                `
                            }
                            subTitle="Tecnologies"
                            md={6}
                            imgs={['https://i.imgur.com/nFsqYHa.png']}
                        >
                            <FaPython size={40}/>
                            <IoLogoJavascript size={40}/>
                            <FaReact size={40}/>
                            <SiGooglemaps size={40}/>
                        </SimpleCard>
                        <SimpleCard
                            title="Freelance &#9658; 09/2020"
                            description={
                                `I work in a team to create a web management system for a printers company, this application has inventory, invoices, contracts, etc. and different level users`
                            }
                            subTitle="Tecnologies"
                            md={6}
                            imgs={['https://i.imgur.com/knpuKwy.jpg']}
                        >
                            <IoLogoNodejs size={40}/>
                            <IoLogoJavascript size={40}/>
                            <FaReact size={40}/>
                        </SimpleCard>
                    </Row>
                </Container>
                <Title>Laguajes</Title>
                <Container padding="0 10px" block>
                    <Row>
                        <SimpleCard
                            title="Spanish"
                            description={
                                `
                                    Native proficient
                                `
                            }
                            subTitle="Level"
                            md={6}
                        >
                            <VscDebugBreakpointLog size={20}/>
                            <VscDebugBreakpointLog size={20}/>
                            <VscDebugBreakpointLog size={20}/>
                            <VscDebugBreakpointLog size={20}/>
                            <VscDebugBreakpointLog size={20}/>
                        </SimpleCard>
                        <SimpleCard
                            title="English"
                            description={
                                `
                                Ideal for work I have B2 level on different Quiz
                                `
                            }
                            subTitle="Level"
                            md={6}
                        >
                            <VscDebugBreakpointLog size={20}/>
                            <VscDebugBreakpointLog size={20}/>
                            <VscDebugBreakpointLog size={20}/>
                            <VscDebugBreakpointLogUnverified size={20}/>
                            <VscDebugBreakpointLogUnverified size={20}/>
                        </SimpleCard>
                    </Row>
                </Container>
            </Container>
        </ResponsiveContainer>
    )
}
