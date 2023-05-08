import styled from "styled-components";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Container=styled.div`
position:fixed;
width: 122px;
height: 122px;
right: 31px;
bottom: 37px;
background: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
flex-direction: column;
z-index: 3;
@media (max-width:600px) {
    width: 70px;
    height: 70px;
}
`
export const Links=styled(Link)`
display: block;
justify-content: center;
align-items: center;
`
export const Icon=styled(FaDiscord)`
width: 27.9px;
height: 20.93px;
color: #000000;
@media (max-width:600px) {
    width: 15px;
    height: 15px;
}
`
export const Text=styled.h1`

font-family: 'GraphikMedium';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 19px;
text-align: center;
letter-spacing: 0.1px;
color: #000000;
@media (max-width:600px) {
    font-size: 10px;
    line-height: 12px;
}
`