import styled from "styled-components";
import { breakpoints } from "../../../utils/styleUtils";

const HowItWorksContainer = styled.section`
  display: flex;
  flex-direction: column;
  

  ${breakpoints.xs`
  padding: 0 5em 5em 5em;
  `}
  ${breakpoints.s`
  padding: 0 10em 5em 10em;
  `}
  ${breakpoints.m`
  padding: 0 20em 5em 20em;
  `}
  ${breakpoints.l`
  padding: 0 20em 5em 20em;
  `}
`;

export default HowItWorksContainer;
