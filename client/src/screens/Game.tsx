import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import usePlayer from "../context/Player.context";
import useGame from "../context/Game.context";
import Players from "../components/Player/Players";
import Board from "../components/Game/Board";
import Popup from "../components/Game/Popup";
import difficultyArr from "../constants/difficulty";
import LevelList from "../components/Game/LevelList";

import routes from "../routes.json";

interface IProps {
  draw?: boolean;
}

const Game = () => {
  const { player, getCurrentPlayerData, changeDifficulty } = usePlayer();
  const { newGame, userMove, loading, board, isUserMove, winner } = useGame();
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showLevelArr, setShowLevelArr] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (player) {
      newGame(player.id);
    } else {
      navigate(routes.ON_BOARDING);
    }
  }, []);

  useEffect(() => {
    if (player) {
      getCurrentPlayerData(player.id);
    }
    if (winner !== undefined) {
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

  const handleLevel = (level: number): void => {
    if (player) {
      setShowLevelArr(false);
      changeDifficulty(player.id, level);
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
            text={
              winner === null
                ? "It's a Tie!"
                : winner === true
                ? "You Win!"
                : "AI Wins!"
            }
          />
          <Row>
            <Wrapper>
              <h1>Tic Tac Toe</h1>
              <Flex>
                <ScoreName draw={isUserMove}>{player?.name}</ScoreName>
                <Scores>
                  {player?.score} - {player?.computerScore}
                </Scores>
                <ScoreName draw={!isUserMove}>AI</ScoreName>
              </Flex>
              <Board board={board} handleStep={handleStep} />
              {player && (
                <div>
                  <Button onClick={() => newGame(player?.id)}>New game</Button>
                  <Button onClick={() => setShowLevelArr((prev) => !prev)}>
                    Change difficulty
                  </Button>
                </div>
              )}
              {showLevelArr && <LevelList onPress={handleLevel} />}
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
  column-gap: 20px;
  flex-wrap: wrap;
  width: 80%;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  font-family: "Poppins";
  padding: 10px 20px;
  background-color: #ffd700;
  border-radius: 7px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  margin: 0 10px;
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
