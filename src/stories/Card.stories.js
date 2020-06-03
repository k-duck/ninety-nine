import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import Card from "../card/Card";
import { SUIT } from "../card/constants";

export default {
  title: "Card",
  component: Card,
  decorators: [withKnobs]
};

const SuitContainer = styled.div`
  width: 200px;
  height: 300px;
`;

const suitOptions = [SUIT.spades, SUIT.hearts, SUIT.diamonds, SUIT.clubs];
const suitLabel = "Suit";
const rankOptions = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const rankLabel = "Rank";

export const CardIcon = () => (
  <SuitContainer>
    <Card
      suit={select(suitLabel, suitOptions, SUIT.spades)}
      rank={select(rankLabel, rankOptions, "A")}
    />
  </SuitContainer>
);
