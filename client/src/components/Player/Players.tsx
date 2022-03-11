import { useState, useEffect } from "react";
import styled from "styled-components";
import usePlayer from "../../context/Player.context";

const Players = () => {
  const { player, players, loading, getPlayers } = usePlayer();

  useEffect(() => {
    getPlayers();
  }, [player?.id]);

  return (
    <Container>
      <h3>Players</h3>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {players.map((player) => {
            return (
              <div key={player.id}>
                Player: {player.name} | Score: {player.score}
              </div>
            );
          })}
        </div>
      )}
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
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding: 20px;
  h3 {
    text-align: center;
  }
`;
