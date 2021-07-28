import React from 'react';
import {NavS, Item, Link, Slider} from '../../styles/navs';
import {Container} from '../../styles/containers';
import { useNav } from './useNav';
const Nav:React.FC=()=> {
    const {sliderStyle, showFixed} = useNav();
    return (
        <NavS  className={`${showFixed?'fixed':'bottom'} shadow`}>
            <Container  align="center" justify="center">
                <Item> 
                    <Link rel="noopener noreferrer" className="tabs" href="#about">About</Link>    
                </Item>
                <Item>
                    <Link rel="noopener noreferrer" className="tabs" href="#skills">Skils</Link>
                </Item>
                <Item>
                    <Link rel="noopener noreferrer" className="tabs" href="#projects">Projets</Link> 
                </Item>
                <Item>
                    <Link rel="noopener noreferrer" className="tabs" href="#social">Social</Link>
                </Item>
                <Item>
                    <Link rel="noopener noreferrer" >Contact</Link>
                </Item>
                <Slider left={sliderStyle.left} width={sliderStyle.width}></Slider>
            </Container>
        </NavS>
    )
}

export default Nav
