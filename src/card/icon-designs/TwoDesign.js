import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import IconColumn from "../IconColumn";
import { suits } from "../../cardDeck/constants";

const SizeContainer = styled.div`
  height: 100%;
  padding: 25% 33.3%;
`;

const TwoDesign = ({ suit }) => (
  <SizeContainer>
    <IconColumn suit={suit} layout={[false, true]} />
  </SizeContainer>
);

TwoDesign.propTypes = {
  suit: PropTypes.oneOf(suits)
};

export default TwoDesign;
