export class Board {
  position = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
}

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
  board?: Board;
  winner: Winner;
}
