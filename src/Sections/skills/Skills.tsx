import React from 'react'
import { IconCard } from '../../components/cards/SimpleCard';
import { Container, Grid, ResponsiveContainer } from '../../styles/containers';
import {FaPython, FaReact} from 'react-icons/fa';
import {IoLogoJavascript, IoLogoNodejs, IoLogoHtml5, IoLogoCss3, IoLogoAngular} from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { Title } from '../../styles/text';
export const Skills:React.FC=()=> {
    return (
        <ResponsiveContainer>
            <Title align="center" margin="10px 0 ">Skills</Title>
            <Container block width="100%">
                <Grid width="200px">
                    <IconCard
                        icon={<FaReact size={60}/>}
                        title="React - ReactNative"
                        description=""
                    />
                    <IconCard
                        icon={<IoLogoJavascript size={60}/>}
                        title="JavaScript"
                        description=""
                    />
                    <IconCard
                        icon={<SiTypescript size={60}/>}
                        title="TypeScript"
                        description=""
                    />
                    <IconCard
                        icon={<IoLogoNodejs size={60}/>}
                        title="Node"
                        description=""
                    />
                    <IconCard
                        icon={<IoLogoHtml5 size={60}/>}
                        title="HTML"
                        description=""
                    />
                    <IconCard
                        icon={<IoLogoCss3 size={60}/>}
                        title="CSS"
                        description=""
                    />
                    <IconCard
                        icon={<IoLogoAngular size={60}/>}
                        title="Angular"
                        description=""
                    />
                    <IconCard
                        icon={<FaPython size={60}/>}
                        title="Python"
                        description=""
                    />
                </Grid>
            </Container>
        </ResponsiveContainer>
        
        
    )
}
