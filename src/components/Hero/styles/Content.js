import styled from "styled-components";
import { breakpoints } from "../../../utils/styleUtils";

const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoints.xs`
  padding: 10em 1em 0 1em;
  `};
  ${breakpoints.s`
  padding: 15em 3em 0 3em;
  `};

  ${breakpoints.m`
  padding: 20em 20em 0 20em;
  `};

  ${breakpoints.l`
  padding: 35em 20em 0 20em;
  `};
`;

export default Content;
