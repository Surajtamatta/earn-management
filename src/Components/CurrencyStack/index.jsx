import React from 'react'
import {
    Container,
    Wrapper,
    CurrencyOne,
    CoinStacks,
    CurrencyTwo,
    CurrencyThree
} from "../../style/CurrencyStackStyle"
const CurrencyStack = () => {
  return (
    <Container>
        <Wrapper>
        <CurrencyOne/>
        <CoinStacks>
        <CurrencyTwo/>
        <CurrencyThree/>
        </CoinStacks>
        </Wrapper>
    </Container>
  )
}

export default CurrencyStack
