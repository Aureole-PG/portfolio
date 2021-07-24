import React,{useEffect, useState} from 'react';
import {NavS, Item, Link, Slider} from '../styles/navs';
import {Container} from '../styles/containers';
const Nav:React.FC=()=> {
    const [showFixed, setShowFixed] = useState(false);
    const [currentTab, setCurrentTab] = useState<HTMLElement| null >(null);
    const [currentId, setCurrentId] = useState<HTMLElement| null>(null);
    const [sliderStyle, setSliderStyle] = useState({width:"0px",left: "0px"});
    const onScroll = (e:any) => {
        const newShowFixed = window.scrollY > window.innerHeight -70;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
    }
    const currentTabSelector =()=>{
        let elements=document.getElementsByClassName('tabs')
        let newCurrentId = null ;
        let newCurrentTab = null;
        for (let ele of elements) {
            let idName = ele.getAttribute("href").slice(1);
            let id: HTMLElement | null = document.getElementById(idName)
            let offsetTop : number | undefined = id?.offsetTop - 70;
            let offsetBottom: number | undefined = id?.offsetTop + id?.offsetHeight  - 70
            if (window.pageYOffset > offsetTop && window.pageYOffset < offsetBottom) {
                newCurrentId= id;
                newCurrentTab = ele   
            }
        }

        if (currentId === null || currentId !== newCurrentId) {
            setSlider(newCurrentId,newCurrentTab);
        }
        
    }
  
    const setSlider= ( currentId:HTMLElement | null, currentTab:HTMLElement )=>{
        let width =0;
        let left =0;

        if(currentTab){
            setCurrentId(currentId);
            setCurrentTab(currentTab);
            width= currentTab.offsetWidth;
            left = currentTab.offsetLeft
        }
        setSliderStyle({width:`${width}px`, left:`${left}px`})
    }   
    useEffect(()=>{
        window.addEventListener('scroll',onScroll);
        return ()=>{
            window.removeEventListener('scroll',()=> true);
        }
    },[showFixed])
    useEffect(()=>{
        
        window.addEventListener('scroll',currentTabSelector);
        return ()=>{
            window.removeEventListener('scroll',()=> true);
        }
    },[currentTab])
    return (
        <NavS  className={`${showFixed?'fixed':'bottom'} shadow`}>
            <Container  align="center" justify="center">
                <Item> 
                    <Link className="tabs" href="#about">About</Link>    
                </Item>
                <Item>
                    <Link className="tabs" href="#projects">Projets</Link>
                    
                </Item>
                <Item>
                    <Link className="tabs" href="#skills">Skils</Link>
                </Item>
                <Item>
                    <Link className="tabs" href="#social">Social</Link>
                </Item>
                <Item>
                    <Link>Contact</Link>
                </Item>
                <Slider left={sliderStyle.left} width={sliderStyle.width}></Slider>
            </Container>
        </NavS>
    )
}

export default Nav
