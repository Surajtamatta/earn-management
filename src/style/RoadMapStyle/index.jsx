import { useState } from "react";
import styled from "styled-components";




export const MapContainer=styled.div`
    display: grid;
    width: 100%;
    height:100%;
    min-height: 2676.5px;
    grid-template-columns: 1fr 5fr 1fr;
   @media (max-width:900px) {
    min-height: 2076.5px;
   }
   @media (max-width:500px) {
    min-height: 1876.5px;
   }
    
`
export const LeftContainer = styled.div`
    position: relative;
    border-top: 3px solid rgba(255, 255, 255, 0.12);
    border-radius: 0 30px 0 0;
    &::after{
        content:"";
        height: 30px;
        width: 30px;
        position: absolute;
        right: 10px;
        top: -3px;
        background-color:transparent;
        border-top:3px solid rgba(255, 255, 255, 0.097);
        border-right:3px solid rgba(255, 255, 255, 0.085);
        border-radius:0 30px 0 0;
        box-shadow: 10px -10px 6px 1px   rgb(4, 15, 18);
        z-index: 1;
    }
    @media (max-width:900px) {
        &::after{
            box-shadow: 10px -10px 6px 1px   rgb(7, 23,31);
        }
    }
    @media (max-width:650px) {
        &::after{
            box-shadow: 10px -10px 6px 1px   rgb(4, 15,18);
        }
    }

    
`
export const RoadmapContainer = styled.div`
display:flex;
flex-direction: column;
width:100%;
position: relative;
min-width: 220px;


    
`
export const Header=styled.div`
width: 100%;
height: 100%;
max-height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items:flex-start;

`
export const Title=styled.h1`
font-family: 'Outfit';
font-style: normal;
font-weight: 500;
font-size: 80px;
line-height: 88px;
letter-spacing: 0.2px;
color: #FFFFFF;
padding: 0 40px;
@media (max-width:900px) {
    font-size: 45px;
    padding: 0 20px;
    line-height: 40px;

    }
`
export const Describe=styled(Title)`
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 30px;
letter-spacing: 0.2px;
color: #FFFFFF;

@media (max-width:900px) {
    font-size: 14px;
    line-height: 20px;

    }
`


export const VectorBoxOne = styled.div`
display:flex;
min-width: 220px;
min-height:${props=>props.propsStyled === 0 ? '610px': (props=>props.propsStyled===5 ? '270px' : '210px')};
justify-content:${props=>props.propsStyled === 0 ? 'space-between' : 'center'};
align-items:${props=>props.propsStyled === 0 ? 'flex-start' : 'center'};
flex-direction: column;
height: 100%;
width: 100%;
margin-top:${props=>props.propsStyled !== 0 ? '-3px' : 'none'} ;
position: relative;
left: ${props=>props.propsStyled % 2 !==0 ? '12px' : 'none'};
right: ${props=>props.propsStyled % 2 !==1 ? '12px' : 'none'};
border-radius: ${props=>props.propsStyled % 2!==1 ? (props.propsStyled === 0 ? '0  0 0 30px' : '30px 0 0 30px') :'0  30px 30px 0' };
border-left: ${props=>props.propsStyled % 2 !==0 ? 'none' : '3px solid rgba(255, 255, 255, 0.12)'};
border-right: ${props=>props.propsStyled % 2 !==0 ? '3px solid rgba(255, 255, 255, 0.12)' : 'none'};
border-bottom: 3px solid rgba(255, 255, 255, 0.12);
border-top:${props=>props.propsStyled !== 0 ? '3px solid rgba(255, 255, 255, 0.12)' : 'none'};
@media (min-width: 600px) and (max-width:900px){
    min-height:${props=>props.propsStyled === 0 ? '620px': (props=>props.propsStyled===5 ? '210px' : '185px')};
}
@media (max-width: 600px){
min-height:${props=>props.propsStyled === 0 ? '690px':'auto'};
}
`


export const VectorBoxTwo=styled.div`
display: flex;
justify-content:flex-start;
align-items: flex-start;
height:100%;
width:100%;
min-height: 900px;
margin-top: -3px;
border-left: 3px solid rgba(255, 255, 255, 0.12);
border-top:3px solid rgba(255, 255, 255, 0.12); ;
border-radius: 30px 0 0 0; 
position: relative;
right: 12px;
@media (max-width:900px) {
    align-items: center;
    min-height: 650px;
}
@media (max-width:600px) {
    align-items: center;
    min-height: 650px;
}

`

export const RightContainer = styled.div`
`


export const DescriptionBox=styled.div`
width:100%;
height: 100%;
max-height:${props=>props.position ===0 ? '350px' :'200px' } ;
display: flex;
justify-content:${props=>props.position % 2 !== 0 ? 'flex-end' :'flex-start' };
align-items: center;
gap: 25px;
position:relative;
transform: translate(${props=>props.position % 2 !==1 ? '-55px' :'55px' });
left:${props=>props.position % 2 !==1 ? '-55px' :'auto' };
right:${props=>props.position % 2 !==0 ? '-55px' :'auto' };

@media (max-width: 850px){
    transform: translate(${props=>props.position % 2 !==1 ? '-33px' :'33px' });
    left:${props=>props.position % 2 !==1 ? '-33px' :'auto' };
    right:${props=>props.position % 2 !==0 ? '-33px' :'auto' };      
    }
    @media (max-width: 550px){
    transform: translate(${props=>props.position % 2 !==1 ? '-21px' :'21px' });
    left:${props=>props.position % 2!==1 ? (props.position === 0 ? '-20px' : '-21px') :'auto' };
    right:${props=>props.position % 2 !==0 ? '-20px' :'auto' }; 
        
    }
`

export const InfoBox=styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:${props=>props.place % 2 !==0 ? 'flex-end' :'flex-start' };


`


export const Year=styled.h1`
display: flex;
align-items: center;
justify-content: ${(props)=>props.year % 2 !==1 ? 'left' : 'right'};
width: 100%;
height: 100%;
min-width: 162px;
min-height: 65px;
font-family: 'Outfit';
font-style: normal;
font-weight: 100;
font-size: 71px;
line-height: 89px;
color: #FFFFFF;
@media (max-width: 900px){
    font-size: 55px;
    line-height:50px;
    }
`
export const QWords=styled.h1`
display: flex;
align-items: center;
justify-content: ${(props)=>props.qword % 2 !==1 ? 'left' : 'right'};
width: 100%;
height: 100%;
min-width: 63px;
min-height: 35px;
font-family: 'Outfit';
font-style: normal;
font-weight: 500;
font-size: 33px;
line-height: 35px;
color: #15C4C6;
@media (max-width: 900px){
    font-size: 25px;
    line-height:60px;
    }
`
export const Info = styled.p`
display: flex;
align-items: center;
width: 100%;
height: 100%;
text-align: ${(props)=>props.pWidth % 2 !==1 ? 'left' : 'right'};
max-width:${(props)=>props.pWidth===0 ? '280px' : '372px'};
min-height: 70px;
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 25px;
display: flex;
align-items: center;
color: rgba(255, 255, 255, 0.39);
mix-blend-mode: luminosity;
@media (max-width: 900px){
    font-size: 14px;
    line-height:15px;
    }
`