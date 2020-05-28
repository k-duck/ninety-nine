import React from "react";
import styled from "styled-components";
import Heart from "../card/Heart";

export default {
  title: "Heart",
  component: Heart
};

const SuitContainer = styled.div`
  width: 50px;
`;

export const HeartIcon = () => (
  <SuitContainer>
    <Heart />
  </SuitContainer>
);
