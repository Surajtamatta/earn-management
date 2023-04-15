import React from 'react'
import {
    Container,
    TextInput,
    Bar,
    Dropdown,
    Option,
    DropdownIcon,
    IconBox,
    Icon
} from "../../style/EmailInputStyle"
const InputEmail = () => {
  return (
    <Container>
        <TextInput />
        <Bar></Bar>
        <Dropdown>
            <Option>Owner</Option>
            <DropdownIcon></DropdownIcon>
        </Dropdown>
        <IconBox>
            <Icon/>
        </IconBox>
        
    </Container>
  )
}

export default InputEmail
