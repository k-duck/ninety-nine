import React from "react";
import styled from "styled-components";
import { withKnobs, number } from "@storybook/addon-knobs";
import Hand from "../hand/Hand";
import { SUIT, RANK } from "../card/constants";

export default {
  title: "Hand",
  component: Hand,
  decorators: [withKnobs]
};

const hand = [
  {
    suit: SUIT.hearts,
    rank: RANK.four
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

const numberOptions = {
  range: true,
  min: 100,
  max: 1000,
  step: 25
};
const widthLabel = "Width in Pixels";

const Container = styled.div`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const HandThing = () => {
  const width = number(widthLabel, 600, numberOptions);

  return (
    <Container width={`${width}px`} height={`${(width * 300) / 200}px`}>
      <Hand cards={hand} faceUp />
    </Container>
  );
};
