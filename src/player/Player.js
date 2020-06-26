import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Hand from "../Hand";
import Coin from "./Coin";
import AspectRatioBox from "../card/AspectRatioBox";
import { suits, ranks } from "../card/constants";

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${props => (props.user ? "300px" : "150px")};
`;

const HandContainer = styled.div`
  display: flex;
  justify-content: center;
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
  justify-content: space-between;
  padding: 0 15%;
  box-sizing: border-box;
`;

const CoinContainer = styled.div`
  width: ${props => (props.user ? "35px" : "15px")};
`;

const PlayerName = styled.span`
  color: ${props => (props.active ? "White" : "Black")};
  font-size: ${props => (props.user ? "35px" : "15px")};
  padding-bottom: 3%;
`;

const Player = ({ cards, coins, user, active }) => (
  <PlayerContainer user={user}>
    <HandContainer>
      <Hand cards={cards} faceUp={!!user} />
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
        <PlayerName user={user} active={active}>
          Emberfire
        </PlayerName>
        <CoinsContainer>
          {coins === 0 && (
            <CoinContainer user={user}>
              <Coin honour />
            </CoinContainer>
          )}
          {coins > 0 &&
            [...Array(coins)].map((num, idx) => (
              <CoinContainer user={user}>
                <Coin key={idx} />
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
  active: PropTypes.bool
};

export default Player;
