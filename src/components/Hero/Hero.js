import React from "react";
import Container from "./styles/Container";
import Content from "./styles/Content";
import Button from "../UIElements/Button";
import Text from "../UIElements/Text";

const Hero = () => (
  <Container>
    <Content>
      <Text color="#fff" margin="1em 0">
        New Games &amp; Accessories
      </Text>
      <Text color="white" fontSize="3em">
        Monthly packages.
      </Text>
      <Text color="white" fontSize="3em">
        Excitement delivered daily.
      </Text>
      <Text color="white" maxWidth="25em" margin="1em 0">
        What&apos;s the best way to shop for the latest video games and
        peripherals? How about never shopping at all? You&apos;ll get new stuff
        on your doorstep - every month.
      </Text>
      <Button>GET STARTED</Button>
    </Content>
  </Container>
);

export default Hero;
