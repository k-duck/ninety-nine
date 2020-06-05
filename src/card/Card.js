import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { suits, ranks } from "./constants";
import SideColumn from "./SideColumn";

const AlignedCard = styled.div`
  display: flex;
  height: 100%;
`;

const CardCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
`;

const Card = ({ suit, rank }) => (
  <AlignedCard>
    <SideColumn suit={suit} rank={rank} />

    <CardCenter></CardCenter>

    <SideColumn flipped suit={suit} rank={rank} />
  </AlignedCard>
);

Card.propTypes = {
  suit: PropTypes.oneOf(suits),
  rank: PropTypes.oneOf(ranks)
};

export default Card;
