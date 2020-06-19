import React from "react";
import { withKnobs, select, number } from "@storybook/addon-knobs";
import styled from "styled-components";
import Card from "../card/Card";
import { SUIT } from "../card/constants";

export default {
  title: "Card",
  component: Card,
  decorators: [withKnobs]
};

const suitOptions = [SUIT.spades, SUIT.hearts, SUIT.diamonds, SUIT.clubs];
const suitLabel = "Suit";
const rankOptions = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const rankLabel = "Rank";
const numberOptions = {
  range: true,
  min: 50,
  max: 500,
  step: 25
};
const widthLabel = "Width in Pixels";

const SuitContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const CardIcon = () => {
  const width = number(widthLabel, 200, numberOptions);

  console.log({ width });

  return (
    <SuitContainer width={`${width}px`} height={`${(width * 300) / 200}px`}>
      <Card
        suit={select(suitLabel, suitOptions, SUIT.spades)}
        rank={select(rankLabel, rankOptions, "A")}
        faceUp
      />
    </SuitContainer>
  );
};
