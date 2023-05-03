import React from 'react'
import {
    Container,
    Title,
    Describe,
    Heading,
    Wrapper,
    ContentOne,
    ContentTwo,
    WebsiteLink,
    PhoneNoOne,
    PhoneNoTwo,
    Name,
    Email,
    Enquiry,
    Wrap,
    Submit

}from "../../style/ContactStyle"

const Contact = () => {
  return (
    <Container>
        <Heading>
                <Title>Contact Us</Title>
                <Describe>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Describe>
        </Heading>
        <Wrapper>
        <ContentOne>
            <WebsiteLink>Earnmanagement.com</WebsiteLink>
            <PhoneNoOne>US  +1 (872) 288 9283</PhoneNoOne>
            <PhoneNoTwo>US  +1 (872) 288 9283</PhoneNoTwo>
        </ContentOne>
        <ContentTwo>
            <Name/>
            <Email/>
            <Enquiry/>
            <Wrap><Submit>Submit Request</Submit></Wrap>

        </ContentTwo>
        </Wrapper>
    </Container>      

  )
}

export default Contact
