import React from 'react'
import {
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
} from "../../style/GorillaStyle"
import CurrencyStack from '../CurrencyStack'
import { GorillaDataLeft,GorillaDataRight } from './GorillaData'

const Gorilla = () => {
  return (
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
  )
}

export default Gorilla
