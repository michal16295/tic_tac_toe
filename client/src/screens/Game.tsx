import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import usePlayer from "../context/Player.context";
import useGame from "../context/Game.context";

import routes from "../routes.json";

interface IProps {
  draw?: boolean;
  last?: boolean;
}

const Game = () => {
  const { player } = usePlayer();
  const { newGame, loading, board } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (player) {
      newGame(player.id);
    } else {
      navigate(routes.ON_BOARDING);
    }
  }, []);

  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Board>
          {board?.position?.map((p: string[], i: number) => {
            return (
              <Row key={i}>
                {p.map((c: string, j: number) => {
                  return (
                    <Col
                      draw={j !== 0}
                      last={i !== board.position.length - 1}
                      key={j}
                    >
                      {c}
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </Board>
      )}
    </Container>
  );
};

export default Game;

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  min-height: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const Board = styled.div`
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  background-color: white;
  width: 50%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Col = styled.div<IProps>`
  flex: 1;
  height: 10vh;
  border-left: ${(props) => props.draw && "1px solid black"};
  border-bottom: ${(props) => props.last && "1px solid black"};
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
`;
