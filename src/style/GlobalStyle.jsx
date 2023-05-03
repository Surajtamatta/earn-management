
import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
    }
    :root{
        
        font-style: normal
    }
    
    @font-face {
    font-family: 'GraphikMedium';
    src: local('GraphikMedium'),
    url('../fonts/GraphikMedium.otf') format("Opentype");
    font-weight: normal;
    }

    ;
`
export default GlobalStyle 


