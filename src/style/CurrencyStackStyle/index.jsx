
import styled from "styled-components"
import Bitcoin from "../../assets/Bitcoin.png"
import BitcoinTwo from "../../assets/Bitcoin2.png"
import Etherium from "../../assets/Etherium.png"

export const Container=styled.div`
display:flex;
justify-content: center;
align-items:flex-end;
height: 100%;



`
export const Wrapper=styled.div`
justify-content:flex-end;
align-items:center;
display:flex;
flex-direction: column;
width:100%;
aspect-ratio: 1/1;
transition: all 0.43s ease-in-out;

`

export const CoinStacks=styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;

`
export const CurrencyOne=styled.img.attrs({src:`${Etherium}`})`
width: 100%;
height: auto;
max-width: 147.89px;
min-height: 70px;
min-width: 70px;

 



`
export const CurrencyTwo=styled.img.attrs({src:`${Bitcoin}`})`

width: 100%;
height:auto;
max-width: 144.95px;
z-index:1;

`
export const CurrencyThree=styled.img.attrs({src:`${BitcoinTwo}`})`

width: 100%;
height:100%;
max-width: 101px;
max-height: 103px;
`