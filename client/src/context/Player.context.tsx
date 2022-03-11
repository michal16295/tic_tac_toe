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
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const createPlayer = (name: string) => {
    setLoading(true);
    playerApi
      .createPlayer(name)
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

  return (
    <PlayerContext.Provider
      value={{ createPlayer, getPlayers, player, players, loading, error }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default function useAuth(): PlayerContextType {
  return useContext(PlayerContext);
}
