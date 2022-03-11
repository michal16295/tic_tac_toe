import { useState, useEffect } from "react";
import styled from "styled-components";
import useGameData from "../hooks/useGameData";

const Game = () => {
  const { board, loading } = useGameData(1646996436940);
  console.log(board);
  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Board>
          {board &&
            board.positions.map((row: any, i: number) => (
              <div key={i}>
                {row.map((col: string, j: number) => (
                  <span key={j}>{col}</span>
                ))}
              </div>
            ))}
        </Board>
      )}
    </Container>
  );
};

export default Game;

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  min-height: 100%;
  padding: 20px;
  justify-content: space-around;
`;

const Board = styled.div`
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  background-color: white;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Col = styled.div`
  height: 90px;
  width: 90px;
  background: red;
`;
