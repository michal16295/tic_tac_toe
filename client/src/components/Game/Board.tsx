import { useState, useEffect } from "react";
import styled from "styled-components";

interface IProps {
  draw?: boolean;
  last?: boolean;
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
    </Container>
  );
};

export default Board;

const Container = styled.div`
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
