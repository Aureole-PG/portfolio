import React from 'react';
import { ReactNode } from 'react';
import { Container, Col, Grid } from '../../styles/containers';
import { Text, SubTitle } from '../../styles/text'; 


type card={
    title: string
    description: string
    subTitle: string,
    md?: number
    xs?: number
    g?: number
}

export const SimpleCard:React.FC<card>= ({title, description, subTitle, md , xs , g,children})=> {
    return (
        <Col  xs={xs} md={md} g={g}>
            <Text textStyle="italic" margin="10px 0 10px 0">{title}</Text>
            <Text>
                {description}
            </Text>
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
