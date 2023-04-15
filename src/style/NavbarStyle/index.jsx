import styled from "styled-components";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import {FaTimes,FaBars,FaDiscord} from "react-icons/fa"


export const Nav = styled.div`
width: 100%;
display: flex;
justify-content:space-evenly;
align-items: center;
height: 107px;
z-index:99;
position: fixed;



`
export const Logo = styled.img.attrs({src:`${logo}`})`
width: 81px;
height: 79px;
z-index: 99;
padding:0 40px;
@media (max-width: 850px) {
    width: 70px;
    height: 70px;
    
}
`
export const Wrapper=styled.div`
width: 100%;
max-width: 1066px;
display: flex;
justify-content:center;
align-items: center; 

@media (max-width: 850px) {

}
`
export const Navmenu = styled.ul`
display:flex;
justify-content: space-between;
align-items: center;
padding: 0;
width:300px;
height: 100%;
@media (max-width: 850px) {
    display: flex;
    flex-direction:column;
    justify-content:start;
    width:100%;
    height: 100vh;
    background:  linear-gradient(0deg, rgba(18, 93, 125, 0.558), rgba(0, 6, 8, 0.76));
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    backdrop-filter: blur(35px);
    position:absolute;
    top:0;
    margin: 0;
    left: ${({click})=>click ? '0%' : '-100%'};
    transition:all 0.4s ease-in-out;
    padding: 100px 0 30px 0;
    
}
`




export const MenuItems = styled.li`
display: flex;
justify-content: center;
align-items: center;
width: 78px;
padding: 10px;
height: 24px;
@media (max-width: 850px){
width: 100%;
  height: 70px;
  padding: 5px;
}
`
export const MenuLinks = styled(Link)`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
text-decoration: none;
font-family: 'Graphik';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: 0.2px;

`

export const WrapIcons=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    padding:0 40px;
    @media (max-width: 850px) {
        gap: 20px;
        
}
`
export const SocialIcons = styled.ul`
width: 106px;
height: 56px;
border: 1px solid rgba(255, 255, 255, 0.17);
border-radius: 60px;
display: grid;
grid-template-columns: repeat(2,auto);
list-style: none;
padding: 0;
justify-content:space-evenly;
align-items: center;

@media (max-width: 850px) {
width: 65px;
height: 35px;
z-index: 1;
}
`
export const SocialItems=styled.li`
width: 20px;
height: 15px;

`
export const SocialLink=styled(Link)`
width: 100%;
height: 100%;
`
export const Icon=styled.img`
width: 100%;
height: 100%;
`
export const MenuIcon=styled.div`
display: none;
@media (max-width: 850px) {
width: 65px;
height: 35px;
display: flex;
border: 1px solid rgba(255, 255, 255, 0.17);
border-radius: 65px;
padding: 0;
justify-content:space-evenly;
align-items: center;
z-index: 1;
}
`
export const MenubarIcon=styled(FaBars)`
    font-size: 25px;
    color  :white ;
`
export const CrossbarIcon=styled(FaTimes)`
font-size: 25px;
     color  :white ;
`
