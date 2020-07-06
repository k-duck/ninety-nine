import React from "react";
import styled from "styled-components";
import { withKnobs, select } from "@storybook/addon-knobs";
import Table from "../table/Table";
import { SUIT, RANK } from "../card/constants";

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
    user: true,
    active: true,
    cards: hand,
    coins: 3
  },
  {
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    user: false,
    active: false,
    cards: hand,
    coins: 3
  },
  {
    user: false,
    active: false,
    cards: hand,
    coins: 3
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
