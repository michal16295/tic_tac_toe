import { useState, useEffect } from "react";
import styled from "styled-components";
import Figure from "./Figure";

interface IProps {
  draw?: boolean;
  last?: boolean;
  empty?: boolean;
}

const Board = ({
  board,
  handleStep,
}: {
  board: string[][];
  handleStep: (i: number, j: number) => void;
}) => {
  return (
    <Container>
      {board?.map((p: string[], i: number) => {
        return (
          <Row key={i}>
            {p.map((c: string, j: number) => {
              return (
                <Col
                  draw={j !== 0}
                  empty={board[i][j] === ""}
                  last={i !== board.length - 1}
                  key={j}
                  onClick={() => handleStep(i, j)}
                >
                  <Figure figure={c} />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
};

export default Board;

const Container = styled.div`
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(2, 12, 27, 0.7);
  background-color: #112240;
  margin: 30px auto;
  width: 100%;
  max-width: 720px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Col = styled.div<IProps>`
  flex: 1;
  height: 15vh;
  border-left: ${(props) => props.draw && "5px solid #ccd6f6"};
  border-bottom: ${(props) => props.last && "5px solid #ccd6f6"};
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.empty && "#020c1b"};
  }
`;
