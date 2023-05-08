import styled from "styled-components"

export const Rectangle=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
max-width: 214px;
max-height: 133px;
background: rgba(29, 51, 64, 0.45);
backdrop-filter: blur(40px);
border-radius: 32px;
@media (max-width: 850px){
        max-width: 130px;
        max-height: 90px;
        border-radius: 20px;
    }
    @media (max-width: 550px){
        max-width: 80px;
        max-height: 60px;
        border-radius: 15px;
    }
`
export const Circle=styled.div`
box-sizing: border-box;
width: 100%;
height: 100%;
max-width: 102px;
max-height: 102px;
background: linear-gradient(180deg, #778282 0%, #2F3842 100%);
border: 6px solid rgba(255, 255, 255, 0.3);
border-radius: 50px;
    @media (max-width: 850px){
        max-width: 65px;
        max-height: 65px;
        border: 4px solid rgba(255, 255, 255, 0.3);
    }
    @media (max-width: 550px){
        max-width: 40px;
        max-height: 40px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        
    }
`