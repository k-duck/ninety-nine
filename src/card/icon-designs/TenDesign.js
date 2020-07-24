import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import IconColumn from "../IconColumn";
import SuitIcon from "../SuitIcon";
import { suits } from "../../cardDeck/constants";

const OuterContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20% 5%;
`;

const InnerContainer = styled.div`
  width: 33.3%;
  height: 100%;
`;

const MiddleContainer = styled.div`
  height: 100%;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const IconContainer = styled.div`
  width: 100%;
`;

const FlippedContainer = styled.div`
  width: 100%;
  transform: scale(-1, -1);
`;

const TenDesign = ({ suit }) => (
  <OuterContainer>
    <InnerContainer>
      <IconColumn suit={suit} layout={[false, false, true, true]} />
    </InnerContainer>
    <MiddleContainer>
      <IconContainer>
        <SuitIcon suit={suit} />
      </IconContainer>
      <FlippedContainer>
        <SuitIcon suit={suit} />
      </FlippedContainer>
    </MiddleContainer>
    <InnerContainer>
      <IconColumn suit={suit} layout={[false, false, true, true]} />
    </InnerContainer>
  </OuterContainer>
);

TenDesign.propTypes = {
  suit: PropTypes.oneOf(suits)
};

export default TenDesign;
