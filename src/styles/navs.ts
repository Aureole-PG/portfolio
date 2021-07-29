import styled from 'styled-components';
type navTypes={
    position?: string
}
export const NavS = styled.nav<navTypes>`
    background-color: rgba(255, 255, 255, .15);  
    position: ${props=>props.position?props.position:'absolute'};
    /* padding-inline: 15px; */
    width: 100%;
    box-sizing: border-box;
    height: 70px;
    backdrop-filter: blur(5px);
    &.shadow{
        box-shadow: 0px 20px 20px -20px #1111114d;
    }
    &.bottom{
        bottom: 0;
    }
    &.fixed{
        position: fixed;
        top: 0;
        height: 70px;
        z-index: 1;
    }
`;

export const Item = styled.li`
    display: inline-block;
    box-sizing: content-box;
`;


export const Link = styled.a`
    padding: 24px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #000;
    letter-spacing: 0.1rem;
	transition: all 0.5s ease;
	font-size: 0.8rem;
    text-decoration: none;
    
	:hover {
		color:white;
        background: #d0d0d07a;
		transition: all 0.5s ease;
    }
` 
type slider={
    width?: string
    left?: string
}

export const Slider = styled.div<slider>`
    position: absolute;
    width: ${porps=>porps.width};
    height: 100%;
    top: 0;
    left: ${porps=>porps.left};
    z-index: -1;
    background-color: #afafaf05;
    box-shadow: 0 0 10px 0 black;
    transition: all 0.5s ease;
`;