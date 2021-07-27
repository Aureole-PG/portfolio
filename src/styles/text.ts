import styled from "styled-components";
type text={
    textStyle?: string
    margin?: string
}

export const Title = styled.p`
    color: black;
    font-size: 1.5rem;
`;

export const SubTitle = styled.p<text>`
    color: black;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    font-weight: 700;
    font-style: ${props=>props.textStyle};
    margin: ${props=>props.margin};
    /* font-style: ; */

`

export const Text = styled.p<text>`
    color: #797979;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    font-style: ${props=>props.textStyle};
    margin: ${props=>props.margin};
`
