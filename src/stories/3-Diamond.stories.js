import React from "react";
import styled from "styled-components";
import Diamond from "../card/Diamond";

export default {
  title: "Diamond",
  component: Diamond
};

const SuitContainer = styled.div`
  width: 50px;
`;

export const DiamondIcon = () => (
  <SuitContainer>
    <Diamond />
  </SuitContainer>
);
