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
                        <SimpleCard
                            title="Infinit-Plus &#9658; 21/2019-21/2020"
                            description={
                                `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsa numquam dolor saepe excepturi facilis similique ipsum
                                iusto, ad culpa aliquam quidem facere ipsam sapiente 
                                magni eius? Est alias animi doloribus?`
                            }
                            subTitle="Tecnologies"
                            md={6}
                        >
                            <FaPython size={40}/>
                            <IoLogoJavascript size={40}/>
                            <FaReact size={40}/>
                            <SiGooglemaps size={40}/>
                        </SimpleCard>
                        <SimpleCard
                            title="Freelance &#9658; 21/2019-21/2020"
                            description={
                                `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsa numquam dolor saepe excepturi facilis similique ipsum
                                iusto, ad culpa aliquam quidem facere ipsam sapiente 
                                magni eius? Est alias animi doloribus?`
                            }
                            subTitle="Tecnologies"
                            md={6}
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
                                `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsa numquam dolor saepe excepturi facilis similique ipsum
                                iusto, ad culpa aliquam quidem facere ipsam sapiente 
                                magni eius? Est alias animi doloribus?`
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
                                `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Ipsa numquam dolor saepe excepturi facilis similique ipsum
                                iusto, ad culpa aliquam quidem facere ipsam sapiente 
                                magni eius? Est alias animi doloribus?`
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
