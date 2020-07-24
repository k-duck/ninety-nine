import React from "react";
import styled from "styled-components";
import IconColumn from "../card/IconColumn";
import { SUIT } from "../cardDeck/constants";

export default {
  title: "IconColumn",
  component: IconColumn
};

const SuitContainer = styled.div`
  width: 33.3px;
  height 100px;
`;

export const Column = () => (
  <SuitContainer>
    <IconColumn suit={SUIT.spades} layout={[false, true]} />
  </SuitContainer>
);
