import styled from "styled-components";
import InnerImage from "../../assets/InnerImg.png"
import OuterImage from "../../assets/OuterImg.png"



export const Container=styled.div`
max-width: 900px;
width: 100%;
aspect-ratio: 1/1;
display:grid;
grid-template: 1fr 6fr 1fr / 1fr 6fr 1fr;
place-items: center;
position:absolute;
right: -160px;
top: -140px;
background: radial-gradient(41.76% 41.76% at 50% 50%, rgba(0, 56, 255, 0.24) 0%, rgba(0, 133, 255, 0) 100%);
@media (max-width:1200px){
    right: -110px;
    top: 100px;
    max-width: 530px;

}
@media (max-width:850px){
    right: -75px;
    top: 150px;
    max-width: 400px;
}
@media (max-width:600px){
    right: 0;
    top:105px;
}
@media (max-width:500px){
    right: 0;
}
@media (max-width:400px){
    right: 0;
    top:230px;
}
`
export const OuterImg=styled.div`
width: 100%;
height: 100%;
max-width: 348.02px;
max-height:348.02px;
place-items:center;
grid-row: 2;
grid-column: 2;
background:url(${OuterImage}) no-repeat  ;
background-position:center;
background-size:calc(100% + 100px);
transform: rotate(27.35deg);
display:inline-flex;
justify-content: center;
align-items: center;

@media (max-width:450px) {
    background-size:calc(100% + 120px);
}
`
export const InnerRing=styled.div`
width: 100%;
height: 100%;
max-height:212px;
max-width: 212.74px;
background:linear-gradient(172.31deg, #0067AA 5.95%, #003482 53.61%, #020F66 97.92%);
box-sizing: border-box;
box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
transform: rotate(27.35deg);
display: flex;
border-radius:50% ;
justify-content: center;
align-items: center;
position:relative;
    top:-1px;
    left: 3px;

&::after{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 19px;
    z-index: -1;
    background:black;
    border-radius: 50%;
}
@media (max-width:850px){
    max-height:185px;
    max-width: 185.74px;
    &::after{
        inset: 15px;
    }
}
@media (max-width:500px){
    max-height:165px;
    max-width: 165.74px;
    &::after{
        inset: 13px;
    }
}
@media (max-width:400px){
    max-height:145px;
    max-width: 145.74px;
}
`
export const InnerImg=styled.div`
width: 100%;
height: 100%;
max-height: 140px;
max-width: 140.16px;
aspect-ratio: 1/1;
background: url(${InnerImage});
transform: rotate(-39.56deg);
background-size: cover;
display: flex;
justify-content: center;
align-items: center; 
background-position: center;  
`