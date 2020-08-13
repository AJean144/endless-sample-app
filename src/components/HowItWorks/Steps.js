import React, { useEffect, useState } from "react";
import axios from "axios";
import formatNum from "../../utils/formatNum";
import API_URL from "../../config/apiURL";
import StepsContainer from "./styles/StepsContainer";
import Underline from "./styles/Underline";
import Text from "../UIElements/Text";
import Step from "./styles/Step";
import StepNumber from "./styles/StepNumber";
import {
  getRecentEffectiveDateTitle,
  getRecentEffectiveDateBody,
} from "../../utils/getRecentEffectiveDate";
import theme from "../../config/theme";

const Steps = () => {
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const [data, setData] = useState(null);

  return (
    <StepsContainer>
      {data &&
        data
          .sort(
            (stepToSortA, stepToSortB) =>
              parseInt(stepToSortA.stepNumber) -
              parseInt(stepToSortB.stepNumber)
          )
          .map((step, index) => (
            <Step key={step.id} index={index + 1}>
              <StepNumber>
                <Text fontSize="5em" fontFamily={theme.fonts.family.heading}>
                  {formatNum(step.stepNumber)}
                </Text>
                <Underline />
              </StepNumber>
              <Text
                fontSize="1.3em"
                minWidth="4em"
                fontWeight="bold"
                margin="1em 0 0 0"
              >
                {getRecentEffectiveDateTitle(step.versionContent)}
              </Text>
              <Text margin="1em 0 0 0">
                {getRecentEffectiveDateBody(step.versionContent)}
              </Text>
            </Step>
          ))}
    </StepsContainer>
  );
};

export default Steps;
