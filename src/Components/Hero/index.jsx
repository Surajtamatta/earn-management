import React from 'react'
import {
    Container,
    DescriptionContainer,
    Description,
    Title,
    Content,
    GorillaContainer,
    GorillaImg,
    Wrapper,
    GorillaTextLeft,
    DetailsOne,
    Info,
    GorillaTextRight,
    DetailsTwo,
    DetailsThree,
    DetailsFour
} from "../../style/HeroStyle"
import { descriptionData,GorillaDataLeft,GorillaDataRight} from './heroData'
import InputEmail from "../EmailInput"
import CurrencyStack from '../CurrencyStack'


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
        <GorillaContainer>
            
        <GorillaImg>
        <Wrapper>
            <GorillaTextLeft>
                    {GorillaDataLeft.map((item)=>{
                         if(item.id===1){
                            return(
                                <DetailsOne><Info>{item.detail}</Info></DetailsOne>
                            )
                        }
                            return(
                                <DetailsTwo><Info>{item.detail}</Info></DetailsTwo>
                            )
                
                    })}
                
            </GorillaTextLeft>
                 <CurrencyStack/>
            <GorillaTextRight>
                {GorillaDataRight.map((item)=>{
                     if(item.id===1){
                        return(
                            <DetailsThree><Info>{item.detail}</Info></DetailsThree>
                        )
                    }
                        return(
                            <DetailsFour><Info>{item.detail}</Info></DetailsFour>
                        )
                })}
            </GorillaTextRight>
            </Wrapper>
        </GorillaImg>
        
        </GorillaContainer>
    </Container>
  )
}

export default Hero
