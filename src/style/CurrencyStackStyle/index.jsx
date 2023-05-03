
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
bottom: 0.3rem;
@media (max-width:700px) {
position:relative;
left:3.5rem;
bottom: 0.5rem;
}
@media (max-width:600px) {
position:relative;
left:3rem;
bottom: 0.5rem;
}
@media (max-width:500px) {
position:relative;
left:2.3rem;
bottom: 0.5rem;
}
`


export const CurrencyOne=styled.img.attrs({src:`${Etherium}`})`
width: 100%;
height:100%;
grid-column: 1/1;
max-width: 147.89px;
max-height: 147.89px;


`
export const CurrencyTwo=styled.img.attrs({src:`${Bitcoin}`})`

width: 100%;
height:100%;
max-width: 147.89px;
max-height: 147.89px;
z-index:1;
grid-column: 1/2;
position: relative;
left: 0.5rem;
bottom: 0rem;
`
export const CurrencyThree=styled.img.attrs({src:`${BitcoinTwo}`})`
width: 100%;
height:100%;
grid-column: 2/2;
max-width: 101px;
max-height: 103px;
position: relative;
right:2rem;
transition: all 3ms ease-in-out;
top: 0.4rem;
@media (max-width:700px) {
max-width: 90px;
max-height: 90px;
right:1.8rem;
top: 0.4rem;
}
@media (max-width:600px) {
max-width:70px;
max-height:70px;
right:1.8rem;
top: 0.4rem;
}
@media (max-width:500px) {
max-width:62px;
max-height:62px;
right:1.3rem;
top: 0.2rem;
}
@media (max-width:400px) {
max-width:50px;
max-height:50px;
right:1rem;
top: 0.3rem;
}
`