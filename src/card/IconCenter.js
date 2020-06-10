import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SuitIcon from "./SuitIcon";
import { suits } from "./constants";

const Wrapper = styled.div`
  height: 100%;
  width: 100;
  position: absolute;
  background: blue;
`;

const IconCenter = ({ suit }) => (
  <Wrapper>
    <SuitIcon suit={suit} />
  </Wrapper>
);

IconCenter.propTypes = {
  suit: PropTypes.oneOf(suits)
};
export default IconCenter;
