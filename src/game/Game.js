import React from "react";
import produce from "immer";
import Table from "../table/Table";
import CardDeck from "../cardDeck/CardDeck";
import { GameContext } from "./GameContext";

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
    user: true,
    active: false,
    cards: [],
    coins: 3
  },
  {
    name: "NotAMoron",
    user: true,
    active: false,
    cards: [],
    coins: 1
  }
];

const deck = new CardDeck();

const Game = () => {
  const [players, setPlayers] = React.useState(initialPlayers);
  const [turn, setTurn] = React.useState(0);
  const [gameStarted, setGameStarted] = React.useState(false);
  const [lastCardPlayed, setLastCardPlayed] = React.useState();

  const advanceTurn = () => {
    // todo skip eliminated players, reverse when 8 is played
    const nextTurn = (turn + 1) % players.length;
    setTurn(nextTurn);
  };

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
    <GameContext.Provider value={{ playCard }}>
      <Table players={players} lastCardPlayed={lastCardPlayed}></Table>
    </GameContext.Provider>
  );
};

export default Game;
