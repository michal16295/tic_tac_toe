import React, { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

  const createPlayer = (name: string, level: number) => {
    setLoading(true);
    playerApi
      .createPlayer(name, level)
      .then((newUser) => {
        setPlayer(newUser);
        navigate(routes.GAME);
      })
      .catch((newError) => setError(newError))
      .finally(() => setLoading(false));
  };

  const getPlayers = () => {
    setLoading(true);
    playerApi
      .getPlayers()
      .then((res) => {
        setPlayers(res);
      })
      .catch((newError) => setError(newError))
      .finally(() => setLoading(false));
  };

  const getCurrentPlayerData = (id: string) => {
    setLoading(true);
    playerApi
      .getPlayer(id)
      .then((res) => {
        setPlayer(res);
      })
      .catch((newError) => setError(newError))
      .finally(() => setLoading(false));
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
