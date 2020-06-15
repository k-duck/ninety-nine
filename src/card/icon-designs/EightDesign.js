import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import IconColumn from "../IconColumn";
import SuitIcon from "../SuitIcon";
import { suits } from "../constants";

const OuterContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 25% 0;
`;

const InnerContainer = styled.div`
  width: 33.3%;
  height: 100%;
`;

const CustomColumn = styled.div`
  width 33.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const IconContainer = styled.div`
  width: 100%;
`;

const FlippedContainer = styled.div`
  transform: scale(-1, -1);
  width: 100%;
`;

const EightDesign = ({ suit }) => (
  <OuterContainer>
    <InnerContainer>
      <IconColumn suit={suit} layout={[false, false, true]} />
    </InnerContainer>
    <CustomColumn>
      <IconContainer>
        <SuitIcon suit={suit} />
      </IconContainer>
      <FlippedContainer>
        <SuitIcon suit={suit} />
      </FlippedContainer>
    </CustomColumn>
    <InnerContainer>
      <IconColumn suit={suit} layout={[false, false, true]} />
    </InnerContainer>
  </OuterContainer>
);

EightDesign.propTypes = {
  suit: PropTypes.oneOf(suits)
};

export default EightDesign;
