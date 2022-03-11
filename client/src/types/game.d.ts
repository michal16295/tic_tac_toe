export interface StepRequest {
  id: number;
  i: number;
  j: number;
}

export interface IBoard {
  positions: Array<any>;
}

export enum Winner {
  none,
  player,
  computer,
  tie,
}

export interface StepResponse {
  i?: number;
  j?: number;
  winner: Winner;
}

export interface GameContextType {
  board: IBoard | undefined;
  loading: boolean;
  error?: string;
  newGame: (id: number) => void;
}
