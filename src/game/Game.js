import React from "react";
import Table from "../table/Table";
import CardDeck from "../cardDeck/CardDeck";

const initialPlayers = [
  {
    name: "Emberfire",
    user: true,
    active: true,
    cards: [],
    coins: 3
  },
  {
    name: "Renegade22",
    user: false,
    active: false,
    cards: [],
    coins: 3
  },
  {
    name: "NotAMoron",
    user: false,
    active: false,
    cards: [],
    coins: 1
  }
];

const deck = new CardDeck();

const Game = () => {
  const [players, setPlayers] = React.useState(initialPlayers);
  const [gameStarted, setGameStarted] = React.useState(false);

  React.useEffect(() => {
    if (!gameStarted) {
      const newPlayers = [...initialPlayers];
      newPlayers.forEach(player => {
        for (let i = 0; i < 3; i += 1) {
          player.cards.push(deck.dealCard());
        }
      });
      setPlayers(newPlayers);
      setGameStarted(true);
    }
  }, [gameStarted]);

  return <Table players={players}></Table>;
};

export default Game;
