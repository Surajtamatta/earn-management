import styled from "styled-components";


export const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;
    width:100%;
    height: 100%;
    padding:20px 50px;
    @media (max-width:900px){
        padding:20px ;
    }
    @media (max-width:600px) {
        min-height: 600px;
}

`
export const Heading=styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    width: 100%;
    height: 100%;
    max-height: 180px;

`
export const Title=styled.h1`
font-family: 'Outfit';
font-style: normal;
font-weight: 500;
font-size: 80px;
line-height: 88px;
letter-spacing: 0.2px;
color: #FFFFFF;
@media (max-width:750px) {
font-size: 65px;

}
@media (max-width:600px) {
font-size: 45px;
line-height: 50px;
}

`
export const Describe=styled.p`
    
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 50px;
letter-spacing: 0.2px;
color: #FFFFFF;
@media (max-width:750px) {
font-size:18px;
line-height:40px;
}

`

export const Wrapper=styled.div`
    display: flex;
    justify-content:space-between;
    width:100%;
    height: 100%;
    gap: 10px;
    max-height: 450px;
    position: relative;
    @media (max-width:600px) {
        max-height: 350px;
}

`
export const ContentOne=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 45px;
    width: 100%;
    height: 100%;
    min-width: 125px;
    max-width: 250px;
    @media (max-width:750px) {
        right:0px;
       
}

`
export const ContentTwo=styled.div`
    display: flex;
    flex-direction: column;
    position:relative;
    right: -90px;
    justify-content: flex-start;
    gap:45px;
    width: 100%;
    height: 100%;
    min-width: 145px;
    max-width: 600px;
        @media (max-width:750px) {
                right:-40px;
            
        }
        @media (max-width:500px) {
         right:0;
        }
`
export const WebsiteLink=styled.h1`
font-family: 'Outfit';
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 50px;
letter-spacing: 0.1px;
color: #FFFFFF;
@media (max-width:750px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 35px;
}
@media (max-width:500px) {
    font-size: 12px;
}
`
export const PhoneNoOne=styled.h1`
font-family: 'Outfit';
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 50px;
letter-spacing: 0.1px;
color: #6C6C6C;
@media (max-width:750px) {
    font-size: 16px;
    line-height: 35px;
}
@media (max-width:500px) {
    font-size: 12px;
}
`
export const PhoneNoTwo=styled.h1`
    font-family: 'Outfit';
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 50px;
letter-spacing: 0.1px;

color: #6C6C6C;
@media (max-width:750px) {
    font-size: 16px;
    line-height: 35px;
}
@media (max-width:500px) {
    font-size: 12px;
}

`
export const Name=styled.input.attrs({type:'text',placeholder:'Your Name'})`
width: 100%;
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 50px;
background: none;
display: flex;
align-items: center;
color: rgba(255, 255, 255, 0.39);
mix-blend-mode: luminosity;
outline: none;
border:none ;
box-shadow: none;
border-bottom: 1px solid rgba(255, 255, 255, 0.21);
@media (max-width:750px) {
    font-size: 12px;
    line-height: 35px;
}
`
export const Email=styled.input.attrs({type:'email',placeholder:'Your Email Address'})`
width: 100%;
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 50px;
background: none;
outline: none;
border:none ;
box-shadow: none;
display: flex;
align-items: center;

color: rgba(255, 255, 255, 0.39);

mix-blend-mode: luminosity;
border-bottom: 1px solid rgba(255, 255, 255, 0.21);
@media (max-width:750px) {
    font-size: 12px;
    line-height:35px;
}
`
export const Enquiry=styled.input.attrs({type:'text',placeholder:'Describe your needs'})`
width: 100%;
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 50px;
display: flex;
align-items: center;
background: none;
outline: none;
border:none ;
box-shadow: none;
color: rgba(255, 255, 255, 0.39);
mix-blend-mode: luminosity;
border-bottom: 1px solid rgba(255, 255, 255, 0.21);
@media (max-width:750px) {
    font-size: 12px;
    line-height: 35px;
}
`


    
export const Wrap=styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height:160px ;
    @media (max-width:500px) {
        justify-content:center;
}
`

export const Submit=styled.button`
width: 100%;
height: 100%;
max-width:156px;
max-height: 158px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #FFFFFF;
    border-radius:50%;

    background: linear-gradient(180deg, #107BEE 0%, #359DFD 100%);

@media (max-width:600px) {
        max-width:100px;
        max-height: 100px;
}
`