import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { uxPalette } from "../common/uxPalette";
import { SUIT, suits, ranks } from "../cardDeck/constants";

const textStyle = suit => ({
  fill:
    suit === SUIT.spades || suit === SUIT.clubs
      ? uxPalette.suit.black
      : uxPalette.suit.red
});

const NumberContainer = styled.div`
  height: 100%;
`;

const CardNumber = ({ suit, rank }) => (
  <NumberContainer>
    <svg viewBox="0 0 14 18">
      <text
        style={textStyle(suit)}
        x="50%"
        y="15"
        letterSpacing="-1"
        textAnchor="middle"
      >
        {rank}
      </text>
    </svg>
  </NumberContainer>
);

CardNumber.propTypes = {
  suit: PropTypes.oneOf(suits),
  rank: PropTypes.oneOf(ranks)
};

export default CardNumber;
