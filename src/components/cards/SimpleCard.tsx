import React from 'react';
import { ReactNode } from 'react';
import { Container, Col, Grid } from '../../styles/containers';
import { Text, SubTitle } from '../../styles/text'; 
import {Img} from '../../styles/cards';
import RViewerJS from 'viewerjs-react';
import 'viewerjs-react/dist/index.css';
type card={
    title: string
    description: string
    subTitle: string,
    md?: number
    xs?: number
    g?: number
    imgs?: string[]
}

export const SimpleCard:React.FC<card>= ({title, description, subTitle, md , xs , g,children, imgs})=> {
    
    return (
        <Col  xs={xs} md={md} g={g}>
            <SubTitle textStyle="italic" margin="10px 0 10px 0">{title}</SubTitle>
            <Text>
                {description}
            </Text>
            {
                imgs&&(
                    <Container block padding="10px 0">
                        <RViewerJS>
                            <Grid width={"50px"} id="images">   
                                    {imgs.map((e,index)=>(
                                        <Img key={index} src={e} height="50px" width="50px"/>
                                    ))}
                            </Grid>
                        </RViewerJS>
                    </Container>
                )
            }
            
            <SubTitle>{subTitle}</SubTitle>
            <Container block padding="10px 0 50px 0">
                <Grid width={"20px"}>
                    {children}
                </Grid>
            </Container>
        </Col>
    )
}
type iconCard={
    title: string
    description: string
    icon: ReactNode
}

export const IconCard:React.FC<iconCard>= ({title, description, icon})=> {
    return (
        <Container block padding="5px 0 ">
            <Container justify="center">
                {icon}
            </Container>
            <SubTitle align="center" textStyle="italic" margin="10px 0 10px 0">{title}</SubTitle>
            <Text align="center">
                {description}
            </Text>
        </Container>
    )
}
