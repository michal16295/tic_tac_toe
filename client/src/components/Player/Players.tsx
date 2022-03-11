import { useState, useEffect } from "react";
import styled from "styled-components";
import usePlayer from "../../context/Player.context";

const Players = () => {
  const { players, getPlayers } = usePlayer();

  useEffect(() => {
    if (!players) {
      getPlayers();
    }
  }, [players]);
  return <Container></Container>;
};

export default Players;

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  min-height: 100%;
  padding: 20px;
  justify-content: space-around;
`;
