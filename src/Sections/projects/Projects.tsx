import React from 'react'
import { Grid, ResponsiveContainer } from '../../styles/containers';
import Card from '../../components/cards/Cards';
import { Title } from '../../styles/text';
import data from '../../data/projects.json';
export const Projects: React.FC = () => {

    return (
        <ResponsiveContainer>
            <Title align="center" margin="10px 0 ">Projects</Title>
            <Grid>
                {data.map((e, i)=>(
                    <Card
                        key={i}
                        imgUrl={e.img?e.img:"https://via.placeholder.com/150"}
                        name={e.name}
                        links={ e.links}
                        description={e.description}
                    />
                ))}
            </Grid>
        </ResponsiveContainer>
    )
}
