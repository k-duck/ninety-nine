import React from "react";
import produce from "immer";
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
    name: "NotAMoron",
    user: testMode,
    active: false,
    cards: [],
    coins: 1
  }
  // {
  //   name: "Tsunami",
  //   user: testMode,
  //   active: false,
  //   cards: [],
  //   coins: 1
  // }
];

const deck = new CardDeck();

const Game = () => {
  const [players, setPlayers] = React.useState(initialPlayers);
  const [turn, setTurn] = React.useState(0);
  const [gameStarted, setGameStarted] = React.useState(false);
  const [lastCardPlayed, setLastCardPlayed] = React.useState();
  const [currentScore, setCurrentScore] = React.useState(0);
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
    if (!gameStarted) {
      const newPlayers = produce(initialPlayers, draftPlayers => {
        draftPlayers.forEach(player => {
          for (let i = 0; i < 3; i += 1) {
            player.cards.push(deck.dealCard());
          }
        });
        draftPlayers[0].active = true;
      });
      setPlayers(newPlayers);
      setGameStarted(true);
    }
  }, [gameStarted]);

  return (
    <GameContext.Provider value={{ playCard, canCardBePlayed }}>
      <Table
        players={players}
        lastCardPlayed={lastCardPlayed}
        currentScore={currentScore}
      ></Table>
    </GameContext.Provider>
  );
};

export default Game;
