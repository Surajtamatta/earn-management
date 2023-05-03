import styled from "styled-components"

export const Rectangle=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
max-width: 214px;
max-height: 179px;
background: #FFFFFF;
box-shadow: 12px 32px 80px -20px rgba(0, 0, 0, 0.12);
border-radius: 32px;
@media (max-width: 850px){
        max-width: 140px;
        max-height: 120px;
        border-radius: 20px;
    }
    @media (max-width: 550px){
        max-width: 90px;
        max-height: 75px;
        border-radius: 15px;
    }
`
export const Circle=styled.div`
box-sizing: border-box;
width: 100%;
height: 100%;
max-width: 102px;
max-height: 102px;
background: linear-gradient(180deg, #15C4C6 0%, #0C79F4 100%);
border: 6px solid rgba(255, 255, 255, 0.3);
border-radius: 50px;
@media (max-width: 850px){
        max-width: 75px;
        max-height: 75px;

    }
    @media (max-width: 550px){
        max-width: 55px;
        max-height: 55px;
      
    }
`