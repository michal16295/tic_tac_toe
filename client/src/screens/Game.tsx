import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import usePlayer from "../context/Player.context";
import useGame from "../context/Game.context";
import Players from "../components/Player/Players";
import Board from "../components/Game/Board";

import routes from "../routes.json";

const Game = () => {
  const { player, getCurrentPlayerData } = usePlayer();
  const { newGame, userMove, loading, board, isUserMove, winner } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (player) {
      newGame(player.id);
    } else {
      navigate(routes.ON_BOARDING);
    }
  }, [player?.id]);

  useEffect(() => {
    if (player) {
      getCurrentPlayerData(player.id);
    }
  }, [winner]);

  const handleStep = (row: number, col: number): void => {
    if (player && isUserMove) userMove(player?.id, row, col);
  };

  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Row>
          <Wrapper>
            <div>
              Computer: 0 | {player?.name}: {player?.score}
            </div>
            <Board board={board} handleStep={handleStep} />
            {winner !== null && player && (
              <button onClick={() => newGame(player?.id)}>Play again</button>
            )}
          </Wrapper>
          <Players />
        </Row>
      )}
    </Container>
  );
};

export default Game;

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  min-height: 100%;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  flex-wrap: wrap;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
