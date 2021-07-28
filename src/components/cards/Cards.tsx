import React from 'react';
import { StyledButtom } from '../../styles/buttons';
import { CardStyled, FocusContent, Img } from '../../styles/cards';
import { Container, Grid } from '../../styles/containers';

type card={
    imgUrl?: string,
    name?: string
}

const Card:React.FC<card> =({imgUrl , name}) => {
    return (
        
        <CardStyled>
            
            <Img src={imgUrl}/>
            
            <FocusContent>
                <Container block  padding="0 10px 0 10px">
                    <h4>{name}</h4>
                    <p>
                        Lorem ipsum dolor, sit amet ciciatis excepturi earum sit id aliquid ad modi inventore aspernatur veritatis, rerum doloribus.</p> 
                        <Container width="100%" block>
                            <Grid width="100px">
                                <StyledButtom margin="5px 5px 0 5px">primary</StyledButtom>
                                <StyledButtom margin="5px 5px 0 5px" buttonType="secondary">secodary</StyledButtom>
                                <StyledButtom margin="5px 5px 0 5px" buttonType="secondary">secodary</StyledButtom>
                            </Grid>
                            
                        </Container>
                        
                </Container>
            </FocusContent>
        </CardStyled>
        
    )
}

export default Card;
