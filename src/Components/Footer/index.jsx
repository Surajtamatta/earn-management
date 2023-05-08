import React from 'react'
import { FingerData,ResourceData,AboutData,ContactData,SocialData } from './FooterData'
import {
  FooterContainer,
  Wrapper,
  ContainerOne,
  ContainerTwo,
  PagesLink,
  ResourceLink,
  AboutLink,
  Links,
  Social,
  ContactLinks,
  SocialLinks,
  Contact,
  Text,
  CopyRight,
  JoinDiscord,
} from '../../style/FooterStyle'
import FloatIcon from '../FloatIcon'


const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <ContainerOne>
                <PagesLink>
                        {FingerData.map((item)=>{
                          return(
                              <Links key={item.id} to={item.Url}>{item.Title}</Links>
                          )})}
                </PagesLink>
                <ResourceLink>
                        {ResourceData.map((item)=>{
                          return(
                              <Links key={item.id} to={item.Url}>{item.Title}</Links>
                          )})}
                </ResourceLink>
                <AboutLink>
                        {AboutData.map((item)=>{
                          return(
                              <Links key={item.id} to={item.Url}>{item.Title}</Links>
                          )})}
                </AboutLink>       
        </ContainerOne>
        <ContainerTwo>
          <Contact>
                        {ContactData.map((item)=>{
                            return(
                              <ContactLinks  key={item.id} to={item.Url} ><item.Icon/><Text>{item.Text}</Text></ContactLinks>
                          )})}
          </Contact>
          <Social>
                        {SocialData.map((item)=>{
                            return(
                              <SocialLinks  key={item.id} to={item.Url} ><item.Icon/></SocialLinks>
                        )})}
          </Social>
        </ContainerTwo>
        </Wrapper>
        <CopyRight>@copyright. play 2022</CopyRight>
        <FloatIcon/>
    </FooterContainer>
  )
}

export default Footer
