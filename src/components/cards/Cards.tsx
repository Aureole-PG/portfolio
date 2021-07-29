import React from 'react';
import { LinkButton, StyledButtom } from '../../styles/buttons';
import { CardStyled, FocusContent, Img } from '../../styles/cards';
import { Container, Grid } from '../../styles/containers';

type card={
    imgUrl: string
    name: string
    links?: { link: string, name:string, buttonType?: string }[]
    description?: string

}

const Card:React.FC<card> =({imgUrl , name, links, description}) => {
    return (
        
        <CardStyled>
            
            <Img src={imgUrl}/>
            
            <FocusContent>
                <Container block  width="100%" padding="0 10px 0 10px">
                    <h4>{name}</h4>
                    <p>
                        {description}
                    </p> 
                        <Container width="100%" block>
                            <Grid width="100px">
                                {links.map((link, i)=>(
                                    <LinkButton key={i} target="_blank" rel="noopener noreferrer" margin="5px 5px 0 5px" href={link.link} buttonType={"secondary"}>
                                        
                                        {link.name}
                                    </LinkButton>    
                                ))}
                            </Grid>
                            
                        </Container>
                        
                </Container>
            </FocusContent>
        </CardStyled>
        
    )
}

export default Card;
