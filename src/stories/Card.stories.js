import React from "react";
import styled from "styled-components";
import Card from "../card/Card";
import { SUIT } from "../card/constants";

export default {
  title: "Card",
  component: Card
};

const SuitContainer = styled.div`
  width: 200px;
  height: 300px;
`;

export const CardIcon = () => (
    <SuitContainer>
      <Card suit={SUIT.spades} rank={10}/>
    </SuitContainer>
);
