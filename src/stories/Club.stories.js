import React from "react";
import styled from "styled-components";
import Club from "../card/Club";

export default {
  title: "Club",
  component: Club
};

const SuitContainer = styled.div`
  width: 50px;
`;

export const ClubIcon = () => (
  <SuitContainer>
    <Club />
  </SuitContainer>
);
