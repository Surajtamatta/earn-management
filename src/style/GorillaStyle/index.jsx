import gorillaImg from "../../assets/gorillaImg.png"
import styled from "styled-components"

export const GorillaContainer=styled.div`
position: relative;
right: 30px;
width: 100%;
max-width:800px;
aspect-ratio: 1/1;
display: flex;
justify-content: center;
align-items: center;
background: radial-gradient(41.76% 41.76% at 50% 50%, rgba(0, 209, 255, 0.24) 0%, rgba(0, 163, 255, 0) 100%);
@media (max-width:900px) {
  right:15px;
  }
`
export const GorillaImg=styled.div`
width: 100%;
max-width:710px;
aspect-ratio: 1/1;
background-image: url(${gorillaImg});
background-size:cover;
background-position:top;
background-repeat: no-repeat;
display: flex;
align-items:flex-start;
justify-content: flex-start;

`
export const Wrapper = styled.div`
display:grid;
width: 100%;
height: 100%;
align-items:center;
justify-content:center;
grid-template-columns:repeat(3,1fr); 
`
export const GorillaTextRight=styled.div`
height:100%;
align-items:center;
justify-content:center;
border-radius: 90px;
display: grid;
grid-template-rows:repeat(5,1fr);

`
export const GorillaTextLeft=styled.div`
width: 100%;
height:100%;
justify-content:center;
align-items: center;
border-radius: 90px;
display: grid;
grid-template-rows:repeat(5,1fr);


`

export const Info=styled.p`
padding:15px;
font-family: 'Outfit';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 25px;
display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
mix-blend-mode: luminosity;
transition: all 3ms ease-in-out;

@media (max-width:750px) {
  padding: 10px;
  font-size: 14px;
  text-align: center;
  line-height:15px;

  }
  @media (max-width:550px) {
  padding: 5px;
  font-size: 10px;
  text-align: center;
  line-height:10px;

  }


`
export const DetailsOne=styled.div`
display:flex;
grid-row: 2;
height: 100%;
max-height: 87px;
max-width: 243px;
min-width: 195px;
justify-content:center;
align-items:center;
width: 100%;
background: rgba(255, 255, 255, 0.06);
backdrop-filter: blur(40px);
border-radius: 90px;
position:relative;
left:1.3rem;
top: 55px;
transition: all 3ms ease-in-out;
@media (max-width:750px) {
  max-width: 195px;
  min-width: auto;
  max-height: 75px;
  left:2rem;
  top: 40px;
}
@media (max-width:550px) {
  max-width: 130px;
  max-height: 50px;
  left:1.5rem;
  top: 30px;
}

`


export const DetailsTwo=styled.div`
width: 100%;
height: 100%;
max-height: 87px;
max-width: 256px;
min-width: 195px;
background: rgba(255, 255, 255, 0.06);
grid-row: 4;
backdrop-filter: blur(40px);
border-radius: 90px;
display:flex;
justify-content:space-around;
align-items: center;
position:relative;
left:2.5rem;
bottom: 35px;
transition: all 3ms ease-in-out;
@media (max-width:750px) {
  max-width: 195px;
  min-width: auto;
  max-height: 75px;
  left:3.5rem;
  bottom: 30px;
}
@media (max-width:550px) {
  max-width: 130px;
  max-height: 50px;
  left:2.5rem;
  bottom:20px;
}
`

export const DetailsThree=styled.div`

width: 100%;
height: 100%;
max-height: 87px;
max-width: 245px;
min-width: 195px;
background: rgba(255, 255, 255, 0.06);
backdrop-filter: blur(40px);
grid-row: 2;
border-radius: 90px;
display:flex;
justify-content:space-around;
align-items: center;
position:relative;
left:1rem;
bottom: 55px;
transition: all 3ms ease-in-out;
@media (max-width:750px) {
  max-width: 195px;
  min-width: auto;
  max-height: 75px;
  left:0rem;
  bottom: 55px; 
}
@media (max-width:550px) {
  max-width: 135px;
  max-height: 50px;
  left:0rem;
  bottom: 35px; 
}
`
export const DetailsFour=styled.div`
width: 100%;
height: 100%;
max-height: 87px;
max-width:193px;
min-width: 170px;
grid-row: 4;
background: rgba(255, 255, 255, 0.06);
backdrop-filter: blur(40px);
border-radius: 90px;
display:flex;
justify-content:space-around;
align-items: center;
position:relative;
left:2rem;
bottom: 55px;
transition: all 3ms ease-in-out;
@media (max-width:750px) {
  max-width: 170px;
  min-width: auto;
  max-height: 65px;
  left:1rem;
  bottom: 50px;
}
@media (max-width:550px) {
  max-width: 95px;
  max-height: 50px;
  left:0.6rem;
  bottom: 40px;
}
`