import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BoxContainer = styled.div`
  width: 100%;
  padding-top: ${props => props.ratio * 100}%;
  position: relative;
`;
const InnerBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const OuterBox = styled.div`
  width: 100%;
`;

const AspectRatioBox = ({ ratio, children }) => (
  <OuterBox>
    <BoxContainer ratio={ratio}>
      <InnerBox>{children}</InnerBox>
    </BoxContainer>
  </OuterBox>
);

AspectRatioBox.propTypes = {
  ratio: PropTypes.number,
  children: PropTypes.element
};

export default AspectRatioBox;
