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
type grild = {
    width?: string,
    max?: string
}
export const Grid = styled.div<grild>`
    display: grid;
    grid-template-columns: repeat(auto-fill, 
        minmax(${props=>props.width?props.width:'300px'},
        ${props=>props.max?props.max:'1fr'} ));
    column-gap: 25px;
    row-gap: 10px;
`;
type col={
    xs?:number
    md?: number
    g?: number
    padding?: string
}
export const Col= styled.div<col>`
    float: left;
    box-sizing: border-box;
    padding: ${props=>props.padding?props.padding:'0 10px'};
    @media (max-width: 600px) {
        width: ${props=>colWidth(props.xs)};
    }
    @media (min-width: 600px) {
        width: ${props=>colWidth(props.md??props.xs)};
    }
    @media (min-width: 992px) {
        width: ${props=>colWidth(props.g??props.md??props.xs)};
    }
    

`;
const colWidth=(num:number):string=>{
    if (!num) return "100%"
    let res=0;
    res= (num/12)*100;
    
    return res.toFixed(2)+'%'
}

export const Row=styled.div`
    display: table;
    width: 100%;
    height: auto;
`;
