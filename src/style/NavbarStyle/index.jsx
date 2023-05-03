import styled from "styled-components";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import {FaTimes,FaBars} from "react-icons/fa"
import {FaTwitter,FaDiscord} from "react-icons/fa"

export const Nav = styled.div`
width: 100%;
display: flex;
justify-content:space-evenly;
align-items: center;
min-height: 79px;
z-index:99;

`
export const Logo = styled.img.attrs({src:`${logo}`})`
width: 81px;
height: 79px;
z-index: 99;
padding:28px;
position:fixed;
left: 0px;
top: 0;
@media (max-width: 850px) {
    width: 70px;
    height: 70px;   
}
`
export const Wrapper=styled.div`
width: 100%;
min-height: 135px;
max-width: 1200px;
display: flex;
justify-content:center;
align-items: center;
position :fixed ;
top: 0;
@media (max-width: 850px) {

}
`
export const Navmenu = styled.ul`
display:flex;
justify-content:flex-end;
align-items: center;
padding: 0;
width:400px;
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
justify-content:flex-end;
align-items: center;
width: 83px;
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
font-family: 'GraphikMedium';
font-style: normal;
font-weight: 500;
font-size: 16px;
text-decoration: none;
line-height: 24px;
text-align: center;
letter-spacing: 0.2px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
@media (max-width: 850px){
    font-size: 25px;
}

`

export const WrapIcons = styled.div`
    display: flex;
    min-height: 135px;
    align-items: center;
    justify-content:center;
    padding:0 50px;
    position: fixed;
    right: 0;
    top: 0;
    @media (max-width: 850px) {
    display: flex;
    flex-direction:column;
    justify-content:start;
    width:100%;
    height: 10vh;
    position:absolute;
    top:250px;
    margin: 0;
    left: ${({click})=>click ? '0%' : '-100%'};
    transition:all 0.4s ease-in-out;
    padding: 100px 0 30px 0;
        z-index: 1;
        
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
border:none;
width: 80px;
height:40px;
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
export const FaTwitterIcon=styled(FaTwitter)`
min-width: 20px;
min-height: 15px;
color: white;
`
export const FaDiscordIcon=styled(FaDiscord)`
min-width: 20px;
min-height: 15px; 
color: white; 
`
export const MenuIcon=styled.div`
display: none;
position: fixed;
right: 0;
top: 0;
@media (max-width: 850px) {
display: flex;
padding:50px 28px;
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
