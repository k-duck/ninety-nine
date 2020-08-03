import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { uxPalette } from "../common/uxPalette";
import { SUIT, suits, ranks, cardRatio } from "../cardDeck/constants";
import SideColumn from "./SideColumn";
import AspectRatioBox from "./AspectRatioBox";
import CenterDesign from "./CenterDesign";
import { GameContext } from "../game/GameContext";

const CardContent = styled.div`
  display: flex;
  height: 100%;
  border: 5% solid black;
  border-radius: 5%;
  background-color: white;
`;

const getCursor = ({ clickable, valid }) => {
  if (!valid && clickable) {
    return "not-allowed";
  }
  if (clickable) {
    return "pointer";
  }

  return "auto";
};

const Border = styled.div`
  height: 100%;
  border-radius: 8%;
  padding: 3%;
  cursor: ${props => getCursor(props)};
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

const CardBack = styled.div`
  background: url(
    data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAO0lEQVQoU82OwQkAIBDD0qHPIXToCIrgwwHsr5CGxirpnZUEqrh7VGkNxgDd4NU38FgeUwRfy2PKBx8mcIJFxUA0lXIAAAAASUVORK5CYII=
     )
    repeat;
  width: 100%;
  height: 100%;
  border-radius: 5%;
`;

const Card = ({ suit, rank, faceUp, active }) => {
  const { playCard, canCardBePlayed } = React.useContext(GameContext);

  return (
    <AspectRatioBox ratio={cardRatio}>
      {faceUp === true ? (
        <Border
          style={BorderColor(suit)}
          onClick={
            active && canCardBePlayed(rank)
              ? () => playCard({ rank, suit })
              : undefined
          }
          clickable={active}
          valid={canCardBePlayed(rank)}
        >
          <CardContent>
            <SideColumn suit={suit} rank={rank} />

            <CardCenter>
              <CenterDesign rank={rank} suit={suit} />
            </CardCenter>

            <SideColumn flipped suit={suit} rank={rank} />
          </CardContent>
        </Border>
      ) : (
        <Border style={BorderColor(SUIT.hearts)}>
          <CardBack />
        </Border>
      )}
    </AspectRatioBox>
  );
};

Card.propTypes = {
  suit: PropTypes.oneOf(suits),
  rank: PropTypes.oneOf(ranks),
  faceUp: PropTypes.bool,
  active: PropTypes.bool
};

export default Card;
