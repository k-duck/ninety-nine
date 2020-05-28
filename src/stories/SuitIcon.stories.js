import React from "react";
import styled from "styled-components";
import SuitIcon from "../card/SuitIcon";
import { SUIT } from "../card/constants";

export default {
  title: "SuitIcon",
  component: SuitIcon
};

const SuitContainer = styled.div`
  width: 50px;
`;

export const Suit = () => (
  <>
    <SuitContainer>
      <SuitIcon suit={SUIT.clubs} />
    </SuitContainer>
    <SuitContainer>
      <SuitIcon suit={SUIT.hearts} />
    </SuitContainer>
    <SuitContainer>
      <SuitIcon suit={SUIT.diamonds} />
    </SuitContainer>
    <SuitContainer>
      <SuitIcon suit={SUIT.spades} />
    </SuitContainer>
  </>
);
