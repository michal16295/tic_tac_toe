import React, { createContext, ReactNode, useState } from "react";

import * as gameApi from "../apis/game";
import { IBoard, GameContextType } from "../types/game";

export const GameContext = createContext<GameContextType | null>(null);

const GameProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [board, setBoard] = useState<IBoard>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const newGame = (id: number) => {
    setLoading(true);
    gameApi
      .newGame(id)
      .then((res) => {
        setBoard(res);
      })
      .catch((newError) => setError(newError))
      .finally(() => setLoading(false));
  };

  return (
    <GameContext.Provider value={{ newGame, board, loading, error }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
