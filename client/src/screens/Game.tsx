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
  const { player, getCurrentPlayerData } = usePlayer();
  const { newGame, loading, board } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (player) {
      newGame(player.id);
      getCurrentPlayerData(player.id);
    } else {
      navigate(routes.ON_BOARDING);
    }
  }, []);

  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Wrapper>
          <div>Computer: 0 | {player?.name}: 100</div>
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
        </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: red;
`;

const Board = styled.div`
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  background-color: white;
  width: 50%;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
