import styled from "styled-components";


export const MapContainer=styled.div`
    display: grid;
    width: 100%;
    height:100%;
    min-height: 2676.5px;
    grid-template-columns: 1fr 5.5fr 1fr;
   
    
`
export const LeftContainer = styled.div`
    position: relative;
    border-top: 3px solid rgba(255, 255, 255, 0.12);
    border-top-right-radius:30px ;
    border-top-right-radius:30px ;
    
`
export const RoadmapContainer = styled.div`
display:flex;
flex-direction: column;
width:100%;
position: relative;
@media (max-width:400px) {
        max-width: 250px;
    }

    
`
export const Header=styled.div`
width: 100%;
height: 100%;
min-height: 250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items:flex-start;
@media (max-width:1200px){
    right: -120px;
    top: 55px;
    max-width: 600px;
}
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
display: flex;
justify-content:${props=>props.propsStyled === 0 ? 'space-between' : 'center'};
align-items:${props=>props.propsStyled === 0 ? 'flex-start' : 'center'};
flex-direction: column;
height: 100%;
width: 100%;
max-height:610px ;
position: relative;
border-radius: ${props=>props.propsStyled % 2!==1 ? (props.propsStyled === 0 ? '0  0 0 30px' : '30px 0 0 30px') :'0  30px 30px 0' };
border-left: ${props=>props.propsStyled % 2 !==0 ? 'none' : '3px solid rgba(255, 255, 255, 0.12)'};
border-right: ${props=>props.propsStyled % 2 !==0 ? '3px solid rgba(255, 255, 255, 0.12)' : 'none'};
border-bottom: 3px solid rgba(255, 255, 255, 0.12);
&::after{
    content:'';
    position: absolute;
    top: ${props=>props.propsStyled === 0 ? '0.3px' : '-3px'};;
    left:${props=>props.propsStyled % 2!==1 ? (props.propsStyled === 0 ? '-37px' : '-2.3px') :'auto' };
    right:${props=>props.propsStyled % 2 !==1 ? 'auto' : '-2.3px'};
    width: 35px;
    background-color:transparent;
    height: 35px;
    border-top: 3px solid rgba(255, 255, 255, 0.077);
    border-right:${props=>props.propsStyled % 2!==1 ? (props.propsStyled === 0 ? '3px solid rgba(255, 255, 255, 0.077)' : 'none') :'3px solid rgba(255, 255, 255, 0.077)' };
    border-radius:${props=>props.propsStyled % 2!==1 ? (props.propsStyled === 0 ? '0 30px 0 0' : '30px 0 0 0') :'0 30px 0 0' };
    border-left: ${props=>props.propsStyled % 2!==1 ? (props.propsStyled === 0 ? 'none' : '3px solid rgba(255, 255, 255, 0.14)') :'none' };
    box-shadow:  10px -10px 0 0 rgba(4, 13,16);
    z-index:1;
}

${ props => props.propsStyled === 1 && `
max-height: 233px ;
&::after{
    box-shadow:  10px -10px 0 0 rgb(7, 23, 31);
}
    
`}
${ props => props.propsStyled === 2 && `
max-height: 225px;
    &::after{
    box-shadow:  -10px -10px 0 0 rgb(6, 19, 25);
}
`}
${ props => props.propsStyled === 3 && `
max-height: 220px;
&::after{
    box-shadow:  10px -10px 0 0 rgb(6, 22, 28);
}
`}
${ props => props.propsStyled === 4 && `
max-height: 215px;
    &::after{
    box-shadow:  -10px -10px 0 0 rgb(6, 19, 25);
}

