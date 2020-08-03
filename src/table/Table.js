import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ScaleText from "react-scale-text";
import Player from "../player/Player";
import AspectRatioBox from "../card/AspectRatioBox";
import Card from "../card/Card";
import { ranks, suits } from "../cardDeck/constants";

const seatingChart = [
  [0, 6],
  [0, 4, 8],
  [0, 3, 6, 9],
  [0, 2, 5, 7, 10],
  [0, 2, 4, 6, 8, 10],
  [0, 1, 3, 5, 7, 9, 11],
  [0, 2, 3, 4, 6, 8, 9, 10],
  [0, 2, 3, 4, 5, 7, 8, 9, 10],
  [0, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
];

const seatingPositions = [
  { x: "50%", y: "100%" },
  { x: "27%", y: "90%" },
  { x: "10%", y: "80%" },
  { x: "3%", y: "50%" },
  { x: "10%", y: "20%" },
  { x: "30%", y: "5%" },
  { x: "50%", y: "0%" },
  { x: "70%", y: "5%" },
  { x: "90%", y: "20%" },
  { x: "97%", y: "50%" },
  { x: "90%", y: "80%" },
  { x: "73%", y: "90%" }
];

const TableShape = styled.div`
  position: relative;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: green;
`;

const TableContainer = styled.div`
  padding: 3%;
  width: 70vw;
`;

const PlayerContainer = styled.div`
  width: ${props => (props.user ? "25%" : "14%")};
  position: absolute;
  transform: translate(-50%, -50%);
  left: ${props => seatingPositions[props.seat].x};
  top: ${props => seatingPositions[props.seat].y};
`;

const TableCenter = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DiscardPile = styled.div`
  width: 30%;
`;

const ScoreContainer = styled.div`
  width: 10%;
  height: 30%;
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Score = styled.span``;

const Table = ({ players, lastCardPlayed, currentScore }) => (
  <TableContainer>
    <AspectRatioBox ratio={0.5}>
      <TableShape>
        {players.map(({ user, cards, active, coins, name }, idx) => (
          <PlayerContainer
            user={user}
            seat={seatingChart[players.length - 2][idx]}
            key={name}
          >
            <Player
              cards={cards}
              user={user}
              active={active}
              coins={coins}
              name={name}
            />
          </PlayerContainer>
        ))}
        <TableCenter>
          <ScoreContainer>
            <ScaleText>
              <Score>{currentScore}</Score>
            </ScaleText>
          </ScoreContainer>
          {lastCardPlayed && (
            <DiscardPile>
              <Card
                rank={lastCardPlayed.rank}
                suit={lastCardPlayed.suit}
                faceUp
              />
            </DiscardPile>
          )}
        </TableCenter>
      </TableShape>
    </AspectRatioBox>
  </TableContainer>
);

Table.propTypes = {
  players: PropTypes.array,
  lastCardPlayed: PropTypes.shape({
    rank: PropTypes.oneOf(ranks),
    suit: PropTypes.oneOf(suits)
  }),
  currentScore: PropTypes.number
};

export default Table;
