import React from 'react'
import {
    Container,
    Wrapper,
    CurrencyOne,
    CurrencyTwo,
    CurrencyThree
} from "../../style/CurrencyStackStyle"
const CurrencyStack = () => {
  return (
    <Container>
        <Wrapper>
        <CurrencyOne/>
        <CurrencyTwo/>
        <CurrencyThree/>
        </Wrapper>
    </Container>
  )
}

export default CurrencyStack
