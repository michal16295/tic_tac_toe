import React, {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";

import * as gameApi from "../apis/game";
import { GameContextType } from "../types/game";

const GameContext = createContext<GameContextType>({} as GameContextType);

export const GameProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [board, setBoard] = useState<string[][]>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isUserMove, setIsUserMove] = useState<boolean>(true);
  const [winner, setWinner] = useState<boolean | null>(null);

  const newGame = async (id: string) => {
    try {
      setLoading(true);
      const res = await gameApi.newGame(id);
      setBoard(res.position);
      setIsUserMove(true);
      setWinner(null);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  const userMove = async (id: string, i: number, j: number) => {
    setMove(i, j);
    setIsUserMove(false);
    setTimeout(() => {
      sendMove(id, i, j);
    }, 800);
  };

  const setMove = (i: number, j: number) => {
    let arr: string[][] = [];
    if (board) {
      arr = [...board];
      if (arr[i][j] !== "") return;
      arr[i][j] = "X";
      setBoard(arr);
    }
  };

  const sendMove = async (id: string, i: number, j: number) => {
    try {
      const res = await gameApi.makeMove({ id, i, j });
      if (!res || res === "") setIsUserMove(true);
      else {
        switch (res.winner) {
          case 1:
            setWinner(true);
            break;
          case 0:
            setIsUserMove(true);
            setBoard(res.board.position);
            break;
          default:
            setWinner(false);
            setBoard(res.board.position);
        }
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <GameContext.Provider
      value={{ newGame, userMove, board, loading, error, isUserMove, winner }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default function useAuth(): GameContextType {
  return useContext(GameContext);
}
