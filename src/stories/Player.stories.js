import React from "react";
import styled from "styled-components";
import { withKnobs, select } from "@storybook/addon-knobs";
import Player from "../player/Player";
import { SUIT, RANK } from "../card/constants";

export default {
  title: "Player",
  component: Player,
  decorators: [withKnobs]
};

const Container = styled.div`
  width: 300px;
`;

const userOptions = ["user", ""];
const userLabel = "User";
const activeOptions = ["active", ""];
const activeLabel = "Active";
const coinOptions = [0, 1, 2, 3];
const coinLabel = "Coins";

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

export const PlayerStory = () => (
  <Container>
    <Player
      name="Emberfire"
      cards={hand}
      user={select(userLabel, userOptions, "user")}
      coins={select(coinLabel, coinOptions, 3)}
      active={select(activeLabel, activeOptions, "")}
    />
  </Container>
);
