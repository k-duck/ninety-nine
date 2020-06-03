import React from "react";
import styled from "styled-components";
import Card from "../card/Card";
import { SUIT } from "../card/constants";

export default {
  title: "Card",
  component: Card
};

export const CardIcon = () => (
    <Card suit={SUIT.spades}/>
);
