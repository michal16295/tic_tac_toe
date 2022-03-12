import React, { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as playerApi from "../apis/player";
import { Player, PlayerContextType } from "../types/player";
import routes from "../routes.json";

const PlayerContext = createContext<PlayerContextType>({} as PlayerContextType);

export const PlayerProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [player, setPlayer] = useState<Player>();
  const [players, setPlayers] = useState<Array<Player>>([]);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const createPlayer = async (name: string, level: number) => {
    try {
      setLoading(true);
      const newUser = await playerApi.createPlayer(name, level);
      setPlayer(newUser);
      navigate(routes.GAME);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const getPlayers = async () => {
    try {
      setLoading(true);
      const res = await playerApi.getPlayers();
      setPlayers(res);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const getCurrentPlayerData = async (id: string) => {
    try {
      setLoading(true);
      const res = await playerApi.getPlayer(id);
      setPlayer(res);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const changeDifficulty = async (id: string, level: number) => {
    try {
      setLoading(true);
      let res = await playerApi.changeDifficulty(id, level);
      setPlayer(res);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        createPlayer,
        getPlayers,
        getCurrentPlayerData,
        changeDifficulty,
        player,
        players,
        loading,
        error,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default function useAuth(): PlayerContextType {
  return useContext(PlayerContext);
}
