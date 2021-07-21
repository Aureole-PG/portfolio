import React from 'react'
import { CardStyled, FocusContent, Img } from '../styles/cards'
import { Container } from '../styles/containers'

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
                </Container>
            </FocusContent>
        </CardStyled>
        
    )
}

export default Card;
