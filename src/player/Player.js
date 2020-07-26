import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ScaleText from "react-scale-text";
import Hand from "../hand/Hand";
import Coin from "./Coin";
import AspectRatioBox from "../card/AspectRatioBox";
import { suits, ranks } from "../cardDeck/constants";

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  transform: translateY(${props => (props.active ? "0" : "50%")});
  transition: transform 0.5s;
`;

const PlayerInfo = styled.div`
  background-color: ${props => (props.active ? "Black" : "White")};
  border-radius: 3%;
  border: 4px solid black;
  box-sizing: border-box;
  margin-top: 5%;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const PlayerIconContainer = styled.div`
  width: 33.3%;
  border-right: 4px solid black;
`;

const PlayerIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const NameCoinsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 66%;
`;

const CoinsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 15%;
  box-sizing: border-box;
`;

const CoinContainer = styled.div`
  width: 30%;
  padding-right: 3%;
`;

const PlayerName = styled.span`
  color: ${props => (props.active ? "White" : "Black")};
  padding: 0 3%;
  white-space: nowrap;
`;

const CenteredContent = styled.div`
  width: 100%;
  height: 100%;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Player = ({ cards, coins, user, active, name }) => (
  <PlayerContainer user={user}>
    <HandContainer active={active}>
      <Hand cards={cards} faceUp={!!user} active={active} />
    </HandContainer>
    <PlayerInfo active={active}>
      <PlayerIconContainer>
        <AspectRatioBox ratio={1}>
          <PlayerIcon
            src="https://wiki.teamfortress.com/w/images/thumb/3/3d/Soldier_of_Fortune.png/250px-Soldier_of_Fortune.png"
            alt="Player Icon"
          />
        </AspectRatioBox>
      </PlayerIconContainer>
      <NameCoinsWrapper>
        <CenteredContent>
          <ScaleText>
            <PlayerName active={active}>{name}</PlayerName>
          </ScaleText>
        </CenteredContent>
        <CoinsContainer>
          {coins === 0 && (
            <CoinContainer user={user}>
              <Coin honour />
            </CoinContainer>
          )}
          {coins > 0 &&
            [...Array(coins)].map((num, idx) => (
              <CoinContainer user={user} key={idx}>
                <Coin />
              </CoinContainer>
            ))}
        </CoinsContainer>
      </NameCoinsWrapper>
    </PlayerInfo>
  </PlayerContainer>
);

Player.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      rank: PropTypes.oneOf(ranks),
      suit: PropTypes.oneOf(suits)
    })
  ),
  coins: PropTypes.number,
  user: PropTypes.bool,
  active: PropTypes.bool,
  name: PropTypes.string
};

export default Player;
