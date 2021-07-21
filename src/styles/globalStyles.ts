import { createGlobalStyle } from "styled-components";
import TitilliumWeb_black from '../fonts/TitilliumWeb-Black.ttf';
import TitilliumWeb_bold from '../fonts/TitilliumWeb-Bold.ttf';
import TitilliumWeb_light from '../fonts/TitilliumWeb-Light.ttf';
export const GlobalStyle= createGlobalStyle`
    @font-face {
        font-family: 'Titillimweb-black';
        src:  url(${TitilliumWeb_black}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Titillimweb-bold';
        src:  url(${TitilliumWeb_bold}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Titillimweb-light';
        src:  url(${TitilliumWeb_light}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    *{
        font-family: 'Titillimweb-light';
    }
    body {
        margin: 0;
        padding: 0;
        background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
    }
    ul, li, h1, h2, h3, p, button, a {
        margin: 0;
    }
    html{
        box-sizing: border-box;
    }
    ::-webkit-scrollbar {
        width: 3px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f100; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #a1b5ad78; 
        border-radius: 16px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    
`;