import styled  from 'styled-components';



export const FocusContent = styled.div`
    width: 100%;
    /* margin-top: 250; */
    top: 240px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    color: azure;
    transition: all .5s;
    height: 100%;
    backdrop-filter: blur( 5.0px );
`;

export const CardStyled = styled.div`
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20.0px );
    -webkit-backdrop-filter: blur( 20.0px );
    /* border-radius: 10px; */
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 300px;
    
    
    :hover ${FocusContent}{
        /* height: 300px; */
        top: 0;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        position: absolute;
        
        height: 100%;
        /* width: 100%; */
        
        padding: 0;
    }
`;

export const Img= styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
    margin: 0;
`;