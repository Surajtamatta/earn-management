import styled from "styled-components";
import {Link} from'react-router-dom'
import {MdPhoneAndroid} from "react-icons/md"
import {FaTwitter,FaDiscord} from "react-icons/fa"

export const FooterContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
max-height:414px;
border-top: 3px solid rgba(255, 255, 255, 0.21);
@media (max-width:900px) {
    max-height:250px;
    }
    @media (max-width:500px) {
    max-height:370px;
}
`
export const Wrapper=styled.div`
display: flex;
justify-content:space-evenly;
align-items: center;
width: 100%;
height: 100%;
max-width: 1250px;
max-height:370px;
@media (max-width:500px) {
    flex-wrap: wrap;
}
`
export const ContainerOne=styled.div`
display: flex;
justify-content:space-between;
align-items: center;
width: 100%;
height: 100%;
max-width: 450px;
padding: 0  20px;
max-height: 250px;
@media (max-width:900px) {
    max-width: 350px;
    max-height: 170px;
} 

`
export const ContainerTwo=styled.div`
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items: center;
width: 100%;
height: 100%;
padding: 0 20px;
max-width: 450px;
min-width: 150px;
max-height: 250px; 
@media (max-width:900px) {
    max-width: 350px;
    max-height: 170px;
} 
@media (max-width:500px) {
    justify-content: flex-end;
    max-height: 180px;
} 
`
export const PagesLink=styled.div`
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items:flex-start;
height: 100%;
max-width: 100px;
 
`
export const ResourceLink=styled.div`
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items:flex-start;
height: 100%;
max-width: 100px;

`
export const AboutLink=styled.div`
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items:flex-start;
max-width: 100px;
height: 100%;
`
export const Links=styled(Link)`
color: #ffffff;
text-decoration: none;
font-family: 'Outfit';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.2px;
padding: 10px;
@media (max-width:900px) {
padding: 5px;
} 
`

export const Contact=styled.div`
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    height: 90px;
    width: 200px;
`
export const Social=styled.div`
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    height: 90px;
    width: 200px;
    gap: 40px;
    @media (max-width:500px) {
        height: 60px;
        justify-content:center;  
        gap: 20px;
}
`
export const ContactLinks=styled(Link)`
    display: flex;
    text-decoration:none;
    justify-content: center;
    align-items: center;
    gap:25px;
    height: 100%;
    width: 100%;
`
export const SocialLinks=styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    

`
export const DiscordIcon=styled(FaDiscord)`
height: 30px;
width: 30px;
color: white;
padding: 5px;
`
export const PhoneIcon=styled(MdPhoneAndroid)`
height: 30px;
width: 30px;
color: white;
padding: 5px;
`
export const TwitterIcon=styled(FaTwitter)`
height: 30px;
width: 30px;
color: white;
padding: 5px;
`
export const Text=styled.p`

width:131px;
height: 24px;
font-family: 'Outfit';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.2px;
color: #FFFFFF;
`


export const CopyRight=styled.p`
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.2px;
color: #FFFFFF;
`


export const JoinDiscord=styled.div`
    
`