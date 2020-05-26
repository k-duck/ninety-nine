import React from "react";
import styled from "styled-components";
import Spade from "../card/Spade";

export default {
  title: "Spade",
  component: Spade
};

const SuitContainer = styled.div`
  width: 50px;
`;

export const SpadeIcon = () => (
  <SuitContainer>
    <Spade />
  </SuitContainer>
);
