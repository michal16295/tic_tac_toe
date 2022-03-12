import { useState } from "react";
import styled from "styled-components";
import usePlayer from "../context/Player.context";

const OnBoarding = () => {
  const { createPlayer, player } = usePlayer();
  const [name, setName] = useState<string>("");
  return (
    <Container>
      <h1>Tic Tac Toe</h1>
      <Input
        placeholder="Enter your nickname"
        onChange={(e: any) => setName(e.target.value)}
      />
      <Button onClick={() => createPlayer(name)}>Continue</Button>
    </Container>
  );
};

export default OnBoarding;

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  min-height: 100%;
  padding: 20px;
  justify-content: space-around;
  text-align: center;

  h1 {
    color: #57cbff;
    font-size: clamp(2.5rem, 8vw, 5rem);
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 3px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border-radius: 10px;
  border: none !important;
  padding: 10px 15px;
  width: 60%;
  max-width: 250px;
  background: white;
  margin: 0 auto;
`;

const Button = styled.button`
  text-align: center;
  display: inline-block;
  margin: 5px;
  font-weight: bold;
  padding: 10px 0 10px 10px;
  background-color: lightgray;
  text-shadow: -1px -1px black, 1px 1px white;
  color: gray;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -o-border-radius: 7px;
  border-radius: 7px;
  box-shadow: 0 0.2em gray;
  cursor: pointer;
`;
