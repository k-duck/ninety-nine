import React from "react";
import { uxPalette } from "../common/uxPalette";
import { SUIT } from "./constants";

const textStyle = suit => ({
  fill: (suit === SUIT.spades || suit == SUIT.clubs) ? "#000" : "#F00"
});

const CardNumber = props => (
<div>
  <svg style={{height: "100%"}} viewBox="0 0 14 18">
    <text style={textStyle(props.suit)} x="50%" y="15" letterSpacing="-1" textAnchor="middle">{props.rank}</text>
  </svg>
</div>
);

export default CardNumber;
