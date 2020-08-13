import React from "react";
import HowItWorksContainer from "./styles/HowItWorksContainer";
import Text from "../UIElements/Text";
import Steps from "./Steps";

const HowItWorks = () => (
  <HowItWorksContainer>
    <Text alignSelf="center" minWidth="6em" margin="2em 0 0 0" fontSize="2em">
      How It Works
    </Text>
    <Steps />
  </HowItWorksContainer>
);

export default HowItWorks;
