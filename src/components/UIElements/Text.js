import styled from "styled-components";

const Text = styled.span`
  color: ${(props) => props.color && `${props.color}`};
  margin: ${(props) => props.margin && `${props.margin}`};
  font-size: ${(props) => props.fontSize && `${props.fontSize}`};
  font-weight: ${(props) => props.fontWeight && `${props.fontWeight}`};
  font-family: ${(props) => props.fontFamily && `${props.fontFamily}`};
  min-width: ${(props) => props.minWidth && `${props.minWidth}`};
  max-width: ${(props) => props.maxWidth && `${props.maxWidth}`};
  align-self: ${(props) => props.alignSelf && `${props.alignSelf}`};
`;

export default Text;
