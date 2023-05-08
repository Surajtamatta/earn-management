import styled from "styled-components";
import background from '../../assets/background.png';


export const StyledBackground = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  height: 3979px;
  background: linear-gradient(0deg, rgba(48, 165, 202, 0.58), rgba(48, 165, 202, 0.58)), url(${background});
  background-blend-mode: overlay, normal;
  background-size:cover;
  background-repeat: no-repeat;
`;

