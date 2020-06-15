import React from "react";
import PropTypes from "prop-types";
import { RANK, ranks, suits } from "./constants";

import AceDesign from "./icon-designs/AceDesign";
import TwoDesign from "./icon-designs/TwoDesign";
import ThreeDesign from "./icon-designs/ThreeDesign";
import FourDesign from "./icon-designs/FourDesign";
import FiveDesign from "./icon-designs/FiveDesign";
import SixDesign from "./icon-designs/SixDesign";
import SevenDesign from "./icon-designs/SevenDesign";
import EightDesign from "./icon-designs/EightDesign";
import NineDesign from "./icon-designs/NineDesign";
import TenDesign from "./icon-designs/TenDesign";
import JackDesign from "./icon-designs/JackDesign";
import QueenDesign from "./icon-designs/QueenDesign";
import KingDesign from "./icon-designs/KingDesign";

const CenterDesign = ({ suit, rank }) => (
  <>
    {rank === RANK.ace && <AceDesign suit={suit} />}
    {rank === RANK.two && <TwoDesign suit={suit} />}
    {rank === RANK.three && <ThreeDesign suit={suit} />}
    {rank === RANK.four && <FourDesign suit={suit} />}
    {rank === RANK.five && <FiveDesign suit={suit} />}
    {rank === RANK.six && <SixDesign suit={suit} />}
    {rank === RANK.seven && <SevenDesign suit={suit} />}
    {rank === RANK.eight && <EightDesign suit={suit} />}
    {rank === RANK.nine && <NineDesign suit={suit} />}
    {rank === RANK.ten && <TenDesign suit={suit} />}
    {rank === RANK.jack && <JackDesign suit={suit} />}
    {rank === RANK.queen && <QueenDesign suit={suit} />}
    {rank === RANK.king && <KingDesign suit={suit} />}
  </>
);

CenterDesign.propTypes = {
  suit: PropTypes.oneOf(suits),
  rank: PropTypes.oneOf(ranks)
};

export default CenterDesign;
