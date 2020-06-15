import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import IconColumn from "../IconColumn";
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

const FiveDesign = ({ suit }) => (
  <OuterContainer>
    <InnerContainer>
      <IconColumn suit={suit} layout={[false, false, true]} />
    </InnerContainer>
    <InnerContainer>
      <IconColumn suit={suit} layout={[false, false, true]} />
    </InnerContainer>
  </OuterContainer>
);

FiveDesign.propTypes = {
  suit: PropTypes.oneOf(suits)
};

export default FiveDesign;
