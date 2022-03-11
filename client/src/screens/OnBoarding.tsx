import { useState } from "react";
import styled from "styled-components";
import { createPlayer } from "../apis/player";

const OnBoarding = () => {
  const [name, setName] = useState<string>("");
  return (
    <Container>
      <Row></Row>

      <Input
        placeholder="Enter your nickname"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
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
  width: 40%;
  font-family: "Poppins";
  font-size: 1rem;
  margin: 0 auto;
  border-radius: 15px;
  outline: none;
  border: none;
  padding: 10px;
  max-width: 200px;
  background-color: white;
  box-shadow: 0 5px 20px 8px rgba(227, 230, 234, 255);
  cursor: pointer;
`;
