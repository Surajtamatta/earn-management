import React from 'react'
import {
  Container,
  OuterImg,
  InnerRing,
  InnerImg
} from "../../style/MoneroImgStyle"

const MoneroImg = () => {
  return (
    <Container>
      <OuterImg>
        <InnerRing>
          <InnerImg/>
        </InnerRing>
      </OuterImg>
    </Container>
  )
}

export default MoneroImg
