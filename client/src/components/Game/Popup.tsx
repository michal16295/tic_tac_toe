import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInLeftBig } from "react-animations";

interface IProps {
  show?: boolean;
}

const Popup = ({
  text,
  show,
  onPress,
}: {
  text: string;
  show: boolean;
  onPress: () => void;
}) => {
  return (
    <Container show={show} onClick={onPress}>
      <h1>{text}</h1>
      <h3>Press anywhere to play again.</h3>
    </Container>
  );
};

export default Popup;

const bounceAnimation = keyframes`${fadeInLeftBig}`;

const Container = styled.div<IProps>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  min-height: 150px;
  padding: 20px 30px;
  background-color: rgba(0, 0, 0, 0.6);
  animation: 1s ${bounceAnimation};
  text-align: center;
  color: white;
  top: 10px;

  h1 {
    font-size: clamp(3rem, 8vw, 4rem);
  }

  h3 {
    font-size: clamp(2rem, 8vw, 3.5rem);
  }
`;
