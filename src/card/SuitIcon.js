import React from "react";
import PropTypes from "prop-types";
import { SUIT, suits } from "./constants";

import Heart from "./Heart";
import Diamond from "./Diamond";
import Spade from "./Spade";
import Club from "./Club";

const SuitIcon = ({ suit }) => (
  <>
    {suit === SUIT.spades && <Spade />}
    {suit === SUIT.hearts && <Heart />}
    {suit === SUIT.diamonds && <Diamond />}
    {suit === SUIT.clubs && <Club />}
  </>
);

SuitIcon.propTypes = {
  suit: PropTypes.oneOf(suits)
};

export default SuitIcon;
