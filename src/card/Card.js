import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { uxPalette } from "../common/uxPalette";
import { SUIT, suits, ranks, cardRatio } from "./constants";
import SideColumn from "./SideColumn";
import AspectRatioBox from "./AspectRatioBox";

const AlignedCard = styled.div`
  display: flex;
  height: 100%;
  border: 5% solid black;
  border-radius: 5%;
  background-color: white;
`;

const Border = styled.div`
  height: 100%;
  border-radius: 8%;
  padding: 3%;
`;

const BorderColor = suit => ({
  backgroundColor:
    suit === SUIT.spades || suit === SUIT.clubs
      ? uxPalette.suit.black
      : uxPalette.suit.red
});

const CardCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
`;

const Card = ({ suit, rank }) => (
  <AspectRatioBox ratio={cardRatio}>
    <Border style={BorderColor(suit)}>
      <AlignedCard>
        <SideColumn suit={suit} rank={rank} />

        <CardCenter></CardCenter>

        <SideColumn flipped suit={suit} rank={rank} />
      </AlignedCard>
    </Border>
  </AspectRatioBox>
);

Card.propTypes = {
  suit: PropTypes.oneOf(suits),
  rank: PropTypes.oneOf(ranks)
};

export default Card;
