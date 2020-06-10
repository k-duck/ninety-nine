import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import IconColumn from "../IconColumn";
import { suits } from "../constants";

const SizeContainer = styled.div`
  height: 100%;
  padding: 33.3%;
`;

const ThreeDesign = ({ suit }) => (
  <SizeContainer>
    <IconColumn suit={suit} layout={[false, false, true]} />
  </SizeContainer>
);

ThreeDesign.propTypes = {
  suit: PropTypes.oneOf(suits)
};

export default ThreeDesign;
