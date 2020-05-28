import React from "react";
import { uxPalette } from "../common/uxPalette";

const style = {
  fill: uxPalette.suit.red
};

const Diamond = () => (
  <svg viewBox="0 0 66.951202 98.340202">
    <path
      style={style}
      transform="translate(-77.649395,-98.151325)"
      d="m 111.12499,98.151325 c -10.23887,17.038435 -21.765265,33.428465 -33.475595,49.170105 12.26213,15.74164 23.972455,32.13167 33.475595,49.1701 9.87102,-17.36263 20.66169,-33.91476 33.47561,-49.1701 -12.44606,-15.74164 -23.78852,-32.45587 -33.47561,-49.170105 z"
    />
  </svg>
);

export default Diamond;
