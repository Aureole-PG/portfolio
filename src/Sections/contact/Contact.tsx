import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { LinkButton } from '../../styles/buttons'
import { Container} from '../../styles/containers'
import { Text } from '../../styles/text'
export const Contact: React.FC = ()=> {
    return (
        <Container block>
            <Container align="center" justify="center">
                <LinkButton rel="noopener noreferrer" href="mailto:paulisrael95@gmail.com?subject=Contact&body=">
                    <Text color="#000000">Send me an email</Text>
                </LinkButton>
            </Container>
            <Container padding="10px 0 0 " align="center" justify="center">
                <LinkButton rel="noopener noreferrer" width="100%" href="https://drive.google.com/file/d/1HqJRjOI1hBY0pUOOmeM7ddyUzxOyK_T8/view?usp=sharing" target="_blank">
                    <Text color="#000000">Download </Text>
                </LinkButton>
            </Container>            
            <Container padding="20px 0" justify="space-evenly" align="center">
                <AiFillLinkedin size={40} style={{cursor: 'pointer'}} onClick={()=>window.open('https://www.linkedin.com/in/paul-ganan-pilco/','_blank')}/>
                <AiFillGithub size={40} style={{cursor: 'pointer'}} onClick={()=>window.open('https://github.com/Aureole-PG','_blank')}/>
            </Container>    
        </Container>
    )
}
