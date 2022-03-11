import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import usePlayer from "../context/Player.context";
import useGame from "../context/Game.context";
import Players from "../components/Player/Players";

import routes from "../routes.json";

interface IProps {
  draw?: boolean;
  last?: boolean;
}

const Game = () => {
  const { player, getCurrentPlayerData } = usePlayer();
  const { newGame, userMove, loading, board, isUserMove } = useGame();
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
  }, []);

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
            <Board>
              {board?.map((p: string[], i: number) => {
                return (
                  <Row key={i}>
                    {p.map((c: string, j: number) => {
                      return (
                        <Col
                          draw={j !== 0}
                          last={i !== board.length - 1}
                          key={j}
                          onClick={() => handleStep(i, j)}
                        >
                          {c}
                        </Col>
                      );
                    })}
                  </Row>
                );
              })}
            </Board>
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

const Board = styled.div`
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  background-color: white;
  margin: 30px auto;
  width: 70%;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Col = styled.div<IProps>`
  flex: 1;
  height: 10vh;
  border-left: ${(props) => props.draw && "5px solid gray"};
  border-bottom: ${(props) => props.last && "5px solid gray"};
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;

  &:hover {
    background-color: gray;
  }
`;
