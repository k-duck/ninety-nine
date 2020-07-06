import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Player from "../player/Player";
import AspectRatioBox from "../card/AspectRatioBox";

const seatingChart = [
  [0, 6],
  [0, 4, 5],
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

const Table = ({ players }) => (
  <TableContainer>
    <AspectRatioBox ratio={0.5}>
      <TableShape>
        {players.map(({ user, cards, active, coins }, idx) => {
          console.log({ players, idx });
          return (
            <PlayerContainer
              user={user}
              seat={seatingChart[players.length - 2][idx]}
            >
              <Player cards={cards} user={user} active={active} coins={coins} />
            </PlayerContainer>
          );
        })}
      </TableShape>
    </AspectRatioBox>
  </TableContainer>
);

Table.propTypes = {
  players: PropTypes.array
};

export default Table;
