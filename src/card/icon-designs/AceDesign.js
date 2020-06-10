import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import IconColumn from "../IconColumn";
import { suits } from "../constants";

const SizeContainer = styled.div`
  height: 100%;
  padding: 0 15%;
`;

const AceDesign = ({ suit }) => (
  <SizeContainer>
    <IconColumn suit={suit} layout={[false]} />
  </SizeContainer>
);

AceDesign.propTypes = {
  suit: PropTypes.oneOf(suits)
};

export default AceDesign;
