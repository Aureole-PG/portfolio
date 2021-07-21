import styled from 'styled-components';

type container={
    height?: string,
    width?: string,
    block?: boolean,
    align?: string,
    padding?: string,
    justify?: string
};


export const Container = styled.div<container>`
    display: ${props=>props.block?'block': 'flex'};
    box-sizing: border-box;
    height: ${(props)=>props.height?props.height:'auto'};
    width: ${(props)=>props.width?props.width:'auto'};
    align-items: ${props=>props.align?props.align:''};
    padding: ${props=>props.padding?props.padding: '0'};
    justify-content: ${props=>props.justify};
    &.min-height{
        min-height: 100vh;
    }
`;

export const ResponsiveContainer = styled.div`
    width: 100vw;
    display: block ;
    @media (max-width: 600px) {
        max-width: 600px;
        padding-inline: 10px;
    }
    @media (min-width: 600px) {
        max-width: 992px;
        padding-inline: 30px;
    }
    @media (min-width: 992px) {
        
        max-width: 1300px;
        padding-inline: 50px;
    }
    
`;

export const LinkSection = styled.a`
    cursor: none;
    
`;

export const Text= styled.p`
    font-family: 'Titillimweb-light';
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 25px;
    row-gap: 10px;
`;
