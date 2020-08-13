import styled from "styled-components";
import { darken } from "../../utils/styleUtils";
import theme from "../../config/theme";

const Button = styled.button`
  background-color: ${theme.colors.primary};
  border: none;
  color: #000000;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 1em 0;
  cursor: pointer;
  border-radius: 3em;
  width: 10em;
  transition: background 150ms ease-in-out, color 150ms ease-in-out;

  :hover {
    background-color: ${darken(theme.colors.primary, 0.4)};
    color: #fff;
    background-position: 0 100%;
  }
`;

export default Button;
