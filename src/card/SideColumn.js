import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { suits, ranks } from "../cardDeck/constants";

import SuitIcon from "./SuitIcon";
import CardNumber from "./CardNumber";
import AspectRatioBox from "./AspectRatioBox";

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  transform: ${props => (props.flipped ? "scale(-1, -1)" : "none")};
  align-items: center;
`;

const SuitContainer = styled.div`
  width: 70%;
`;

const SideColumn = ({ flipped, suit, rank }) => (
  <ColumnContainer flipped={flipped}>
    <AspectRatioBox ratio={18 / 14}>
      <CardNumber rank={rank} suit={suit} />
    </AspectRatioBox>
    <SuitContainer>
      <SuitIcon suit={suit} />
    </SuitContainer>
  </ColumnContainer>
);

SideColumn.propTypes = {
  flipped: PropTypes.bool,
  suit: PropTypes.oneOf(suits),
  rank: PropTypes.oneOf(ranks)
};

export default SideColumn;
