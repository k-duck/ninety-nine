import React from "react";
import PropTypes from "prop-types";
import { SUIT } from "./constants";

import Heart from "./Heart";
import Diamond from "./Diamond";
import Spade from "./Spade";
import Club from "./Club";

const SuitIcon = ({ suit }) => {
  switch (suit) {
    case SUIT.spades:
      return <Spade />;
    case SUIT.hearts:
      return <Heart />;
    case SUIT.clubs:
      return <Club />;
    case SUIT.diamonds:
      return <Diamond />;
    default:
      return <Spade />;
  }
};

SuitIcon.propTypes = {
  suit: PropTypes.string
};

export default SuitIcon;
