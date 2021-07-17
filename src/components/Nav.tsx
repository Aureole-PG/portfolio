import React,{useEffect, useState} from 'react';
import {NavS, Item} from '../styles/navs';
import {Container} from '../styles/containers';
const Nav:React.FC=()=> {
    const [showFixed, setShowFixed] = useState(false);
    const onScroll = (e:any) => {
        const newShowFixed = window.scrollY > window.innerHeight -70;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
    }
    useEffect(()=>{
        window.addEventListener('scroll',onScroll);
        return ()=>{
            window.removeEventListener('scroll',()=> true);
        }
 
    },[showFixed])
    return (
        <NavS className={`${showFixed?'fixed':'bottom'} shadow`}>
            <Container align="center" justify="center">
                <Item>About</Item>
                <Item>Projets</Item>
                <Item>Skils</Item>
                <Item>Social</Item>
                <Item>contact</Item>
            </Container>
        </NavS>
    )
}

export default Nav
