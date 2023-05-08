import React,{useState} from 'react'
import {
    MapContainer,
    LeftContainer,
    RoadmapContainer,
    Header,
    Title,
    Describe,
    VectorBoxOne,
    VectorBoxTwo,
    DescriptionBox,
    InfoBox,
    Year,
    QWords,
    Info,
    RightContainer
} from "../../style/RoadMapStyle"
import RectangleDotOne from '../../Components/RectangleDotOne'
import RectangleDotTwo from '../../Components/RectancleDotTwo'
import { RoadMapData } from './RoadMpData'
import Contact from '../../Components/Contact'
import MoneroImg from '../../Components/MoneroImg'
import { useEffect } from 'react'
const RoadMap = () => {
   const Heading=(item)=>{
         if(item === 0){
            return(
               <>
            <Header>
               <Title>Road Map</Title>
               <Describe>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Describe>
            </Header>
            </>
          )}}
   const Even =(even)=>{
      if(even % 2 !== 1){
        if(even === 0){
         return <RectangleDotTwo/>;
        }
        return <RectangleDotOne/>;
      }
      
   }
   const Odd =(Odd)=>{
      if(Odd % 2 !== 0){
        return <RectangleDotOne/>;
      }}


  return (
    <MapContainer>
        <LeftContainer>
        </LeftContainer>
        <RoadmapContainer>
        <MoneroImg/>
          {RoadMapData.map((item,index)=>{ 
               return(
                  <VectorBoxOne propsStyled={index} key={item.id} >
                      {Heading(index)}
                        <DescriptionBox  position={index}  >
                        {Even(index)}
                           <InfoBox  place={index} >
                              <Year  year={index}>{item.year}</Year>
                              <QWords qword={index}>{item.Qletter}</QWords>
                              <Info pWidth={index}>{item.Info}</Info>
                           </InfoBox>
                        {Odd(index)}
                        </DescriptionBox> 
                  </VectorBoxOne>
            )
         })}
         <VectorBoxTwo>
            <Contact/>
         </VectorBoxTwo>
        </RoadmapContainer>
        <RightContainer/>
    </MapContainer>
  )
}

export default RoadMap
