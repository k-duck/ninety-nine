import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SuitIcon from "./SuitIcon";
import { suits } from "./constants";

const ColumnContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.number === 1 ? "space-around" : "space-between"};
`;

const IconContainer = styled.div`
  transform: ${props => (props.flipped ? "scale(-1, -1)" : "none")};
  width: 100%;
`;

const IconColumn = ({ layout, suit }) => (
  <ColumnContainer number={layout.length}>
    {layout.map((flipped, idx) => (
      <IconContainer key={idx} flipped={flipped}>
        <SuitIcon suit={suit} />
      </IconContainer>
    ))}
  </ColumnContainer>
);

IconColumn.propTypes = {
  layout: PropTypes.arrayOf(PropTypes.bool),
  suit: PropTypes.oneOf(suits)
};

export default IconColumn;
