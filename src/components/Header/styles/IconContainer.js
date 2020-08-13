import styled from "styled-components";
import { breakpoints } from "../../../utils/styleUtils";

const IconContainer = styled.div`
  ${breakpoints.xs`
  padding: 0 1em;
  `}
  ${breakpoints.s`
  padding: 0 3em;
  `}
  ${breakpoints.m`
  padding: 0 20em;
  `}
  ${breakpoints.l`
  padding: 0 20em;
  `}
`;

export default IconContainer;
