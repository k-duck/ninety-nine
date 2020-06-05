import React from "react";
import { uxPalette } from "../common/uxPalette";

import styled from "styled-components";
import SuitIcon from "./SuitIcon";
import CardNumber from "./CardNumber";

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  transform: ${props => props.flipped ? "scale(-1, -1)" : "none"};
  align-items: center;
`;

const NumberContainer = styled.div`
  width: 100%;
  padding-top: 128.6%;
  position: relative;
  & div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
const SuitContainer = styled.div`
  width: 70%;
`;

const SideColumn = ({flipped, suit, rank}) => (
  <ColumnContainer flipped={flipped}>
    <NumberContainer>
      <CardNumber rank={rank} suit={suit} />
    </NumberContainer>
    <SuitContainer>
      <SuitIcon suit={suit}/>
    </SuitContainer>
  </ColumnContainer>

);

export default SideColumn;