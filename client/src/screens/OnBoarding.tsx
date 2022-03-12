import { useState } from "react";
import styled from "styled-components";
import usePlayer from "../context/Player.context";
import { IoGameControllerOutline } from "react-icons/io5";
import difficultyArr from "../constants/difficulty";
import LevelList from "../components/Game/LevelList";

const OnBoarding = () => {
  const { createPlayer, player } = usePlayer();
  const [name, setName] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleContinue = (): void => {
    if (name === "") return;
    setCurrentStep((prev) => ++prev);
  };

  const handleLevel = (level: number): void => {
    createPlayer(name, level);
  };

  const getStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <InputDiv>
              <IoGameControllerOutline size={50} />
              <Input
                placeholder="Enter your nickname"
                onChange={(e: any) => setName(e.target.value)}
              />
            </InputDiv>
            <Button onClick={handleContinue}>Continue</Button>
          </>
        );
      case 1:
        return <LevelList direction="column" onPress={handleLevel} />;
      default:
        return <div>Error...</div>;
    }
  };
  return (
    <Container>
      <Inner>
        <h1>Tic Tac Toe</h1>
        {getStep()}
      </Inner>
    </Container>
  );
};

export default OnBoarding;

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const Inner = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  background-color: #112240;
  margin: auto;
  width: 100%;
  max-width: 720px;
  min-height: 500px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  padding: 20px;
  justify-content: space-around;
  text-align: center;
`;
const InputDiv = styled.div`
  border-bottom: 2px solid #57cbff;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;
const Input = styled.input`
  font-family: "Poppins";
  padding: 10px 15px;
  width: 100%;
  outline: none;
  border: none;
  color: white;
  background: transparent;
  font-size: 20px;
  text-transform: capitalize;

  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  text-align: center;
  padding: 15px 20px;
  border-radius: 20px;
  margin: 0 auto;
  cursor: pointer;
  max-width: 200px;
  background-color: #57cbff;
  border: 3px solid white;
  font-size: clamp(1rem, 8vw, 1.5rem);
  box-shadow: 0 6px rgba(255, 255, 255, 0.8);
  color: #112240;

  &:hover {
    box-shadow: 0 6px rgba(17, 34, 64, 1);
  }
`;
