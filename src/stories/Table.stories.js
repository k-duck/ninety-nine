import React from "react";
import styled from "styled-components";
import { withKnobs, select } from "@storybook/addon-knobs";
import Table from "../table/Table";
import { SUIT, RANK } from "../cardDeck/constants";

export default {
  title: "Table",
  component: Table,
  decorators: [withKnobs]
};

const hand = [
  {
    suit: SUIT.hearts,
    rank: RANK.nine
  },
  {
    suit: SUIT.clubs,
    rank: RANK.king
  },
  {
    suit: SUIT.diamonds,
    rank: RANK.seven
  }
];

const players = [
  {
    name: "Emberfire",
    user: true,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    name: "Renegade22",
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    name: "NotAMoron",
    user: false,
    active: false,
    cards: hand,
    coins: 1
  },
  {
    name: "Noob",
    user: false,
    active: false,
    cards: hand,
    coins: 0
  },
  {
    name: "Yourself101010",
    user: false,
    active: false,
    cards: hand,
    coins: 2
  },
  {
    name: "Thrillho",
    user: false,
    active: true,
    cards: hand,
    coins: 1
  },
  {
    name: "Tsunami",
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    name: "SaturnDragon",
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    name: "Maggots",
    user: false,
    active: false,
    cards: hand,
    coins: 2
  },
  {
    name: "AllSoldiers",
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    name: "Aw Man",
    user: false,
    active: false,
    cards: hand,
    coins: 1
  },
  {
    name: "Emberfire 2",
    user: false,
    active: false,
    cards: hand,
    coins: 2
  }
];

const GameContainer = styled.div`
  height: 90vh;
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayerNum = {
  range: true,
  min: 2,
  max: 12,
  step: 1
};
const PlayerNumLabel = "Number of Players";

export const TableStory = () => (
  <GameContainer>
    <Table players={players}></Table>
  </GameContainer>
);
