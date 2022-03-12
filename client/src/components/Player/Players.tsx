import { useState, useEffect } from "react";
import styled from "styled-components";
import usePlayer from "../../context/Player.context";
import { MdLeaderboard } from "react-icons/md";
import { GiQueenCrown } from "react-icons/gi";

const Players = () => {
  const { player, players, loading, getPlayers } = usePlayer();

  useEffect(() => {
    getPlayers();
  }, [player?.id]);

  return (
    <Container>
      <Row>
        <h2>Players</h2>
        <MdLeaderboard size={35} color="#FFD700" />
      </Row>

      {players.map((player, index) => {
        return (
          <Item key={player.id}>
            <div>{player.name}</div>{" "}
            <Row>
              {index === 0 && <GiQueenCrown color="#FFD700" size={20} />}
              <div>{player.score}</div>
            </Row>
          </Item>
        );
      })}
    </Container>
  );
};

export default Players;

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  min-height: 100%;
  border-radius: 12px;
  flex: 1;
  box-shadow: 0 3px 6px rgba(2, 12, 27, 0.7);
  background-color: #112240;
  padding: 20px;
  max-width: 400px;
  h2 {
    text-align: center;
    margin-right: 10px;
  }
`;

const Item = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
