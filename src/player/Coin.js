import React from "react";
import PropTypes from "prop-types";

const style = {
  fill: "#cccccc",
  stroke: "#848484",
  strokeWidth: 6
};

const honourStyle = {
  fill: "#ffdd55",
  stroke: "#ebc636",
  strokeWidth: 6
};

const Coin = ({ honour }) => (
  <svg viewBox="0 0 74.035713 74.035713">
    <g transform="translate(-65.79166,-106.52382)">
      <circle
        style={honour ? honourStyle : style}
        cx="102.80952"
        cy="143.54167"
        r="34.017857"
      />
    </g>
  </svg>
);

Coin.propTypes = {
  honour: PropTypes.bool
};

export default Coin;
