import styled from "styled-components"
import {AiOutlineSend} from "react-icons/ai"
import {BsChevronDown} from "react-icons/bs"

export const Container = styled.div`
width: 100%;
max-width: 477px;
min-width: 300px;
height: 100%;
max-height: 70px;
padding: 4px;
gap: 4px;
display: flex;
align-items: center;
justify-content:space-between;
background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(255, 255, 255, 0.18);
border-radius: 89px;

@media (max-width:1200px) {
  
    max-height:60px;
}
@media (max-width:600px) {
width: 100%;
max-height: 50px;
}
`

export const TextInput = styled.input.attrs({type:'email',placeholder:'Enter your Email Address'})`
width: 100%;
max-width: 307px;
height: 100%;
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 15px;
text-indent: 35px;
line-height: 106px;
outline: none;
display: flex;
border:none ;
align-items: center;
box-shadow: none;
border-top-left-radius: 89px;
border-bottom-left-radius: 89px;
background: rgba(255, 255, 255, 0);
color: rgba(255, 255, 255, 0.62);

`
export const Bar = styled.div`
width: 0px;
height: 48.5px;
border: 1px solid #404053;
`
export const Dropdown = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
height: 100%;

`
export const Option=styled.h1`
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130px;
/* or 929% */

display: flex;
align-items: center;
text-transform: capitalize;

color: #FFFFFF;

`
export const DropdownIcon=styled(BsChevronDown)`
    color: #ffff;
    font-size: 11.5px;

`

export const IconBox = styled.div`
display:flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
aspect-ratio: 1/1;
height: 100%;
max-height: 70px;
border-radius: 89px;
background: linear-gradient(180deg, #107BEE 0%, #359DFD 100%);

`
export const Icon = styled(AiOutlineSend)`
    color: #ffff;
    font-size: 20px;
`