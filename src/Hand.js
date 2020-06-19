import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./card/Card";
import { suits, ranks } from "./card/constants";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 5px;
`;

const Hand = ({ cards, faceUp }) => (
  <>
    {cards.map(({ suit, rank }) => (
      <Container>
        <Card suit={suit} rank={rank} faceUp={faceUp} />
      </Container>
    ))}
  </>
);

Hand.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      rank: PropTypes.oneOf(ranks),
      suit: PropTypes.oneOf(suits)
    })
  ),
  faceUp: PropTypes.bool
};

export default Hand;
