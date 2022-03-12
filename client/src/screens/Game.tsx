import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import usePlayer from "../context/Player.context";
import useGame from "../context/Game.context";
import Players from "../components/Player/Players";
import Board from "../components/Game/Board";
import Popup from "../components/Game/Popup";

import routes from "../routes.json";

interface IProps {
  draw?: boolean;
}

const Game = () => {
  const { player, getCurrentPlayerData } = usePlayer();
  const { newGame, userMove, loading, board, isUserMove, winner } = useGame();
  const [showPopup, setShowPopup] = useState<boolean>(false);
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
    if (winner !== null) {
      setShowPopup(true);
    }
  }, [winner]);

  const handleStep = (row: number, col: number): void => {
    if (player && isUserMove) userMove(player?.id, row, col);
  };

  const handleReset = (): void => {
    if (player && showPopup) {
      setShowPopup(false);
      newGame(player.id);
    }
  };

  return (
    <Container onClick={handleReset}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Popup
            show={showPopup}
            onPress={() => setShowPopup(false)}
            text={winner ? "You Win!" : "AI Wins"}
          />
          <Row>
            <Wrapper>
              <Flex>
                <ScoreName draw={isUserMove}>{player?.name}</ScoreName>
                <Scores>
                  {player?.score} - {player?.computerScore}
                </Scores>
                <ScoreName draw={!isUserMove}>AI</ScoreName>
              </Flex>
              <Board board={board} handleStep={handleStep} />
              {player && (
                <Button onClick={() => newGame(player?.id)}>New game</Button>
              )}
            </Wrapper>
            <Players />
          </Row>
        </>
      )}
    </Container>
  );
};

export default Game;

const Container = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  min-height: 100%;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 350px;
  margin-bottom: 20px;
  align-items: center;
  flex-wrap: wrap;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #57cbff;
  border-radius: 7px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 5px 6px rgba(87, 203, 255, 0.16);
`;

const ScoreName = styled.div<IProps>`
  font-weight: 500;
  text-transform: capitalize;
  min-width: 100px;
  text-align: center;
  border-bottom: ${(props) => props.draw && "5px solid #57cbff"};
`;

const Scores = styled.div`
  border-radius: 15px;
  margin: 0 20px;
  background-color: #ccd6f6;
  box-shadow: 0 5px 6px rgba(87, 203, 255, 0.16);
  padding: 4px 20px;
  color: black;
`;
