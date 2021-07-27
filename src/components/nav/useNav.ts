import React, {useState, useEffect} from 'react'

export const useNav=() => {
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
        let newCurrentId:HTMLElement|null = null ;
        let newCurrentTab:any= null;
        for (let ele of elements) {
            let idName: string = ele?.getAttribute("href").slice(1);
            let id: HTMLElement = document.getElementById(idName) 
            let offsetTop : number  = id?.offsetTop  - 70;
            let offsetBottom: number = id?.offsetTop + id?.offsetHeight  - 70
            if (window.pageYOffset > offsetTop && window.pageYOffset < offsetBottom) {
                newCurrentId= id;
                newCurrentTab = ele   
            }
        }

        if (currentId === null || currentId !== newCurrentId) {
            setSlider(newCurrentId,newCurrentTab);
        }
        
    }
  
    const setSlider= ( currentId:HTMLElement | null, currentTab:HTMLElement|null )=>{
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

    return{ sliderStyle, showFixed}
}
