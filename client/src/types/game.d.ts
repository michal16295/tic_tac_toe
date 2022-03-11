export interface StepRequest {
  id: string;
  i: number;
  j: number;
}

export enum Winner {
  none,
  player,
  computer,
  tie,
}

export interface StepResponse {
  board: IBoard | undefined;
  winner: Winner;
}

export interface GameContextType {
  board: IBoard | undefined;
  loading: boolean;
  error?: string;
  newGame: (id: string) => void;
  userMove: (id: string, col: number, row: number) => void;
}
