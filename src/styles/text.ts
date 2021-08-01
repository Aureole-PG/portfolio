import styled from "styled-components";
type text={
    textStyle?: string
    margin?: string
    align?: string
    color?: string
}

export const Title = styled.p<text>`
    color: black;
    font-size: 1.5rem;
    font-style: ${props=>props.textStyle};
    margin: ${props=>props.margin};
    text-align: ${props=>props.align};
`;

export const SubTitle = styled.p<text>`
    color: black;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    font-weight: 700;
    font-style: ${props=>props.textStyle};
    margin: ${props=>props.margin};
    text-align: ${props=>props.align};
    /* font-style: ; */

`

export const Text = styled.p<text>`
    color: ${props=>props.color?props.color:'#797979'} ;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    font-style: ${props=>props.textStyle};
    margin: ${props=>props.margin};
    text-align: ${props=>props.align};
`
