
import styled from "styled-components"
import Bitcoin from "../../assets/Bitcoin.png"
import BitcoinTwo from "../../assets/Bitcoin2.png"
import Etherium from "../../assets/Etherium.png"

export const Container=styled.div`
display:grid;
width: 100%;
justify-content:center;
align-items:center;
height: 100%;
grid-template-rows:repeat(2,1fr);


`
export const Wrapper=styled.div`
display:grid;
justify-content:center;
align-items:center;
width:100%;
aspect-ratio: 1/1;
grid-row: 2;
transition: all 5ms ease-in-out;
grid-template: repeat(2,fit-content)/repeat(2,fit-content);
position:relative;
left:4.2rem;
bottom: 0.5rem;
@media (max-width:1250px) {
left:3.4rem;
}
@media (max-width:650px) {
bottom:1rem;
}
@media (max-width:550px) {
left:2.8rem;
}
@media (max-width:400px) {
    bottom: 0.5rem;
    left: 2rem;
}
`


export const CurrencyOne=styled.img.attrs({src:`${Etherium}`})`
width: 100%;
height:100%;
grid-column: 1/1;
min-width: 115px;
max-width: 147.89px;
max-height: 147.89px;
position: relative;
top: 0.7rem;
@media (max-width:900px) {
    min-width: 95px;
}
@media (max-width:600px) {
    top: 0.5rem;   
}
@media (max-width:400px) {
    min-width: 75px;
    top: 0.4rem;
}
`
export const CurrencyTwo=styled.img.attrs({src:`${Bitcoin}`})`
width: 100%;
height:100%;
max-width: 147.89px;
max-height: 147.89px;
min-width: 115px;
z-index:1;
grid-column: 1/2;
position: relative;
left: 0.5rem;
bottom: 0;
@media (max-width:900px) {
    min-width: 95px;
}
@media (max-width:400px) {
    min-width: 75px;  
}

`
export const CurrencyThree=styled.img.attrs({src:`${BitcoinTwo}`})`
width: 100%;
height:100%;
grid-column: 2/2;
max-width: 101px;
max-height: 103px;
min-width: 70px;
min-height: 65px;
position: relative;
right:1.7rem;
transition: all 3ms ease-in-out;
    top: 0.4rem;
@media (max-width:1250px) {
    max-height: 80px;
}
@media (max-width:900px) {
    max-width: 90px;
    max-height: 90px;
    min-width: 75px;
    min-height: 75px;
    top: 0.7rem;
}
@media (max-width:650px) {
max-width:70px;
max-height:70px;
right:1.7rem;
min-width: 65px;
min-height: 65px;
}
@media (max-width:550px) {
    max-width: 65px;
    max-height: 65px;
    right: 1.3rem;
    top: 0.5rem;
}
@media (max-width:400px) {
    min-width: 50px;
    min-height: 45px;
    max-height: 50px;
    right: 1rem;
    top: 0.2rem;
}
`