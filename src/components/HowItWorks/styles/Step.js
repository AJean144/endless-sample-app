import styled from "styled-components";

const Step = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 15em;
  padding: 1em;

  :nth-child(${(props) => props.index && props.index}) {
  }
`;

export default Step;
