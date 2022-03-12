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
      <h2>{text}</h2>
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
  background-color: rgba(0, 0, 0, 0.7);
  animation: 0.8s ${bounceAnimation};
  text-align: center;
  color: white;
  bottom: 60%;

  h2 {
    font-size: clamp(3rem, 8vw, 4rem);
  }

  h3 {
    font-size: clamp(2rem, 8vw, 3.5rem);
  }
`;
