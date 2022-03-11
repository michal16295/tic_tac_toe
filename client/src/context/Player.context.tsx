import React, { createContext, ReactNode, useState } from "react";

import * as playerApi from "../apis/player";
import { Player, PlayerContextType } from "../types/player";

export const PlayerContext = createContext<PlayerContextType | null>(null);

const PlayerProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [player, setPlayer] = useState<Player>();
  const [players, setPlayers] = useState<Array<Player>>([]);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const createPlayer = (name: string) => {
    setLoading(true);
    playerApi
      .createPlayer(name)
      .then((newUser) => {
        setPlayer(newUser);
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

export default PlayerProvider;
