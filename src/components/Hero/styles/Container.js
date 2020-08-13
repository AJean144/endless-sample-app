import styled from "styled-components";
import image from "../../../assests/photo-couch.jpg";
import { breakpoints } from "../../../utils/styleUtils";

const Container = styled.section`
  width: 100%;
  background: url(${image}) no-repeat center center fixed;
  background-size: cover;

  ${breakpoints.xs`
    height: 50em;
  `}
  ${breakpoints.s`
    height: 55em;
  `}
  ${breakpoints.m`
    height: 60em;
  `}
  ${breakpoints.l`
    height: 67em;
  `}
`;

export default Container;
