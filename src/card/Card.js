import React from "react";
import { uxPalette } from "../common/uxPalette";
import styled from "styled-components";

import SuitIcon from "./SuitIcon";


const SideCollumn = styled.div`
  display: flex;
  flex-direction: collumn;
`;

const Card = props => (
    <div>
        {/* Collumn 1 */}
        <SideCollumn>
            {/* <span>{RANK}</span> */}
            <SuitIcon suit={props.suit}/>
        </SideCollumn>
        {/* Collumn 2 */}
        <div>

        </div>
        {/* Collumn 3 */}
        <SideCollumn>
            <SuitIcon suit={props.suit}/>
            {/* <span>{RANK}</span> */}
        </SideCollumn>
    </div>
);

export default Card;
