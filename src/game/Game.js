import React from "react";
import produce from "immer";
import styled from "styled-components";
import ScaleText from "react-scale-text";
import Table from "../table/Table";
import CardDeck from "../cardDeck/CardDeck";
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

const deck = new CardDeck();

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
        <Table
          players={players}
          lastCardPlayed={lastCardPlayed}
          currentScore={currentScore}
        ></Table>
      </GameContainer>
    </GameContext.Provider>
  );
};

export default Game;
