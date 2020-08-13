import React from "react";
import Icon from "../../assests/Icon";
import theme from "../../config/theme";
import Container from "./styles/Container";
import IconContainer from "./styles/IconContainer";

const Header = () => (
  <Container>
    <IconContainer>
      <Icon width="10em" height="5em" fill={theme.colors.primary} />
    </IconContainer>
  </Container>
);

export default Header;
