import React from "react";
import produce from "immer";
import styled from "styled-components";
import ScaleText from "react-scale-text";
import AspectRatioBox from "../card/AspectRatioBox";
import Card from "../card/Card";
import CardDeck from "../cardDeck/CardDeck";
import Player from "../player/Player";
import { GameContext } from "./GameContext";

const testMode = true;

const initialPlayers = [
  {
    name: "Emberfire",
    user: true,
    active: false,
    cards: [],
    coins: 3
  },
  {
    name: "Renegade22",
    user: testMode,
    active: false,
    cards: [],
    coins: 3
  },
  {
    name: "Tsunami",
    user: testMode,
    active: false,
    cards: [],
    coins: 3
  }
  // {
  //   name: "NotAMoron",
  //   user: testMode,
  //   active: false,
  //   cards: [],
  //   coins: 1
  // }
];

const deck = new CardDeck();

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
  justify-content: space-around;
  align-items: center;
`;

const DiscardPile = styled.div`
  width: 20%;
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

const GameContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HandOverToast = styled.div`
  position: absolute;
  background-color: white;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  z-index: 2;
  width: 30%;
  height: 15%;
  padding: 2%;
  border: 2px solid black;
`;

const LosingText = styled.span`
  color: red;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Score = styled.span`
  color: ${props => (props.currentScore > 89 ? "red" : "black")};
  -webkit-text-stroke: 1px
    ${props => (props.currentScore > 89 ? "black" : "none")};
  -webkit-text-fill-color: ${props =>
    props.currentScore > 89 ? "red" : "black"};
`;

const Game = () => {
  const [players, setPlayers] = React.useState(initialPlayers);
  const [turn, setTurn] = React.useState(0);
  const [lastCardPlayed, setLastCardPlayed] = React.useState();
  const [currentScore, setCurrentScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  const clockwise = React.useRef(true);

  const advanceTurn = () => {
    // todo skip eliminated players
    const nextTurn =
      (turn + (clockwise.current ? 1 : -1) + players.length) % players.length;
    setTurn(nextTurn);
  };

  const cardValue = rank => {
    switch (rank) {
      case "Q":
      case "J":
        return 10;
      case 8:
      case 9:
      case "K":
        return 0;
      case "A":
        return 1;
      case 10:
        return -10;
      default:
        return rank;
    }
  };

  const canCardBePlayed = rank => !(currentScore + cardValue(rank) > 99);

  React.useEffect(() => {
    if (players[turn].active) return;

    const newPlayers = produce(players, draftPlayers => {
      draftPlayers.forEach(player => {
        player.active = false;
      });
      draftPlayers[turn].active = true;
    });
    setPlayers(newPlayers);
  }, [players, turn]);

  const playCard = card => {
    setLastCardPlayed(card);

    const newPlayers = produce(players, draftPlayers => {
      const hand = draftPlayers[turn].cards;
      const cardIdx = hand.findIndex(
        handCard => handCard.rank === card.rank && handCard.suit === card.suit
      );
      deck.discardCard(hand[cardIdx]);
      hand[cardIdx] = deck.dealCard();
    });
    setPlayers(newPlayers);
    if (card.rank === "K") {
      setCurrentScore(99);
    } else {
      setCurrentScore(currentScore + cardValue(card.rank));
    }
    if (card.rank === 8) {
      clockwise.current = !clockwise.current;
    }

    advanceTurn();
  };

  React.useEffect(() => {
    if (players[turn].cards.length === 3) {
      const canIPlayArray = players[turn].cards
        .map(card => canCardBePlayed(card.rank))
        .some(value => value);

      if (canIPlayArray === false) {
        setGameOver(true);
        const newPlayers = produce(players, draftPlayer => {
          draftPlayer[turn].coins -= 1;
        });
        setPlayers(newPlayers);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turn]);

  React.useEffect(() => {
    const newPlayers = produce(initialPlayers, draftPlayers => {
      draftPlayers.forEach(player => {
        for (let i = 0; i < 3; i += 1) {
          player.cards.push(deck.dealCard());
        }
      });
      draftPlayers[0].active = true;
    });
    setPlayers(newPlayers);
  }, []);

  return (
    <GameContext.Provider value={{ playCard, canCardBePlayed }}>
      <GameContainer>
        {gameOver && (
          <HandOverToast>
            <ScaleText>
              <LosingText>{players[turn].name} loses a coin</LosingText>
            </ScaleText>
          </HandOverToast>
        )}
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
                    <Score currentScore={currentScore}>{currentScore}</Score>
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
      </GameContainer>
    </GameContext.Provider>
  );
};

export default Game;