`}
${ props => props.propsStyled === 5 && `
max-height: 278px;
&::after{
    box-shadow:  10px -10px 0 0 rgb(5, 17, 23);
}
`}
@media (max-width:900px) and (min-width:600px) {
    max-height: 1050px;
    &::after {box-shadow :  10px -10px 0 0 rgba(6, 22,28);}
    ${ props => props.propsStyled === 1 &&  
        `max-height: 200px; &::after {box-shadow:  10px -10px 0 0 rgb(4, 13, 16);} `}
    ${ props => props.propsStyled === 2 && 
        `max-height: 195px; &::after {box-shadow:  -10px -10px 0 0 rgb(6, 21, 27);} `}
    ${ props => props.propsStyled === 3 && 
        `max-height: 190px; &::after {box-shadow:  10px -10px 0 0 rgb(4, 16, 22);}`}
    ${ props => props.propsStyled === 4 && 
        `max-height: 185px; &::after {box-shadow:  -10px -10px 0 0 rgb(5, 16, 21);}`}
    ${ props => props.propsStyled === 5 && 
        `max-height: 248px; &::after {box-shadow:  10px -10px 0 0 rgb(6, 22, 28);} `}
}
@media  (max-width:600px) {
    max-height: 1050px;
    &::after {box-shadow :  10px -10px 0 0 rgba(5, 16,21);}
    ${ props => props.propsStyled === 1 &&  
        `max-height: 240px; &::after {box-shadow:  10px -10px 0 0 rgb(4, 13, 16);} `}
    ${ props => props.propsStyled === 2 && 
        `max-height: 235px; &::after {box-shadow:  -10px -10px 0 0 rgb(4, 15, 20);} `}
    ${ props => props.propsStyled === 3 && 
        `max-height: 230px; &::after {box-shadow:  10px -10px 0 0 rgb(4, 16, 22);}`}
    ${ props => props.propsStyled === 4 && 
        `max-height: 235px; &::after {box-shadow:  -10px -10px 0 0 rgb(5, 16, 21);}`}
    ${ props => props.propsStyled === 5 && 
        `max-height: 285px; &::after {box-shadow:  10px -10px 0 0 rgb(2, 9, 12);} `}
}
`


export const VectorBoxTwo=styled.div`
display: flex;
justify-content:flex-start;
align-items: flex-start;
height:100%;
width: 100%;
border-left: 3px solid rgba(255, 255, 255, 0.12);
border-radius: 30px 0 0 0; 
position: relative;

&::after{
    content: " ";
    position: absolute;
    height: 30px;
    width: 30px;
    top: -3px;
    left:-2.5px;
    border-left: 3px solid rgba(255, 255, 255, 0.12);
    border-right:none;
    border-top: 3px solid rgba(255, 255, 255, 0.12);;
    border-radius:30px 0 0 0;
    box-shadow:  -10px -10px 0 0 rgb(3, 10, 15);
}
@media (max-width:900px) {
    align-items: center;
    &::after{  box-shadow:  -10px -10px 0 0 rgb(2,6,7); }
}
@media (max-width:600px){
    max-height: 600px;
}

`

export const RightContainer = styled.div`
`


export const DescriptionBox=styled.div`
width:100%;
height: 100%;
max-height: 350px;
display: flex;
justify-content:${props=>props.position % 2 !== 0 ? 'flex-end' :'flex-start' };
align-items: center;
gap: 25px;
position:relative;
transform: translate(${props=>props.position % 2 !==1 ? '-55px' :'55px' });
left:${props=>props.position % 2 !==1 ? '-55px' :'auto' };
right:${props=>props.position % 2 !==0 ? '-55px' :'auto' };

@media (max-width: 850px){
    transform: translate(${props=>props.position % 2 !==1 ? '-36px' :'36px' });
    left:${props=>props.position % 2 !==1 ? '-36px' :'auto' };
    right:${props=>props.position % 2 !==0 ? '-36px' :'auto' };      
    }
    @media (max-width: 550px){
    transform: translate(${props=>props.position % 2 !==1 ? '-21px' :'2px' });
    left:${props=>props.position % 2!==1 ? (props.position === 0 ? '-25px' : '-21px') :'auto' };
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
max-width: 162px;
max-height: 65px;
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
max-width: 63px;
min-height: 55px;
font-family: 'Outfit';
font-style: normal;
font-weight: 500;
font-size: 33px;
line-height: 86px;
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
max-height: 70px;
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