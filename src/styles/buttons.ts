import styled from "styled-components";
type button = {
    buttonType?: string
    padding?: string
    margin?: string
}
export const StyledButtom = styled.button<button>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props=>props.padding?props.padding: '10px'};
    margin: ${props=>props.margin?props.margin: 0};
    min-width: 100px;
    border: 2px solid ${props=>props.buttonType?typeButton(props.buttonType):'#00000091'};
    background-color: transparent;
    
    :hover{
        box-shadow: 0px 0px 6px 0px ${props=>props.buttonType?typeButton(props.buttonType):'black'};
    }
    :active{
        box-shadow: inset 0px 0px 6px 0px ${props=>props.buttonType?typeButton(props.buttonType):'black'};
    }
`;
const typeButton =(type:string):string=>{
    let color = ""
    switch (type) {
        case 'primary':
            color = "#00000091";
            break;
        case 'secondary':
            color = "#f0f1f2";
            break;
        default:
            color = "#00000091";
            break;
    }
    return color;
}
export const LinkButton = styled.a<button>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props=>props.padding?props.padding: '10px'};
    margin: ${props=>props.margin?props.margin: 0};
    min-width: 100px;
    border: 2px solid ${props=>props.buttonType?typeButton(props.buttonType):'#00000091'};
    background-color: transparent;
    text-decoration: none;
    color: white;
    :hover{
        box-shadow: 0px 0px 6px 0px ${props=>props.buttonType?typeButton(props.buttonType):'black'};
    }
    :active{
        box-shadow: inset 0px 0px 6px 0px ${props=>props.buttonType?typeButton(props.buttonType):'black'};
    }
`;
