import React from 'react'
import {
    Container,
    DescriptionContainer,
    Description,
    Title,
    Content
  
} from "../../style/HeroStyle"
import { descriptionData} from './heroData'
import InputEmail from "../../Components/EmailInput"
import Gorilla from '../../Components/Gorilla'



const Hero = () => {
  return (
    <Container>
        <DescriptionContainer>
        <Description>
        { 
            descriptionData.map(item=>{
                return(
                    <>    
                    <Title>{item.title}</Title>
                    <Content>{item.content}</Content>
                    <InputEmail/>
                    </>
                )
            })
            
        }          
        </Description>
        </DescriptionContainer>
       <Gorilla/>
    </Container>
  )
}

export default Hero
