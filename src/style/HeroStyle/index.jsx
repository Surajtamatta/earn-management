import styled from "styled-components";



export const Container=styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:900px) {
    flex-wrap: wrap;
  }

`
export const DescriptionContainer=styled.div`
  width:100%;
  display: flex;
  max-width: 590px;
  justify-content:center;
  align-items: center;
  @media (max-width:1200px) {
    height:550px;
    
  }
  @media (max-width:900px) {
    justify-content:center;
  }
  
 
`

export const Description=styled.div`
  width:100%;
  min-width: 300px;
  height:450px;
  display: flex;
  padding: 10px;
  justify-content:space-evenly;
  flex-direction: column;
  @media (max-width:1200px) {
    height:500px;
    max-width: 450px;
  }

  @media (max-width:900px) {
  
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  }

  
`

export const Title=styled.h1`
font-style: normal;
font-weight:500;
font-size: 80px;
font-family: 'Outfit';
line-height: 88px;
letter-spacing: 0.2px;
color: #FFFFFF;

@media (max-width:1200px) {
  font-size: 60px;
  line-height: 60px;
  }

@media (max-width:900px) {
  font-size: 100px;
  text-align: center;
  line-height: 90px;
  }
  @media (max-width:500px) {
  font-size: 55px;
  text-align: center;
  line-height: 70px;
  }
`

export const Content=styled.p`

font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
letter-spacing: 0.2px;
color: #FFFFFF;

@media (max-width:900px) {
  padding-inline: 10px;
  text-align:center;

  }
`

