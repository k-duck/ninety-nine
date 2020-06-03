import React from "react";
import { uxPalette } from "../common/uxPalette";
import styled from "styled-components";

import SideColumn from "./SideColumn"

const AlignedCard = styled.div`
  display: flex;
  height: 100%;
`;

const CardCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
`;

const Card = props => (
    <AlignedCard>
      <SideColumn suit={props.suit} rank={props.rank}/>

      <CardCenter>

      </CardCenter>

      <SideColumn flipped suit={props.suit} rank={props.rank}/>
    </AlignedCard>
);

export default Card;
