import React from "react";
import { uxPalette } from "../common/uxPalette";



const CardNumber = props => (
<div>
  <svg style={{height: "100%"}} viewBox="0 0 14 18">
    <text x="50%" y="15" letter-spacing="-1" text-anchor="middle">{props.rank}</text>
  </svg>
</div>
);

export default CardNumber;
