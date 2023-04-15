import styled from "styled-components";
import background from '../../assets/background.png';


export const StyledBackground = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  position: absolute;
  height: 3979px;
  left: 0px;
  top: 0px;
  background: linear-gradient(0deg, rgba(48, 165, 202, 0.58), rgba(48, 165, 202, 0.58)), url(${background});
  background-blend-mode: overlay, normal;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
`;

